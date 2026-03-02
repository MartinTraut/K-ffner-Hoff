import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Speisekarten",
  description: "Speisekarten des Küffner Hof – frische, hausgemachte Küche mit saisonalen Spezialitäten.",
};

const menus = [
  { title: "Suppen, Salate & Flammkuchen", image: "/images/speisekarten/suppen-salate.jpg", alt: "Speisekarte Suppen, Salate, Flammkuchen" },
  { title: "Pfannen- & Grillgerichte", image: "/images/speisekarten/hauptgerichte.jpg", alt: "Speisekarte Hauptgerichte" },
  { title: "Getränkekarte – Säfte & Bier", image: "/images/speisekarten/getraenke-1.jpg", alt: "Getränkekarte" },
  { title: "Getränkekarte – Wein & Warmes", image: "/images/speisekarten/getraenke-2.jpg", alt: "Getränkekarte Wein" },
];

export default function SpeisekartenPage() {
  return (
    <>
      <PageHero title="Speisekarten" subtitle="Frische, hausgemachte Küche – von traditionellen Spezialitäten bis zu feinen, leichten Gerichten." image="/images/hero/menubuch.jpg" imageAlt="Menübuch Küffner Hof" />

      <section className="bg-kh-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <FadeIn><div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-kh-green lg:text-4xl">Unsere Karten</h2>
            <p className="mt-6 text-base leading-relaxed text-kh-text-light">Alles wird frisch und hausgemacht zubereitet – von handgedrehten Knödeln und frischen Spätzle bis hin zu hochwertigen Steaks und feinen, leichten Gerichten.</p>
          </div></FadeIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {menus.map((menu, i) => (
              <FadeIn key={menu.title} delay={i * 100}>
                <div className="overflow-hidden rounded-sm bg-kh-white shadow-sm">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={menu.image} alt={menu.alt} fill className="object-contain bg-kh-white p-2" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-kh-green">{menu.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-16 rounded bg-kh-green/5 p-8 text-center">
              <p className="text-sm text-kh-text-light">Die aktuelle Speisekarte ist auch direkt bei uns im Restaurant einsehbar. Für spezielle Wünsche oder Allergien kontaktieren Sie uns bitte vorab.</p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href="/kontakt" className="inline-flex items-center gap-2 bg-kh-green px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-kh-cream transition-all hover:bg-kh-green-light">Tisch reservieren</Link>
                <Link href="/oeffnungszeiten" className="inline-flex items-center gap-2 border border-kh-green/20 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-kh-green transition-all hover:border-kh-green">Öffnungszeiten</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
