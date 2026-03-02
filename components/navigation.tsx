"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/hotel", label: "Hotel" },
  { href: "/restaurant", label: "Restaurant" },
  { href: "/biergaerten", label: "Biergärten" },
  { href: "/feiern", label: "Feiern" },
  { href: "/tagungen", label: "Tagungen" },
  { href: "/aktionen", label: "Aktionen" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const showSolid = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          showSolid
            ? "bg-kh-green/95 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 lg:px-12">
          {/* Logo */}
          <Link href="/" className="group relative z-10">
            <Image
              src="/images/logo.svg"
              alt="Küffner Hof Logo"
              width={140}
              height={50}
              className="h-9 w-auto brightness-0 invert transition-opacity duration-300 group-hover:opacity-80 sm:h-10 lg:h-12"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline relative text-[12px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 hover:text-kh-sand xl:text-[13px] ${
                  pathname === link.href
                    ? "text-kh-sand"
                    : "text-kh-cream/80"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-kh-sand" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/kontakt"
              className="border border-kh-sand/60 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-kh-sand transition-all duration-300 hover:bg-kh-sand hover:text-kh-green xl:text-[12px]"
            >
              Reservieren
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <span className={`block h-[1.5px] w-6 bg-kh-cream transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-kh-cream transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? "scale-x-0 opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-kh-cream transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-kh-green transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-5 px-8 sm:gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-serif text-2xl font-light transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-3xl ${
                pathname === link.href ? "text-kh-sand" : "text-kh-cream hover:text-kh-sand"
              } ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: mobileOpen ? `${i * 50 + 150}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={`mt-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mt-8 ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            style={{ transitionDelay: mobileOpen ? `${navLinks.length * 50 + 200}ms` : "0ms" }}
          >
            <Link href="/kontakt" className="border border-kh-sand px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-kh-sand transition-all duration-300 hover:bg-kh-sand hover:text-kh-green">
              Reservieren
            </Link>
          </div>
          <div
            className={`mt-4 text-center text-sm text-kh-cream/40 transition-all duration-700 sm:mt-6 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: mobileOpen ? `${navLinks.length * 50 + 300}ms` : "0ms" }}
          >
            <a href="tel:+497946916000" className="transition-colors hover:text-kh-cream/60">07946 91600</a>
            <span className="mx-3">·</span>
            <a href="mailto:info@kueffner-hof.de" className="transition-colors hover:text-kh-cream/60">info@kueffner-hof.de</a>
          </div>
        </div>
      </div>
    </>
  );
}
