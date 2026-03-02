import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { Bed, Wifi, Car, Coffee, Tv, ShieldCheck, Bath, Sunrise } from "lucide-react";

export const metadata: Metadata = {
  title: "Hotel",
  description: "31 neu gestaltete Zimmer und Apartments im Küffner Hof – komfortable Übernachtungen in Langenbrettach.",
};

const amenities = [
  { icon: Bed, label: "31 Zimmer & Apartments" },
  { icon: Coffee, label: "Frühstücksbuffet" },
  { icon: Wifi, label: "Kostenfreies WLAN" },
  { icon: Car, label: "Gratis Parkplätze" },
  { icon: Tv, label: "Flat-Screen TV" },
  { icon: Bath, label: "Eigenes Bad" },
  { icon: ShieldCheck, label: "Zimmersafe" },
  { icon: Sunrise, label: "Teilweise Balkon/Terrasse" },
];

export default function HotelPage() {
  return (
    <>
      <PageHero title="Unser Hotel" subtitle="31 neu gestaltete Zimmer und Apartments – erstklassiger Komfort in ruhiger Lage." image="/images/hotel/zimmer-1.jpg" imageAlt="Küffner Hof Hotelzimmer" />

      <section className="bg-kh-cream py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-2xl font-semibold text-kh-green sm:text-3xl lg:text-4xl">Komfort in ruhiger Lage</h2>
              <p className="mt-4 text-sm leading-relaxed text-kh-text-light sm:mt-6 sm:text-base">
                Jedes Zimmer ist mit Schreibtisch, Flat-Screen TV, eigenem Bad, Bettwäsche, Handtüchern, Safe und kostenfreiem WLAN ausgestattet. Einige Zimmer verfügen über einen eigenen Balkon oder eine Terrasse.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-kh-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <FadeIn>
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">Ausstattung</p>
            <h2 className="mt-3 text-center font-serif text-2xl font-semibold text-kh-green sm:mt-4 sm:text-3xl lg:text-4xl">Alles für Ihren Aufenthalt</h2>
          </FadeIn>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-6">
            {amenities.map((item, i) => (
              <FadeIn key={item.label} delay={i * 80}>
                <div className="flex flex-col items-center gap-2 rounded-sm bg-kh-cream/50 px-3 py-6 text-center sm:gap-3 sm:px-4 sm:py-8">
                  <div className="flex h-10 w-10 items-center justify-center bg-kh-green/5 sm:h-12 sm:w-12"><item.icon className="h-4 w-4 text-kh-green sm:h-5 sm:w-5" /></div>
                  <span className="text-xs font-medium text-kh-green sm:text-sm">{item.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kh-cream py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <FadeIn className="sm:col-span-2">
              <div className="relative h-full min-h-[250px] overflow-hidden rounded-sm sm:min-h-[300px]">
                <Image src="/images/hotel/zimmer-2.jpg" alt="Küffner Hof Zimmer" fill className="object-cover" sizes="(max-width: 640px) 100vw, 66vw" />
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="space-y-4">
                <div className="relative aspect-video overflow-hidden rounded-sm"><Image src="/images/hotel/zimmer-3.jpg" alt="Küffner Hof Badezimmer" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" /></div>
                <div className="relative aspect-video overflow-hidden rounded-sm"><Image src="/images/hotel/freizeit.jpg" alt="Freizeit in der Umgebung" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" /></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-kh-green py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <FadeIn>
            <div className="grid gap-10 sm:gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-kh-cream sm:text-3xl lg:text-4xl">Gut zu wissen</h2>
                <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                  {[
                    { title: "Check-in", text: "14:30 – 20:00 Uhr. Schlüsselübergabe bis 21:30 Uhr möglich. Späte Anreise bitte vorab ankündigen." },
                    { title: "Check-out", text: "Bis 10:00 Uhr." },
                    { title: "Frühstück", text: "Reichhaltiges Frühstücksbuffet inklusive." },
                    { title: "Wohnmobile", text: "Stellplatz direkt am Hotel vorhanden." },
                  ].map((item, i) => (
                    <div key={item.title} className={i < 3 ? "border-b border-kh-cream/10 pb-5 sm:pb-6" : ""}>
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-kh-sand sm:text-sm">{item.title}</h3>
                      <p className="mt-1.5 text-sm text-kh-cream/60 sm:mt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-sm bg-kh-green-light p-8 text-center sm:p-12">
                <h3 className="font-serif text-2xl font-semibold text-kh-cream sm:text-3xl">Zimmer anfragen</h3>
                <p className="mt-3 max-w-sm text-sm text-kh-cream/50 sm:mt-4">Kontaktieren Sie uns – wir beraten Sie gerne persönlich.</p>
                <div className="mt-6 flex flex-col gap-3 sm:mt-8">
                  <Link href="/kontakt" className="inline-flex items-center justify-center bg-kh-sand px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-green transition-all duration-300 hover:bg-kh-sand-light sm:px-8 sm:py-3.5 sm:text-[12px]">Anfrage senden</Link>
                  <a href="tel:+497946916000" className="inline-flex items-center justify-center border border-kh-cream/20 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-cream transition-all duration-300 hover:border-kh-sand hover:text-kh-sand sm:px-8 sm:py-3.5 sm:text-[12px]">07946 91600</a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
