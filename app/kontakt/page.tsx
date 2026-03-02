import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { Phone, Mail, MapPin, Clock, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie den Küffner Hof – Neudeck 21, 74243 Langenbrettach. Tel. 07946 91600.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="relative bg-kh-green pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/kontakt/drohne-hof.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-semibold text-kh-cream lg:text-6xl">Kontakt</h1>
            <p className="mt-6 text-lg text-kh-cream/60">Wir freuen uns auf Ihre Nachricht – ob Reservierung, Anfrage oder Feedback.</p>
          </div>
        </div>
      </section>

      <section className="bg-kh-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-serif text-3xl font-semibold text-kh-green">So erreichen Sie uns</h2>
              <div className="mt-8 space-y-6">
                {[
                  { icon: MapPin, title: "Adresse", content: "Küffner Hof\nNeudeck 21\n74243 Langenbrettach" },
                  { icon: Phone, title: "Telefon", content: "07946 91600", href: "tel:+497946916000" },
                  { icon: Mail, title: "E-Mail", content: "info@kueffner-hof.de", href: "mailto:info@kueffner-hof.de" },
                  { icon: Clock, title: "Öffnungszeiten", content: "Küche: Mo – Sa, 11:30 – 21:00 Uhr\nBüro: Mo – Fr, 08:00 – 17:00 Uhr" },
                  { icon: Car, title: "Anfahrt", content: "A6 (Ausfahrt Bretzfeld) · A81 (Ausfahrt Neuenstadt)\nCa. 20 Min. von Heilbronn · 10 Min. von Öhringen\nKostenlose Parkplätze vorhanden" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-kh-green/5"><item.icon className="h-5 w-5 text-kh-green" /></div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-kh-green">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block whitespace-pre-line text-kh-text-light transition-colors hover:text-kh-green">{item.content}</a>
                      ) : (
                        <p className="mt-1 whitespace-pre-line text-kh-text-light">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="rounded bg-kh-white p-8 shadow-sm lg:p-10">
                <h2 className="font-serif text-2xl font-semibold text-kh-green">Nachricht senden</h2>
                <p className="mt-2 text-sm text-kh-text-light">Füllen Sie das Formular aus – wir melden uns zeitnah bei Ihnen.</p>
                <form className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div><label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-kh-green">Vorname</label><input type="text" className="w-full border border-kh-green/10 bg-kh-cream/50 px-4 py-3 text-sm text-kh-text focus:border-kh-green/30 focus:outline-none" required /></div>
                    <div><label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-kh-green">Nachname</label><input type="text" className="w-full border border-kh-green/10 bg-kh-cream/50 px-4 py-3 text-sm text-kh-text focus:border-kh-green/30 focus:outline-none" required /></div>
                  </div>
                  <div><label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-kh-green">E-Mail</label><input type="email" className="w-full border border-kh-green/10 bg-kh-cream/50 px-4 py-3 text-sm text-kh-text focus:border-kh-green/30 focus:outline-none" required /></div>
                  <div><label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-kh-green">Telefon (optional)</label><input type="tel" className="w-full border border-kh-green/10 bg-kh-cream/50 px-4 py-3 text-sm text-kh-text focus:border-kh-green/30 focus:outline-none" /></div>
                  <div><label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-kh-green">Betreff</label>
                    <select className="w-full border border-kh-green/10 bg-kh-cream/50 px-4 py-3 text-sm text-kh-text focus:border-kh-green/30 focus:outline-none">
                      <option>Tischreservierung</option><option>Hotelzimmer anfragen</option><option>Feier / Event anfragen</option><option>Tagung anfragen</option><option>Catering anfragen</option><option>Sonstiges</option>
                    </select>
                  </div>
                  <div><label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-kh-green">Nachricht</label><textarea rows={5} className="w-full border border-kh-green/10 bg-kh-cream/50 px-4 py-3 text-sm text-kh-text focus:border-kh-green/30 focus:outline-none" required /></div>
                  <button type="submit" className="w-full bg-kh-green py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-kh-cream transition-all hover:bg-kh-green-light">Nachricht senden</button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-kh-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-center font-serif text-3xl font-semibold text-kh-green lg:text-4xl">Anfahrt</h2>
            <div className="mt-8 overflow-hidden rounded-sm">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.0!2d9.3936!3d49.2322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982d8c8c0c0001%3A0x0!2sNeudeck+21%2C+74243+Langenbrettach!5e0!3m2!1sde!2sde!4v1" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Küffner Hof Standort" className="w-full" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
