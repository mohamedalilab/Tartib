import { LayoutDashboard, SquarePen, Timer } from "lucide-react";
import type React from "react";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const FRAMEWORK_FEATURES: FeatureItem[] = [
  {
    id: "knowledge",
    title: "Atomic Knowledge",
    icon: LayoutDashboard,
    description:
      "Drafting ideas in distraction-free Markdown. Build a network of linked concepts that mirror how your mind naturally associates information.",
  },
  {
    id: "tasks",
    title: "Intentional Tasks",
    icon: SquarePen,
    description:
      "A unified board designed for clarity, not complexity. Move from planning to execution with a workspace that honors your daily priorities.",
  },
  {
    id: "time",
    title: "Rhythmic Time",
    icon: Timer,
    description:
      "An integrated Pomodoro engine that aligns your deep work sessions with your tasks. Measure energy, not just hours.",
  },
];
