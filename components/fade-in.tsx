"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none" | "scale";
  delay?: number;
  threshold?: number;
}

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold,
}: FadeInProps) {
  const { ref, isVisible } = useInView(threshold ? { threshold } : undefined);

  const animationClass = {
    up: "animate-fade-up",
    left: "animate-slide-left",
    right: "animate-slide-right",
    none: "animate-fade-in",
    scale: "animate-scale-in",
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && animationClass,
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
