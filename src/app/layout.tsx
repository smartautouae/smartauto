import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatbotWrapper from "@/components/ChatbotWrapper";
import { getSeoForRoute } from "@/lib/seo";

const inter    = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const BASE_URL = "https://smartautouae.ae";

const FALLBACK = {
  title:       "Smart Auto UAE | #1 Window Tinting, PPF & Ceramic Coating in Dubai & Sharjah",
  description: "Smart Auto UAE - Dubai & Sharjah's most trusted Car Protection centre. Premium window tinting, PPF, ceramic coating, car detailing & vinyl wrapping. 50,000+ happy clients. Free inspection.",
};

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoForRoute("/");

  const title       = seo?.title       || FALLBACK.title;
  const description = seo?.description || FALLBACK.description;
  const ogTitle     = seo?.og_title    || title;
  const ogDesc      = seo?.og_description || description;
  const ogImage     = seo?.og_image    || "/og-image.jpg";
  const canonical   = seo?.canonical   || BASE_URL;
  const robots      = seo?.robots      || "index, follow";

  return {
    metadataBase: new URL(BASE_URL),

    title,
    description,
    keywords: seo?.keywords || undefined,

    authors:   [{ name: "Smart Auto UAE", url: BASE_URL }],
    creator:   "Smart Auto UAE",
    publisher: "Smart Auto UAE",
    category:  "automotive",

    alternates: { canonical },

    openGraph: {
      type:        (seo?.og_type as "website" | "article") || "website",
      locale:      "en_AE",
      url:         canonical,
      siteName:    "Smart Auto UAE",
      title:       ogTitle,
      description: ogDesc,
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Smart Auto UAE - Premium Car Protection Dubai & Sharjah" }],
    },

    twitter: {
      card:        (seo?.twitter_card as "summary_large_image" | "summary") || "summary_large_image",
      title:       seo?.twitter_title       || ogTitle,
      description: seo?.twitter_description || ogDesc,
      images:      seo?.twitter_image ? [seo.twitter_image] : [ogImage],
    },

    robots,

    verification: {
      google: "YOUR_GOOGLE_SEARCH_CONSOLE_ID",
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ── Google Tag Manager (head) ── */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-537ZKNVG');`,
          }}
        />

        {/* ── Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "AutoRepair",
                "name": "Smart Auto UAE - Dubai",
                // ... (keep your existing structured data exactly as-is)
              },
            ]),
          }}
        />
      </head>
      <body
        style={{ backgroundColor: "#0A0A0A" }}
        className={`${inter.variable} ${playfair.variable}`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-537ZKNVG"
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <ChatbotWrapper />
      </body>
    </html>
  );
}