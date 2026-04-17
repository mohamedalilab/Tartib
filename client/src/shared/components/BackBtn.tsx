import clsx from "clsx";
import { useGoBack } from "../hooks/useGoBack";
import { ArrowLeft } from "lucide-react";

interface BackBtnProps {
  label: string;
  className?: string;
  fallback?: string;
}

function BackBtn({ label = "Back", className, fallback}: BackBtnProps) {
  const goBack = useGoBack(fallback);

  return (
    <button
      type="button"
      onClick={goBack}
      className={clsx(
        "btn btn-primary bg-primary uppercase rounded-none tracking-widest transition-colors group",
        className
      )}
    >
      <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
      {label}
    </button>
  );
}

export default BackBtn;
