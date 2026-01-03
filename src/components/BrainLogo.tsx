import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type BrainLogoProps = {
  src: string;
  alt: string;
  className?: string;
  /** Pixels darker than this (0-255 luminance) become transparent */
  cutoff?: number;
  /** Soft fade range above cutoff */
  softness?: number;
};

/**
 * Renders a brain image as a true "logo" by keying out the dark background
 * on the client, producing a PNG with an alpha channel.
 */
export function BrainLogo({
  src,
  alt,
  className,
  cutoff = 26,
  softness = 70,
}: BrainLogoProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const img = new Image();
    img.decoding = "async";

    img.onload = () => {
      if (cancelled) return;

      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) {
        setDataUrl(src);
        return;
      }

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;

      for (let i = 0; i < d.length; i += 4) {
        const r = d[i];
        const g = d[i + 1];
        const b = d[i + 2];

        // Relative luminance
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        // Map luminance to alpha (soft edge)
        const a = Math.max(0, Math.min(255, ((lum - cutoff) / softness) * 255));
        d[i + 3] = Math.round((d[i + 3] * a) / 255);
      }

      ctx.putImageData(imageData, 0, 0);
      setDataUrl(canvas.toDataURL("image/png"));
    };

    img.onerror = () => {
      if (!cancelled) setDataUrl(src);
    };

    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [src, cutoff, softness]);

  return (
    <div className="[perspective:1200px]">
      <img
        src={dataUrl ?? src}
        alt={alt}
        className={cn(
          "select-none animate-spin3d",
          className
        )}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
