import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// تعريف أنواع البيانات (Types)
interface BentoProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoItemProps {
  children: React.ReactNode;
  colSpan?: string;
  mdColSpan?: string;
  height?: string;
  className?: string;
  variant?: "default" | "highlight" | "glass";
}

// bento parent container
export const BentoGrid = ({ children, className = "" }: BentoProps) => {
  return (
    <section className={clsx("grid-system grid-bento", className)}>
      {children}
    </section>
  );
};

export const BentoItem = ({
  variant = "default",
  className,
  children,
  mdColSpan,
  colSpan,
  height,
}: BentoItemProps) => {
  const variantStyles = {
    default: "bg-surface-container ghost-border",
    highlight: "bg-primary-container border-primary/20 shadow-lg",
    glass: "bg-white/10 backdrop-blur-md border border-white/20",
  };

  return (
    <div
      className={cn(
        `col-${colSpan} md:col-${mdColSpan} ${height}`,
        "rounded-lg p-10 flex flex-col justify-between overflow-hidden relative",
        variantStyles[variant as keyof typeof variantStyles],
        className
      )}
    >
      {children}
    </div>
  );
};
// ربط المكونات ببعضها (Compound Pattern)
BentoGrid.Item = BentoItem;
