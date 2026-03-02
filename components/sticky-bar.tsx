"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Phone, UtensilsCrossed, Clock } from "lucide-react";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > 600);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {/* Desktop Sticky Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:block ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="border-t border-kh-sand/15 bg-kh-green/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-12 py-3">
            <Link
              href="/kontakt"
              className="group flex items-center gap-3 bg-kh-sand px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-green transition-all duration-300 hover:bg-kh-sand-light xl:text-[12px]"
            >
              <Phone className="h-3.5 w-3.5" />
              Reservieren
            </Link>

            <div className="flex items-center gap-8">
              <Link
                href="/speisekarten"
                className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-kh-cream/60 transition-colors duration-300 hover:text-kh-sand xl:text-[12px]"
              >
                <UtensilsCrossed className="h-3.5 w-3.5" />
                Speisekarte
              </Link>
              <span className="h-3 w-px bg-kh-cream/15" />
              <Link
                href="/oeffnungszeiten"
                className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-kh-cream/60 transition-colors duration-300 hover:text-kh-sand xl:text-[12px]"
              >
                <Clock className="h-3.5 w-3.5" />
                Öffnungszeiten
              </Link>
              <span className="h-3 w-px bg-kh-cream/15" />
              <a
                href="tel:+497946916000"
                className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-kh-cream/60 transition-colors duration-300 hover:text-kh-sand xl:text-[12px]"
              >
                <Phone className="h-3.5 w-3.5" />
                07946 91600
              </a>
            </div>

            <Link
              href="/hotel"
              className="border border-kh-cream/15 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-kh-cream/60 transition-all duration-300 hover:border-kh-sand hover:text-kh-sand xl:text-[12px]"
            >
              Hotel anfragen
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="border-t border-kh-sand/15 bg-kh-green/95 backdrop-blur-xl safe-area-bottom">
          <div className="flex items-center justify-between px-4 py-2.5 sm:px-6">
            <a
              href="tel:+497946916000"
              className="flex items-center gap-1.5 rounded-sm bg-kh-sand px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-kh-green sm:px-4"
            >
              <Phone className="h-3 w-3" />
              Anrufen
            </a>
            <Link
              href="/speisekarten"
              className="flex items-center gap-1.5 px-2 text-[11px] font-medium uppercase tracking-[0.1em] text-kh-cream/60"
            >
              <UtensilsCrossed className="h-3 w-3" />
              Karte
            </Link>
            <Link
              href="/oeffnungszeiten"
              className="flex items-center gap-1.5 px-2 text-[11px] font-medium uppercase tracking-[0.1em] text-kh-cream/60"
            >
              <Clock className="h-3 w-3" />
              Zeiten
            </Link>
            <Link
              href="/kontakt"
              className="px-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-kh-sand"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
