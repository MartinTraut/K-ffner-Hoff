import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { Clock, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Öffnungszeiten",
  description: "Öffnungszeiten des Küffner Hof – Restaurant Mo–Sa ab 11:30 Uhr, Büro Mo–Fr 08:00–17:00 Uhr.",
};

export default function OeffnungszeitenPage() {
  return (
    <>
      <PageHero title="Öffnungszeiten" subtitle="Alle Informationen zu unseren Öffnungszeiten auf einen Blick." image="/images/misc/oeffnungszeiten-bg2.jpg" imageAlt="Küffner Hof" />

      <section className="bg-kh-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                { title: "Restaurant & Küche", icon: Clock, times: [{ days: "Montag – Samstag", hours: "11:30 – 21:00 Uhr" }, { days: "Sonntag", hours: "Geschlossen" }], note: "Durchgehend warme Küche" },
                { title: "Büro & Verwaltung", icon: Phone, times: [{ days: "Montag – Freitag", hours: "08:00 – 17:00 Uhr" }, { days: "Samstag & Sonntag", hours: "Geschlossen" }], note: "Für Anfragen und Reservierungen" },
              ].map((section, i) => (
                <FadeIn key={section.title} delay={i * 150}>
                  <div className="rounded bg-kh-white p-8 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center bg-kh-green/5"><section.icon className="h-5 w-5 text-kh-green" /></div>
                      <h2 className="font-serif text-xl font-semibold text-kh-green">{section.title}</h2>
                    </div>
                    <div className="mt-6 space-y-3">
                      {section.times.map((time) => (
                        <div key={time.days} className="flex items-center justify-between border-b border-kh-green/5 pb-3">
                          <span className="text-sm text-kh-text-light">{time.days}</span>
                          <span className="text-sm font-semibold text-kh-green">{time.hours}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-[13px] text-kh-sand-dark">{section.note}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="mt-12 rounded bg-kh-green p-8 text-center">
                <h3 className="font-serif text-2xl font-semibold text-kh-cream">Reservierungen</h3>
                <p className="mt-4 text-kh-cream/50">Reservierungen nehmen wir gerne telefonisch oder per E-Mail entgegen.</p>
                <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <a href="tel:+497946916000" className="flex items-center gap-2 text-kh-sand transition-colors hover:text-kh-sand-light"><Phone className="h-4 w-4" /> 07946 91600</a>
                  <span className="hidden h-4 w-px bg-kh-cream/20 sm:block" />
                  <a href="mailto:info@kueffner-hof.de" className="flex items-center gap-2 text-kh-sand transition-colors hover:text-kh-sand-light"><Mail className="h-4 w-4" /> info@kueffner-hof.de</a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
