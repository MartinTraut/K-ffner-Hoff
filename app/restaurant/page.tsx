import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurant",
  description: "Frische, hausgemachte Küche im Küffner Hof – von handgedrehten Knödeln und Spätzle bis zu hochwertigen Steaks.",
};

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        title="Unser Restaurant"
        subtitle="Ländliche Gastfreundschaft trifft kulinarische Qualität – alles frisch und mit Liebe zubereitet."
        image="/images/galerie/flammkuchen-service.jpg"
        imageAlt="Flammkuchen wird serviert"
      />

      <section className="bg-kh-cream py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-2">
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">Unsere Küche</p>
              <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-kh-green sm:mt-4 sm:text-3xl lg:text-4xl">
                Frisch. Hausgemacht.<br />Mit Leidenschaft.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-kh-text-light sm:mt-6 sm:text-base">
                Alles wird frisch und hausgemacht zubereitet – von handgedrehten Knödeln und Spätzle mit aromatischen Soßen bis hin zu hochwertigen, saftigen Steaks. Neben kräftigen Fleischgerichten bieten wir auch feine und leichte Gerichte für jeden Geschmack.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <Link href="/speisekarten" className="inline-flex items-center justify-center gap-2 bg-kh-green px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-kh-cream transition-all duration-300 hover:bg-kh-green-light sm:text-[12px]">
                  Speisekarte <ChevronRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/kontakt" className="inline-flex items-center justify-center border border-kh-green/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-kh-green transition-all duration-300 hover:border-kh-green sm:text-[12px]">
                  Reservieren
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image src="/images/galerie/service-getraenke.jpg" alt="Service trägt Getränke zu Gästen" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-kh-green py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-6 lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-2xl font-semibold text-kh-cream sm:text-3xl lg:text-4xl">Wir freuen uns auf Sie</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-kh-cream/50 sm:mt-4 sm:text-base">Warme Küche: Montag bis Samstag, 11:30 – 21:00 Uhr durchgehend.</p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center">
              <Link href="/kontakt" className="inline-flex items-center bg-kh-sand px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-green transition-all duration-300 hover:bg-kh-sand-light sm:px-8 sm:py-3.5 sm:text-[12px]">Tisch reservieren</Link>
              <Link href="/speisekarten" className="inline-flex items-center border border-kh-cream/20 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-cream transition-all duration-300 hover:border-kh-sand hover:text-kh-sand sm:px-8 sm:py-3.5 sm:text-[12px]">Zur Speisekarte</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
