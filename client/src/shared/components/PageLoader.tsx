import clsx from "clsx";
import { BookOpenText } from "lucide-react";

type PageLoaderProps = {
  variant?: "center" | "top";
  label?: string;
  className?: string;
};

// Animated progress bar with gradient fill effect
function SlimLine() {
  return (
    <div className="relative h-[2px] w-44 overflow-hidden rounded-full bg-on-surface/10">
      <div className="absolute inset-y-0 left-0 w-full animate-page-loader-line">
        <div className="h-full w-1/3 rounded-full bg-accent/80" />
      </div>
    </div>
  );
}

export default function PageLoader({
  variant = "center",
  label = "Loading...",
  className = "",
}: PageLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={clsx(
        "w-full grid place-items-center bg-surface/90 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-3">
        {/* Top variant: minimal bar only | Center variant: icon + bar */}
        {variant === "top" ? (
          <div className="w-full">
            <SlimLine />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <BookOpenText aria-hidden className="size-7 md:size:10 text-accent/85" />
            <SlimLine />
          </div>
        )}

        <p className="text-label-lg text-on-surface-variant">{label}</p>
      </div>
    </div>
  );
}