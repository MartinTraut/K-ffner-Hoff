import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerNav = {
  "Gastlichkeit": [
    { href: "/restaurant", label: "Restaurant" },
    { href: "/speisekarten", label: "Speisekarten" },
    { href: "/biergaerten", label: "Biergärten" },
    { href: "/aktionen", label: "Aktionen" },
  ],
  "Übernachten & Tagen": [
    { href: "/hotel", label: "Hotel" },
    { href: "/tagungen", label: "Tagungen" },
    { href: "/feiern", label: "Feiern" },
  ],
  "Information": [
    { href: "/oeffnungszeiten", label: "Öffnungszeiten" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-kh-green pb-24 lg:pb-8">
      {/* Top divider */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="border-t border-kh-cream/10 pt-16 pb-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block">
                <h3 className="font-serif text-3xl font-semibold text-kh-cream">
                  Küffner Hof
                </h3>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.3em] text-kh-sand">
                  Hotel & Restaurant
                </p>
              </Link>

              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3 text-sm text-kh-cream/60">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-kh-sand/60" />
                  <span>
                    Neudeck 21
                    <br />
                    74243 Langenbrettach
                  </span>
                </div>
                <a
                  href="tel:+497946916000"
                  className="flex items-center gap-3 text-sm text-kh-cream/60 transition-colors hover:text-kh-sand"
                >
                  <Phone className="h-4 w-4 shrink-0 text-kh-sand/60" />
                  07946 91600
                </a>
                <a
                  href="mailto:info@kueffner-hof.de"
                  className="flex items-center gap-3 text-sm text-kh-cream/60 transition-colors hover:text-kh-sand"
                >
                  <Mail className="h-4 w-4 shrink-0 text-kh-sand/60" />
                  info@kueffner-hof.de
                </a>
              </div>
            </div>

            {/* Navigation Columns */}
            {Object.entries(footerNav).map(([title, links]) => (
              <div key={title} className="lg:col-span-2 lg:col-start-auto">
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-sand">
                  {title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-kh-cream/50 transition-colors hover:text-kh-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Opening Hours Column */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-sand">
                Öffnungszeiten
              </h4>
              <div className="mt-4 space-y-2 text-sm text-kh-cream/50">
                <p>
                  <span className="text-kh-cream/70">Küche</span>
                  <br />
                  Mo – Sa, 11:30 – 21:00
                </p>
                <p>
                  <span className="text-kh-cream/70">Büro</span>
                  <br />
                  Mo – Fr, 08:00 – 17:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-kh-cream/5 py-6 text-[12px] text-kh-cream/30 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Küffner Hof. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-kh-cream/50">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-kh-cream/50">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
