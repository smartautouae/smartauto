import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import HomePageClient from "./HomePageClient"

export const dynamic = 'force-dynamic'

// SEO
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('/', {
    title: 'Smart Auto UAE | Car Window Tinting Dubai & Sharjah',
    description: 'Premium car window tinting, PPF, ceramic coating and smart film in Dubai & Sharjah. 3M & TotalGard certified. RTA compliant. 4 branches. Open 7 days.',
  })
}


export default function Page() {
  return <HomePageClient />
}