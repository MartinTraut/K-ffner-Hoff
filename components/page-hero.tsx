"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
}

export function PageHero({ title, subtitle, image, imageAlt }: PageHeroProps) {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative min-h-[50vh] overflow-hidden bg-kh-green sm:min-h-[55vh] lg:min-h-[65vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover opacity-30 sm:opacity-35 lg:opacity-40"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-kh-green via-kh-green/60 to-kh-green/20" />

      <div className="relative mx-auto flex min-h-[50vh] max-w-[1400px] items-end px-6 pb-12 sm:min-h-[55vh] sm:pb-16 lg:min-h-[65vh] lg:px-12 lg:pb-20">
        <div className="max-w-2xl">
          <h1
            className={cn(
              "font-serif text-3xl font-semibold leading-tight text-kh-cream opacity-0 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
              isVisible && "animate-fade-up"
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                "mt-4 max-w-lg text-sm leading-relaxed text-kh-cream/60 opacity-0 sm:text-base lg:mt-6 lg:text-lg",
                isVisible && "animate-fade-up"
              )}
              style={{ animationDelay: "150ms" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-kh-green to-transparent" />
    </section>
  );
}
