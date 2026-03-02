import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { Monitor, Wifi, Users, Bed, Car, MapPin, Sun, Coffee, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Tagungen & Seminare",
  description: "Drei tageslichtdurchflutete Tagungsräume mit modernster Konferenztechnik im Küffner Hof.",
};

const features = [
  { icon: Sun, label: "3 tageslichtdurchflutete Räume" },
  { icon: Monitor, label: "Beamer & Konferenztechnik" },
  { icon: Wifi, label: "Kostenfreies DSL-WLAN" },
  { icon: Users, label: "Flexible Bestuhlungen" },
  { icon: Coffee, label: "Verpflegung & Catering" },
  { icon: Bed, label: "31 Hotelzimmer vor Ort" },
  { icon: Car, label: "Kostenlose Parkplätze" },
  { icon: MapPin, label: "Ruhige Lage, gute Anbindung" },
];

export default function TagungenPage() {
  return (
    <>
      <PageHero title="Tagungen & Seminare" subtitle="Drei tageslichtdurchflutete Tagungsräume mit modernster Konferenztechnik." image="/images/hero/tagung-praesentation.jpg" imageAlt="Tagung im Küffner Hof" />

      <section className="bg-kh-cream py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <FadeIn><div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-2xl font-semibold text-kh-green sm:text-3xl lg:text-4xl">Alles für Ihre Veranstaltung</h2>
            <p className="mt-4 text-sm leading-relaxed text-kh-text-light sm:mt-6 sm:text-base">Ob Seminar, Workshop oder Geschäftskonferenz – unsere Einrichtungen sind optimal auf Ihre Anforderungen abgestimmt.</p>
          </div></FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-6">
            {features.map((item, i) => (
              <FadeIn key={item.label} delay={i * 60}>
                <div className="flex flex-col items-center gap-2 rounded-sm bg-kh-white px-3 py-6 text-center sm:gap-3 sm:px-4 sm:py-8">
                  <div className="flex h-10 w-10 items-center justify-center bg-kh-green/5 sm:h-12 sm:w-12"><item.icon className="h-4 w-4 text-kh-green sm:h-5 sm:w-5" /></div>
                  <span className="text-xs font-medium text-kh-green sm:text-sm">{item.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kh-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-2">
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">Standort</p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-kh-green sm:mt-4 sm:text-3xl lg:text-4xl">Zentral & ruhig gelegen</h2>
              <p className="mt-4 text-sm leading-relaxed text-kh-text-light sm:mt-6 sm:text-base">
                Der Küffner Hof liegt in ruhiger Umgebung, ca. 20 Minuten von Heilbronn und 10 Minuten von Öhringen entfernt. Die günstige Verkehrsanbindung über die A6 (Ausfahrt Bretzfeld) und A81 (Ausfahrt Neuenstadt) macht uns auch überregional gut erreichbar.
              </p>
              <div className="mt-6 flex items-center gap-2 rounded-sm bg-kh-green/5 px-4 py-3 text-sm font-medium text-kh-green sm:mt-8 sm:px-5">
                <MapPin className="h-4 w-4 shrink-0" /> Neudeck 21, 74243 Langenbrettach
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image src="/images/galerie/drohne-1.jpg" alt="Luftaufnahme Küffner Hof" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-kh-green py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-6 lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-2xl font-semibold text-kh-cream sm:text-3xl lg:text-4xl">Tagung planen</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-kh-cream/50 sm:mt-4 sm:text-base">Lassen Sie sich individuell beraten – wir erstellen Ihnen ein maßgeschneidertes Angebot.</p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center">
              <Link href="/kontakt" className="inline-flex items-center bg-kh-sand px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-green transition-all duration-300 hover:bg-kh-sand-light sm:px-8 sm:py-3.5 sm:text-[12px]">Tagung anfragen</Link>
              <a href="tel:+497946916000" className="inline-flex items-center gap-2 border border-kh-cream/20 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-cream transition-all duration-300 hover:border-kh-sand hover:text-kh-sand sm:px-8 sm:py-3.5 sm:text-[12px]"><Phone className="h-3.5 w-3.5" /> 07946 91600</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
