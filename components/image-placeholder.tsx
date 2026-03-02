import { cn } from "@/lib/utils";
import { Camera } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: "square" | "video" | "wide" | "tall";
  dark?: boolean;
}

export function ImagePlaceholder({
  label,
  className,
  aspect = "video",
  dark = false,
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    tall: "aspect-[3/4]",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        aspectClasses[aspect],
        dark ? "bg-kh-green-light" : "bg-kh-cream-dark",
        className
      )}
    >
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <Camera
          className={cn(
            "h-8 w-8",
            dark ? "text-kh-sand/30" : "text-kh-text-light/30"
          )}
        />
        <p
          className={cn(
            "text-[11px] font-medium uppercase tracking-[0.15em]",
            dark ? "text-kh-sand/40" : "text-kh-text-light/50"
          )}
        >
          Placeholder – {label}
        </p>
      </div>
    </div>
  );
}
