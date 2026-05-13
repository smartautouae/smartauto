// middleware.ts  ← must be at project root, same level as next.config.ts
import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Let /admin/login through — otherwise infinite redirect loop
  if (pathname.startsWith('/admin/login')) {
    return NextResponse.next()
  }

  // Only protect /admin/*
  if (!pathname.startsWith('/admin')) {
    // Still inject x-pathname header for services layout
    const res = NextResponse.next()
    res.headers.set('x-pathname', pathname)
    return res
  }

  // ── Check Supabase session ────────────────────────────────────────────────
  let res = NextResponse.next()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            req.cookies.set(name, value)
            res.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    // Not logged in → redirect to /admin/login
    const loginUrl = new URL('/admin/login', req.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Inject x-pathname for server components that need it
  res.headers.set('x-pathname', pathname)
  return res
}

export const config = {
  matcher: [
    /*
     * Match all paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimisation)
     * - favicon.ico
     * - public assets
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf)).*)',
  ],
}