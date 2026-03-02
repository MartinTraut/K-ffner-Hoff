"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const faqs = [
  {
    question: "Wann hat das Restaurant geöffnet?",
    answer:
      "Unsere warme Küche ist Montag bis Samstag durchgehend von 11:30 bis 21:00 Uhr für Sie da.",
  },
  {
    question: "Wie kann ich einen Tisch reservieren?",
    answer:
      "Reservierungen nehmen wir gerne telefonisch unter 07946 91600 oder per E-Mail an info@kueffner-hof.de entgegen.",
  },
  {
    question: "Wann kann ich im Hotel einchecken?",
    answer:
      "Check-in ist von 14:30 bis 20:00 Uhr möglich. Schlüsselübergabe bis 21:30 Uhr beim Restaurant- oder Biergarten-Personal. Anreisen nach 20:00 Uhr bitten wir bis 18:00 Uhr telefonisch oder per E-Mail anzukündigen. Check-out bis 10:00 Uhr.",
  },
  {
    question: "Kann ich bei Ihnen Feiern und Events veranstalten?",
    answer:
      "Selbstverständlich! Der Küffner Hof bietet den idealen Rahmen für Feiern jeder Art – von Betriebs- und Vereinsfesten über Firmenfeiern und Hochzeiten bis hin zu Geburtstagsfeiern. Catering und Partyservice aus einer Hand. Kontaktieren Sie uns für ein individuelles Beratungsgespräch.",
  },
  {
    question: "Wo befindet sich der Küffner Hof?",
    answer:
      "Neudeck 21, 74243 Langenbrettach – in ruhiger Lage ca. 20 Minuten von Heilbronn und 10 Minuten von Öhringen. Gut erreichbar über die A6 (Ausfahrt Bretzfeld) und A81 (Ausfahrt Neuenstadt). Kostenlose Parkplätze sind vorhanden.",
  },
  {
    question: "Bieten Sie Tagungsräume an?",
    answer:
      "Ja, drei tageslichtdurchflutete Tagungsräume mit modernster Konferenztechnik, kostenfreiem DSL-WLAN und Beamern stehen zur Verfügung. Übernachtungsgäste profitieren von unseren 31 Hotelzimmern direkt vor Ort.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-kh-wine py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand">
              Gut zu wissen
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-kh-cream lg:text-5xl">
              Häufige
              <br />
              Fragen
            </h2>
            <p className="mt-6 text-base text-kh-cream/50">
              Finden Sie hier Antworten auf die wichtigsten Fragen rund
              um Ihren Besuch im Küffner Hof.
            </p>
          </FadeIn>

          <div className="lg:col-span-8">
            <div className="divide-y divide-kh-cream/10">
              {faqs.map((faq, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                    className="flex w-full items-start justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-serif text-lg font-medium text-kh-cream lg:text-xl">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 text-kh-sand transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i
                        ? "max-h-96 pb-6 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-2xl text-sm leading-relaxed text-kh-cream/50">
                      {faq.answer}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
