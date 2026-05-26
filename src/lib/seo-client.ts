import { supabase } from './supabase'
import type { SeoPage } from './seo'

// ── Client-side read — for admin UI dropdowns, previews etc ──────────────────
export async function getSeoForRouteClient(route: string): Promise<SeoPage | null> {
  const { data } = await supabase
    .from('seo_pages')
    .select('*')
    .eq('route', route)
    .single()

  return data ?? null
}