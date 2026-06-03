import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const REAL_PAGES = [
  { route: '/',                                                   page_label: 'Home' },
  { route: '/blog',                                               page_label: 'Blog' },
  { route: '/branches',                                           page_label: 'Branches' },
  { route: '/contact',                                            page_label: 'Contact Us' },
  { route: '/gallery',                                            page_label: 'Gallery' },
  { route: '/testimonials',                                       page_label: 'Testimonials' },
  { route: '/why-us',                                             page_label: 'Why Us' },
  { route: '/services',                                           page_label: 'Services' },
  { route: '/services/anti-shatter-film-safety-film',             page_label: 'Anti-Shatter Film' },
  { route: '/services/car-detailing-polishing-dubai-sharjah',     page_label: 'Car Detailing & Polishing' },
  { route: '/services/car-window-tinting-dubai-sharjah',          page_label: 'Car Window Tinting' },
  { route: '/services/car-wrapping-dubai-sharjah',                page_label: 'Car Wrapping' },
  { route: '/services/colour-ppf-dubai-sharjah',                  page_label: 'Colour PPF' },
  { route: '/services/commercial-window-tinting-dubai-sharjah',   page_label: 'Commercial Window Tinting' },
  { route: '/services/nano-ceramic-coating-dubai-sharjah',        page_label: 'Nano Ceramic Coating' },
  { route: '/services/paint-protection-film-dubai-sharjah',       page_label: 'Paint Protection Film' },
  { route: '/services/surface-protection-film-dubai-sharjah',     page_label: 'Surface Protection Film' },
  { route: '/services/switchable-smart-glass-film-dubai-sharjah', page_label: 'Switchable Smart Glass Film' },
  { route: '/services/villa-window-tinting-dubai-sharjah',        page_label: 'Villa Window Tinting' },
]

async function seed() {
  console.log('🌱 Starting SEO pages seed...')

  const { data: existing, error: fetchError } = await supabaseAdmin
    .from('seo_pages')
    .select('id, route, page_label')

  if (fetchError) { console.error('Fetch error:', fetchError.message); process.exit(1) }

  const realRoutes    = new Set(REAL_PAGES.map(p => p.route))
  const existingRoutes = new Set(existing!.map(p => p.route))

  // 1. Delete stale rows not in real pages
  const toDelete = existing!.filter(p => !realRoutes.has(p.route))
  if (toDelete.length > 0) {
    const { error } = await supabaseAdmin
      .from('seo_pages')
      .delete()
      .in('id', toDelete.map(p => p.id))
    if (error) { console.error('Delete error:', error.message); process.exit(1) }
    console.log(`🗑  Deleted ${toDelete.length} stale routes:`, toDelete.map(p => p.route))
  } else {
    console.log('✅ No stale routes to delete')
  }

  // 2. Insert missing real pages with blank SEO fields
  const toInsert = REAL_PAGES.filter(p => !existingRoutes.has(p.route))
  if (toInsert.length > 0) {
    const { error } = await supabaseAdmin
      .from('seo_pages')
      .insert(toInsert.map(p => ({
        route:        p.route,
        page_label:   p.page_label,
        og_type:      'website',
        twitter_card: 'summary_large_image',
        robots:       'index, follow',
        schema_type:  'LocalBusiness',
      })))
    if (error) { console.error('Insert error:', error.message); process.exit(1) }
    console.log(`➕ Inserted ${toInsert.length} new routes:`, toInsert.map(p => p.route))
  } else {
    console.log('✅ No new routes to insert')
  }

  // 3. Fix null page_labels on existing rows
  for (const page of REAL_PAGES) {
    const row = existing!.find(p => p.route === page.route)
    if (row && !row.page_label) {
      await supabaseAdmin
        .from('seo_pages')
        .update({ page_label: page.page_label })
        .eq('route', page.route)
    }
  }
  console.log('✅ page_labels fixed')
  console.log('🎉 Seed complete!')
}

seed()