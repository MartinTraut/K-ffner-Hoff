import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { Heart, Users, Music, PartyPopper, Building2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Feiern",
  description: "Feiern im Küffner Hof – der ideale Rahmen für Hochzeiten, Firmenfeiern, Geburtstage und Vereinsfeste.",
};

const eventTypes = [
  { icon: Building2, label: "Betriebs- & Vereinsfeste" },
  { icon: Users, label: "Stilvolle Firmenfeiern" },
  { icon: Heart, label: "Hochzeiten" },
  { icon: PartyPopper, label: "Geburtstagsfeiern" },
];

const entertainment = ["Bullenreiten", "Hufeisen werfen", "Bogenschießen", "Melkwettbewerb", "Karaoke", "DJ oder Live-Band"];

export default function FeiernPage() {
  return (
    <>
      <PageHero title="Feiern im Küffner Hof" subtitle="Der ideale Rahmen für Feiern jeder Art – mit langjähriger Erfahrung, Catering & Partyservice aus einer Hand." image="/images/feiern/hochzeit.jpg" imageAlt="Hochzeit im Küffner Hof" />

      <section className="bg-kh-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <FadeIn><div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-kh-green lg:text-4xl">Für jeden Anlass</h2>
            <p className="mt-6 text-base leading-relaxed text-kh-text-light">Ob kleine Feier im engsten Kreis oder großes Fest – der Küffner Hof bietet Ihnen den passenden Rahmen.</p>
          </div></FadeIn>
          <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {eventTypes.map((type, i) => (
              <FadeIn key={type.label} delay={i * 100}>
                <div className="flex flex-col items-center gap-4 rounded bg-kh-white px-6 py-10 text-center shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center bg-kh-green/5"><type.icon className="h-6 w-6 text-kh-green" /></div>
                  <span className="text-sm font-semibold text-kh-green">{type.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kh-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">Aus einer Hand</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-kh-green lg:text-4xl">Catering & Partyservice</h2>
              <p className="mt-6 text-base leading-relaxed text-kh-text-light">
                Unsere Küche ist die kreative Schmiede – ob Menü oder Buffet, jedes Gericht wird frisch zubereitet. Feiern Sie bei uns oder lassen Sie sich von unseren Catering-Spezialisten vor Ort verwöhnen.
              </p>
              <div className="mt-10">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-kh-green"><Music className="h-4 w-4" /> Unterhaltungsprogramm</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entertainment.map((item) => (<span key={item} className="rounded-full border border-kh-green/10 px-4 py-1.5 text-[13px] text-kh-text-light">{item}</span>))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <Image src="/images/feiern/feier-1.jpg" alt="Feier im Küffner Hof" fill className="object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-kh-green py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <Image src="/images/hero/huette-winter.jpg" alt="Timos Hof Alm im Winter" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand">Besonderes Erlebnis</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-kh-cream lg:text-4xl">Timos Hof Alm</h2>
              <p className="mt-6 text-base leading-relaxed text-kh-cream/60">Die hofeigene Almhütte – der perfekte Ort für Firmen- und Familienfeiern oder besondere Events. Reservierungen sind möglich.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/kontakt" className="inline-flex items-center justify-center bg-kh-sand px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-kh-green transition-all hover:bg-kh-sand-light">Anfrage senden</Link>
                <a href="tel:+497946916000" className="inline-flex items-center justify-center gap-2 border border-kh-cream/20 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-kh-cream transition-all hover:border-kh-sand hover:text-kh-sand"><Phone className="h-3.5 w-3.5" /> 07946 91600</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
