import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { Sun, CloudRain, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Biergärten",
  description: "Zwei stilvolle Biergärten und ein Indoor-Biergarten im Küffner Hof – bis zu 280 Plätze im Freien und 700 Plätze unter Dach.",
};

export default function BiergaertenPage() {
  return (
    <>
      <PageHero title="Unsere Biergärten" subtitle="Zwei stilvolle Biergärten und eine gemütliche Gaststube – für jedes Wetter." image="/images/biergarten/aussen-1.jpg" imageAlt="Küffner Hof Biergarten" />

      <section className="bg-kh-cream py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-2">
            <FadeIn>
              <div className="flex items-center gap-3">
                <Sun className="h-5 w-5 text-kh-sand-dark" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">Außenbereich</p>
              </div>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-kh-green sm:mt-4 sm:text-4xl lg:text-5xl">Biergarten<br />im Freien</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-kh-text-light sm:mt-6 sm:text-base">
                An sonnigen Tagen laden unsere Außenbereiche mit bis zu 280 Sitzplätzen zum Verweilen ein – mit bequemer Bestuhlung, umgeben von einer grünen Oase liebevoll gepflegter Pflanzen.
              </p>
              <div className="mt-6 flex items-center gap-2 rounded-sm bg-kh-green/5 px-4 py-3 text-sm font-medium text-kh-green sm:mt-8 sm:px-5">
                <Users className="h-4 w-4" /> Bis zu 280 Sitzplätze
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <Image src="/images/galerie/ueberdacht-aussen.jpg" alt="Überdachter Außenbereich" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-kh-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-2">
            <FadeIn direction="left" className="order-2 lg:order-1">
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <Image src="/images/biergarten/aussen-2.jpg" alt="Indoor-Biergarten" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <CloudRain className="h-5 w-5 text-kh-sand-dark" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">Innenbereich</p>
              </div>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-kh-green sm:mt-4 sm:text-4xl lg:text-5xl">Indoor-<br />Biergarten</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-kh-text-light sm:mt-6 sm:text-base">
                Bei schlechtem Wetter bietet unser großzügiger Indoor-Biergarten mit bis zu 700 Sitzplätzen die perfekte Alternative – rustikales Ambiente, überdacht und wetterunabhängig.
              </p>
              <div className="mt-6 flex items-center gap-2 rounded-sm bg-kh-green/5 px-4 py-3 text-sm font-medium text-kh-green sm:mt-8 sm:px-5">
                <Users className="h-4 w-4" /> Bis zu 700 Sitzplätze
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-kh-cream py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <FadeIn><div className="text-center"><h2 className="font-serif text-2xl font-semibold text-kh-green sm:text-3xl lg:text-4xl">Impressionen</h2></div></FadeIn>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3">
            {[
              { src: "/images/galerie/eingang.jpg", alt: "Zugang zum Biergarten" },
              { src: "/images/galerie/huette-aussen.jpg", alt: "Hütte Außenbereich" },
              { src: "/images/galerie/huette-gaeste.jpg", alt: "Hütte mit Gästen" },
              { src: "/images/galerie/musiker.jpg", alt: "Live-Musik im Biergarten" },
              { src: "/images/galerie/hund.jpg", alt: "Hund im Biergarten" },
              { src: "/images/galerie/galerie-hero.jpg", alt: "Biergarten Atmosphäre" },
            ].map((img, i) => (
              <FadeIn key={img.src} delay={i * 80}>
                <div className="img-zoom relative aspect-video overflow-hidden rounded-sm"><Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw" /></div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kh-green py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-6 lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-2xl font-semibold text-kh-cream sm:text-3xl lg:text-4xl">Wir freuen uns auf Ihren Besuch</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-kh-cream/50 sm:mt-4 sm:text-base">Montag bis Samstag, ab 11:30 Uhr durchgehend warme Küche.</p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center">
              <Link href="/kontakt" className="inline-flex items-center bg-kh-sand px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-green transition-all duration-300 hover:bg-kh-sand-light sm:px-8 sm:py-3.5 sm:text-[12px]">Tisch reservieren</Link>
              <Link href="/speisekarten" className="inline-flex items-center border border-kh-cream/20 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-cream transition-all duration-300 hover:border-kh-sand hover:text-kh-sand sm:px-8 sm:py-3.5 sm:text-[12px]">Speisekarte ansehen</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
