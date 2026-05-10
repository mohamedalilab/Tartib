import { ArrowLeft } from "lucide-react";
import { useGoBack } from "@/shared/hooks/useGoBack";
import { ThemeToggleBtn } from "@/features/theme/components/ThemeToggleBtn";

function Header() {
  const goBack = useGoBack();

  return (
    <header className="sticky inset-0 z-100 p-6 md:p-8">
      <div className="layout-container max-width-page flex-between">
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-on-surface-variant"
        >
          <ArrowLeft />
          <span className="text-label-lg uppercase">Back</span>
        </button>
        <ThemeToggleBtn />
      </div>
    </header>
  );
}

export default Header;
