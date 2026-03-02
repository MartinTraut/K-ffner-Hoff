import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { StickyBar } from "@/components/sticky-bar";
import { Footer } from "@/components/footer";

const dmSans = localFont({
  src: [
    {
      path: "../public/fonts/DMSans-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
});

const playfair = localFont({
  src: [
    {
      path: "../public/fonts/PlayfairDisplay-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Küffner Hof – Hotel & Restaurant in Langenbrettach",
    template: "%s | Küffner Hof",
  },
  description:
    "Erstklassige Gastronomie, komfortable Übernachtungen und moderne Tagungsräume – eingebettet in die malerische Landschaft von Langenbrettach.",
  keywords: [
    "Küffner Hof",
    "Hotel Langenbrettach",
    "Restaurant Langenbrettach",
    "Biergarten",
    "Tagungen",
    "Feiern",
    "Hochzeit",
    "Catering",
  ],
  openGraph: {
    title: "Küffner Hof – Hotel & Restaurant in Langenbrettach",
    description:
      "Erstklassige Gastronomie, komfortable Übernachtungen und moderne Tagungsräume in Langenbrettach.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <StickyBar />

        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Hotel", "Restaurant"],
              name: "Küffner Hof",
              description:
                "Hotel & Restaurant in Langenbrettach – Erstklassige Gastronomie, komfortable Übernachtungen und moderne Tagungsräume.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Neudeck 21",
                addressLocality: "Langenbrettach",
                postalCode: "74243",
                addressCountry: "DE",
              },
              telephone: "+49 7946 91600",
              email: "info@kueffner-hof.de",
              url: "https://www.kueffner-hof.de",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "11:30",
                closes: "21:00",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
