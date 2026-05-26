import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache'
import { getSeoForRoute } from '@/lib/seo'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function isAuthorized(req: NextRequest): Promise<boolean> {
  // 1. Try Bearer token first
  const authHeader = req.headers.get('authorization')
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.slice(7)
    const { data: { user }, error } = await supabaseAdmin.auth.getUser(token)
    if (!error && user) {
      console.log('✅ Authorized via Bearer token:', user.email)
      return true
    }
    console.log('❌ Bearer token invalid:', error?.message)
  }

  // 2. Fall back to cookie session
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cs) => cs.forEach(({ name, value, options }) =>
          cookieStore.set(name, value, options)
        ),
      },
    }
  )
  const { data: { user } } = await supabase.auth.getUser()
  console.log('🍪 Cookie auth user:', user?.email ?? 'null')
  return !!user
}

// [...route] gives string[] e.g. ['services', 'ceramic-coating']
// Join and prepend slash → '/services/ceramic-coating'
function decodeRoute(segments: string[]): string {
  return '/' + segments.map(decodeURIComponent).join('/')
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ route: string[] }> }
) {
  if (!(await isAuthorized(req)))
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { route } = await params
  const decoded = decodeRoute(route)
  console.log('GET seo route:', decoded)

  const data = await getSeoForRoute(decoded)
  return NextResponse.json(data ?? {})
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ route: string[] }> }
) {
  if (!(await isAuthorized(req)))
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { route } = await params
  const decoded = decodeRoute(route)
  console.log('PUT seo route:', decoded)

  const body = await req.json()

  const { error } = await supabaseAdmin
    .from('seo_pages')
    .upsert(
      { route: decoded, ...body, updated_at: new Date().toISOString() },
      { onConflict: 'route' }
    )

  if (error) {
    console.error('Supabase upsert error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // ── Bust the cache immediately so next page load gets fresh metadata ──
revalidateTag('seo-pages', 'max')
  console.log('✅ Cache revalidated for tag: seo-pages')

  return NextResponse.json({ success: true })
}