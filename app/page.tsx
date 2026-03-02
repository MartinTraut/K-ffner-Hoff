import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import {
  Phone,
  Bed,
  Wifi,
  Car,
  Coffee,
  ChevronRight,
  Users,
  Monitor,
} from "lucide-react";
import { FAQSection } from "./faq-section";

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen bg-kh-green overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-kh-green/95 via-kh-green/70 to-kh-green/30" />

        <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-6 lg:px-12">
          <div className="w-full max-w-2xl pt-24 lg:pt-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand">
              Hotel & Restaurant in Langenbrettach
            </p>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.08] text-kh-cream sm:text-6xl lg:text-7xl xl:text-8xl">
              Küffner
              <br />
              Hof
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-kh-cream/60">
              Erstklassige Gastronomie, komfortable Übernachtungen und
              moderne Tagungsräume – eingebettet in die malerische
              Landschaft von Langenbrettach.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-kh-sand px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-kh-green transition-all hover:bg-kh-sand-light"
              >
                Tisch reservieren
              </Link>
              <Link
                href="/hotel"
                className="inline-flex items-center justify-center border border-kh-cream/30 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-kh-cream transition-all hover:border-kh-sand hover:text-kh-sand"
              >
                Hotel anfragen
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-kh-cream/30">
              Entdecken
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-kh-sand/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════ ÜBERBLICK – 3 Kacheln ═══════════ */}
      <section className="bg-kh-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <FadeIn>
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">
                Erleben
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-kh-green lg:text-5xl">
                Unsere Angebote
              </h2>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Restaurant",
                desc: "Alles hausgemacht – von handgedrehten Knödeln bis zu frisch zubereiteten Spätzle. Hochwertige Steaks und feine Gerichte.",
                href: "/restaurant",
                cta: "Zum Restaurant",
                image: "/images/hero/bier-sonnenuntergang.jpg",
                alt: "Zwei Krüge Bier bei Sonnenuntergang",
              },
              {
                title: "Biergärten",
                desc: "Bis zu 280 Plätze im Freien und 700 Plätze im Indoor-Biergarten – umgeben von einer grünen Oase.",
                href: "/biergaerten",
                cta: "Biergärten entdecken",
                image: "/images/hero/tisch-gedeckt.jpg",
                alt: "Festlich gedeckter Tisch",
              },
              {
                title: "Hotel",
                desc: "31 neu gestaltete Zimmer und Apartments mit Frühstücksbuffet, WLAN und kostenlosem Parken.",
                href: "/hotel",
                cta: "Hotel ansehen",
                image: "/images/hero/kajak-see.jpg",
                alt: "Freizeit in der Umgebung",
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 150}>
                <Link href={card.href} className="group block">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={800}
                      height={1066}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="font-serif text-2xl font-semibold text-kh-green">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-kh-text-light">
                      {card.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-kh-green transition-colors group-hover:text-kh-sand-dark">
                      {card.cta}
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GENUSS & ATMOSPHÄRE ═══════════ */}
      <section className="bg-kh-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5" direction="left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">
                Kulinarik
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-kh-green lg:text-5xl">
                Genuss &<br />
                Atmosphäre
              </h2>
              <p className="mt-6 text-base leading-relaxed text-kh-text-light">
                Unsere Küche verbindet ländliche Gastfreundschaft mit
                kulinarischer Qualität. Alles wird frisch und mit Liebe
                zubereitet – von handgedrehten Knödeln und frischen Spätzle
                bis hin zu hochwertigen, saftigen Steaks.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/speisekarten"
                  className="inline-flex items-center gap-2 bg-kh-green px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-kh-cream transition-all hover:bg-kh-green-light"
                >
                  Speisekarte
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 border border-kh-green/20 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-kh-green transition-all hover:border-kh-green"
                >
                  Reservieren
                </Link>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-7" direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/galerie/servicekraft-essen.jpg"
                    alt="Servicekraft bringt Essen zu Gästen"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square overflow-hidden rounded-sm">
                    <Image
                      src="/images/galerie/schnitzel.jpg"
                      alt="Schnitzel mit Kartoffelecken"
                      width={600}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-video overflow-hidden rounded-sm">
                    <Image
                      src="/images/galerie/salat.jpg"
                      alt="Frischer Salat"
                      width={600}
                      height={338}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ IMAGEFILM ═══════════ */}
      <section className="bg-kh-green py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <FadeIn>
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand">
                Einblicke
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-kh-cream lg:text-4xl">
                Der Küffner Hof im Film
              </h2>
            </div>
            <div className="mt-12 aspect-video overflow-hidden rounded-sm">
              <video
                controls
                poster="/images/hero/imagefilm-poster.jpg"
                className="h-full w-full object-cover"
                preload="none"
              >
                <source src="/videos/imagefilm.mp4" type="video/mp4" />
              </video>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ FEIERN & TAGUNGEN ═══════════ */}
      <section className="bg-kh-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Feiern */}
            <FadeIn>
              <Link href="/feiern" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src="/images/feiern/feier-2.jpg"
                    alt="Feier im Küffner Hof"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kh-green/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-kh-sand">
                      Feste & Events
                    </p>
                    <h3 className="mt-2 font-serif text-3xl font-semibold text-kh-cream">
                      Feiern
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-kh-cream/60">
                      Hochzeiten, Firmenfeiern, Geburtstage – Catering &
                      Partyservice aus einer Hand.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-kh-sand">
                      Mehr erfahren
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Tagungen */}
            <FadeIn delay={150}>
              <Link href="/tagungen" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src="/images/galerie/drohne-2.jpg"
                    alt="Küffner Hof von oben"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kh-green/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-kh-sand">
                      Business
                    </p>
                    <h3 className="mt-2 font-serif text-3xl font-semibold text-kh-cream">
                      Tagungen
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-kh-cream/60">
                      Drei tageslichtdurchflutete Räume mit modernster
                      Technik in ruhiger Lage.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-kh-sand">
                      Mehr erfahren
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ AKTIONEN TEASER ═══════════ */}
      <section className="bg-kh-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/galerie/grillgut.jpg"
                  alt="Frisch gegrilltes vom Grill"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">
                Highlights
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-kh-green lg:text-5xl">
                Aktionen &<br />
                Events
              </h2>
              <p className="mt-6 text-base leading-relaxed text-kh-text-light">
                Haxenabend, Cordon-Bleu-Dinner, Rostbratenabend und mehr –
                regelmäßig kulinarische Highlights. Sichern Sie sich Ihre
                Termine für die kommende Saison.
              </p>
              <Link
                href="/aktionen"
                className="mt-8 inline-flex items-center gap-2 bg-kh-green px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-kh-cream transition-all hover:bg-kh-green-light"
              >
                Alle Aktionen
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <FAQSection />

      {/* ═══════════ NEWSLETTER ═══════════ */}
      <section className="bg-kh-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">
                Auf dem Laufenden bleiben
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-kh-green lg:text-4xl">
                Newsletter
              </h2>
              <p className="mt-4 text-base text-kh-text-light">
                Erhalten Sie Neuigkeiten zu Aktionen, Veranstaltungen und
                saisonalen Angeboten des Küffner Hof.
              </p>
              <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="flex-1 border border-kh-green/15 bg-kh-white px-5 py-3.5 text-sm text-kh-text placeholder:text-kh-text-light/60 focus:border-kh-green/30 focus:outline-none sm:border-r-0"
                  required
                />
                <button
                  type="submit"
                  className="bg-kh-green px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-kh-cream transition-all hover:bg-kh-green-light"
                >
                  Anmelden
                </button>
              </form>
              <p className="mt-3 text-[12px] text-kh-text-light/60">
                Wir respektieren Ihre Privatsphäre. Abmeldung jederzeit
                möglich.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
