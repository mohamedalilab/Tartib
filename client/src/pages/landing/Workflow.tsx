import type React from "react";
import { ArrowRightLeft, Hourglass, NotebookPen } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: NotebookPen,
    title: "Capture",
    description: "Write thoughts in Markdown.",
  },
  {
    id: 2,
    icon: ArrowRightLeft,
    title: "Convert",
    description: "Turn notes into tasks.",
  },
  {
    id: 3,
    icon: Hourglass,
    title: "Execute",
    description: "Focus with Pomodoro.",
  },
];

interface WorkflowStepProps {
  icon: React.ComponentType;
  title: string;
  description: string;
  isLast?: boolean;
}

const WorkflowStep = ({
  icon: IconComponent,
  title,
  description,
}: WorkflowStepProps) => (
  <div className="group flex flex-col items-center text-center relative">
    <div
      className="btn btn-icon size-14 bg-surface-container-high border border-outline-variant/30 mb-8 
                transition-all duration-500 group-hover:scale-110 shadow-sm relative z-20"
    >
      <span className="text-primary text-2xl transition-all duration-500 group-hover:rotate-12">
        <IconComponent />
      </span>
    </div>

    <h4 className="text-on-surface mb-2">{title}</h4>
    <p className="text-body-lg text-on-surface-variant/40 max-w-60">
      {description}
    </p>
  </div>
);

export default function WorkflowSection() {
  return (
    <section className="mb-40 px-4">
      <h3 className="mb-24 text-center">The Connected Workflow</h3>

      <div className="relative">
        <div className="absolute top-7 left-0 w-full h-px bg-outline-variant/50 hidden md:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
          {steps.map((step) => (
            <WorkflowStep
              key={step.id}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
