import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Die Geschichte des Küffner Hof – seit 1997 Gastlichkeit in Langenbrettach. Seit Mai 2024 unter neuer Leitung.",
};

const teamMembers = [
  { name: "Timo Schweikhardt", role: "Geschäftsleitung", image: "/images/team/timo-schweikhardt.png" },
  { name: "Marina Schweikhardt", role: "Hauswirtschaft", image: "/images/team/marina-schweikhardt.jpg" },
  { name: "Bianca Lang", role: "Eventmanagerin", image: "/images/team/bianca-lang.jpg" },
  { name: "Colette Anilmis", role: "Serviceleitung", image: "/images/team/colette-anilmis.jpg" },
  { name: "Seda Bakircioglu", role: "Veranstaltungsleitung", image: "/images/team/seda-bakircioglu.jpg" },
  { name: "Edelgard Lange", role: "Buchhaltung", image: "/images/team/edelgard-lange.jpg" },
  { name: "Corinna Hüttinger", role: "Personalleitung", image: "/images/team/corinna-huttinger.jpg" },
  { name: "Lisa Schweikhardt", role: "Buchhaltung", image: "/images/team/lisa-schweikhardt.jpg" },
  { name: "Marius-Constantin Nedea", role: "Catering", image: "/images/team/marius-nedea.jpg" },
  { name: "Matthias Hose", role: "Koch", image: "/images/team/matthias-hose.jpg" },
  { name: "Marius Stefan Cristea", role: "Koch", image: "/images/team/marius-cristea.jpg" },
  { name: "Anisora Matei", role: "Küchenpersonal", image: "/images/team/anisora-matei.jpg" },
  { name: "Kerstin Ymeri", role: "Küchenpersonal", image: "/images/team/kerstin-ymeri.jpg" },
  { name: "Birgit Brodbeck", role: "Housekeeping", image: "/images/team/birgit-brodbeck.jpg" },
  { name: "Sarah-Jane Nowak", role: "Housekeeping", image: "/images/team/sarah-nowak.jpg" },
  { name: "Viktoriia Vilchynska", role: "Housekeeping", image: "/images/team/viktoriia-vilchynska.jpg" },
  { name: "Johann Recktenwald", role: "Hausmeister", image: "/images/team/johann-recktenwald.jpg" },
  { name: "Lisa Herdlitschka", role: "Service", image: "/images/team/lisa-herdlitschka.jpg" },
  { name: "Dirk Stettner", role: "Spülküche", image: "/images/team/dirk-stettner.jpg" },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero title="Über uns" subtitle="Gastlichkeit mit Geschichte – seit 1997 in Langenbrettach." image="/images/team/team-hero.jpg" imageAlt="Team Küffner Hof" />

      <section className="bg-kh-cream py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-2">
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">Unsere Geschichte</p>
              <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-kh-green sm:mt-4 sm:text-3xl lg:text-4xl">Von der Reiterstüble<br className="hidden sm:block" /> zum Hotel & Restaurant</h2>
              <p className="mt-4 text-sm leading-relaxed text-kh-text-light sm:mt-6 sm:text-base">1986 begann Hans-Peter Küffner mit dem Kauf eines Nachbarhofs und dem Erwerb seines Pferdezucht-Meisterbriefs den Weg in eine neue Richtung. Bald drehte sich in Neudeck alles rund ums Pferd.</p>
              <p className="mt-3 text-sm leading-relaxed text-kh-text-light sm:mt-4 sm:text-base">1997 konnten erstmals Gäste – vor allem Western-Reiter – in einer eigens eingerichteten „Reiterstüble" Speisen und Getränke genießen. Was als kleines Angebot begann, wuchs über die Jahre zu einem vollwertigen Hotel- und Restaurantbetrieb.</p>
              <p className="mt-3 text-sm leading-relaxed text-kh-text-light sm:mt-4 sm:text-base">Seit dem 1. Mai 2024 steht der Küffner Hof unter neuer Leitung – mit frischen Ideen und dem gleichen Anspruch an Gastfreundschaft und Qualität.</p>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-4">
                <div className="relative aspect-video overflow-hidden rounded-sm">
                  <Image src="/images/hotel/hotel-bg.jpg" alt="Küffner Hof Gebäude" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="relative aspect-video overflow-hidden rounded-sm">
                  <Image src="/images/feiern/event.jpg" alt="Veranstaltung im Küffner Hof" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Werte Section */}
      <section className="bg-kh-green py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand">Unsere Werte</p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-kh-cream sm:mt-4 sm:text-3xl lg:text-4xl">Gastfreundschaft aus Überzeugung</h2>
              <p className="mt-4 text-sm leading-relaxed text-kh-cream/50 sm:mt-6 sm:text-base">
                Was als kleine Reiterstüble begann, ist heute ein Ort, an dem Tradition und frische Ideen zusammenkommen. Unser Anspruch: Jeder Gast soll sich bei uns willkommen und wohl fühlen – ob beim Essen, Übernachten oder Feiern.
              </p>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-8">
            {[
              { title: "Qualität", text: "Frische Zutaten, hausgemachte Gerichte und liebevoll eingerichtete Zimmer – bei uns zählt jedes Detail." },
              { title: "Herzlichkeit", text: "Ein engagiertes Team, das mit Freude arbeitet und dafür sorgt, dass Sie sich rundum wohlfühlen." },
              { title: "Vielfalt", text: "Vom gemütlichen Abendessen über große Feiern bis hin zu professionellen Tagungen – wir bieten für jeden Anlass den passenden Rahmen." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 120}>
                <div className="rounded-sm bg-kh-green-light p-6 sm:p-8">
                  <h3 className="font-serif text-lg font-semibold text-kh-sand sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-kh-cream/50">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kh-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <FadeIn><div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-kh-sand-dark">Das Team</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-kh-green sm:mt-4 sm:text-3xl lg:text-4xl">Unsere Mannschaft</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-kh-text-light sm:mt-4 sm:text-base">Ein engagiertes Team sorgt dafür, dass Sie sich bei uns rundum wohlfühlen.</p>
          </div></FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.name} delay={i * 40}>
                <div className="text-center">
                  <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-sm">
                    <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" />
                  </div>
                  <h3 className="mt-2.5 text-xs font-semibold text-kh-green sm:mt-3 sm:text-sm">{member.name}</h3>
                  <p className="mt-0.5 text-[11px] text-kh-text-light sm:text-[12px]">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kh-cream py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-6 lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-2xl font-semibold text-kh-green sm:text-3xl lg:text-4xl">Besuchen Sie uns</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-kh-text-light sm:mt-4 sm:text-base">Neudeck 21, 74243 Langenbrettach – wir freuen uns auf Sie.</p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center">
              <Link href="/kontakt" className="inline-flex items-center bg-kh-green px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-cream transition-all duration-300 hover:bg-kh-green-light sm:px-8 sm:py-3.5 sm:text-[12px]">Kontakt aufnehmen</Link>
              <a href="tel:+497946916000" className="inline-flex items-center border border-kh-green/20 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-green transition-all duration-300 hover:border-kh-green sm:px-8 sm:py-3.5 sm:text-[12px]">07946 91600</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
