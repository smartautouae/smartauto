import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import AntiShatterFilmPage from "./AntiShatterFilmPage";

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/services/anti-shatter-film-safety-film', {
    title: 'Anti-Shatter Film & Safety Film Dubai | Smart Auto UAE',
    description: 'Professional anti-shatter and safety window film for villas, offices & commercial buildings in Dubai & Sharjah.',
  })
}

export default function Page() {
  return <AntiShatterFilmPage />
}