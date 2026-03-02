import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Aktionen & Highlights",
  description: "Kulinarische Highlights im Küffner Hof – Haxenabend, Cordon-Bleu-Dinner, Rostbratenabend und mehr.",
};

const aktionen = [
  { title: "Haxenabend", desc: "Donnerstags – Saftige Schweinshaxe frisch aus dem Ofen, dazu ein kühles Bier.", image: "/images/aktionen/haxenabend.jpg", alt: "Haxenabend Menükarte" },
  { title: "Cordon-Bleu-Dinner", desc: "Dienstags ab 17:00 Uhr – Klassisches Schweinefleisch-Cordon-Bleu mit Beilagen und Soßen nach Wahl.", image: "/images/aktionen/cordon-bleu.jpg", alt: "Cordon Bleu Dinner Karte" },
  { title: "Rostbratenabend", desc: "Mittwochs ab 17:00 Uhr – Verschiedene Rinderbratengerichte mit ausgewählten Beilagen.", image: "/images/aktionen/rostbraten.jpg", alt: "Rostbratenabend Menükarte" },
];

export default function AktionenPage() {
  return (
    <>
      <PageHero title="Aktionen & Highlights" subtitle="Kulinarische Events, saisonale Highlights und besondere Angebote." image="/images/galerie/grillgut.jpg" imageAlt="Frisch gegrilltes vom Grill" />

      <section className="bg-kh-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <FadeIn><div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-kh-green lg:text-4xl">Unsere kulinarischen Highlights</h2>
            <p className="mt-6 text-base leading-relaxed text-kh-text-light">Regelmäßig laden wir zu besonderen kulinarischen Events ein. Sichern Sie sich Ihre Termine.</p>
          </div></FadeIn>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {aktionen.map((aktion, i) => (
              <FadeIn key={aktion.title} delay={i * 150}>
                <div className="group overflow-hidden rounded-sm bg-kh-white shadow-sm">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={aktion.image} alt={aktion.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-kh-green">{aktion.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-kh-text-light">{aktion.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timos Hof Alm Flyer */}
      <section className="bg-kh-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image src="/images/aktionen/almhuette-flyer.jpg" alt="Timos Hof-Alm Flyer" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">Besonderes Erlebnis</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-kh-green lg:text-4xl">Timos Hof-Alm</h2>
              <p className="mt-6 text-base leading-relaxed text-kh-text-light">Die gemütliche Almhütte mit eigenem Charme – perfekt für Firmen- und Familienfeiern oder besondere Events. Eigene Hüttenkarte mit deftigen Spezialitäten.</p>
              <Link href="/kontakt" className="mt-8 inline-flex items-center bg-kh-green px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-kh-cream transition-all hover:bg-kh-green-light">Reservierung anfragen</Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-kh-green py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-12">
          <FadeIn>
            <Calendar className="mx-auto h-8 w-8 text-kh-sand" />
            <h2 className="mt-6 font-serif text-3xl font-semibold text-kh-cream lg:text-4xl">Veranstaltungen & Termine</h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-kh-cream/50">Informieren Sie sich über aktuelle Termine und kommende Veranstaltungen im Küffner Hof.</p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/kontakt" className="inline-flex items-center bg-kh-sand px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-kh-green transition-all hover:bg-kh-sand-light">Termine anfragen</Link>
              <a href="tel:+497946916000" className="inline-flex items-center border border-kh-cream/20 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-kh-cream transition-all hover:border-kh-sand hover:text-kh-sand">07946 91600</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
