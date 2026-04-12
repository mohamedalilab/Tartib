import { Menu, X } from "lucide-react";

interface MenuToggleBtnProps {
  isOpen: boolean;
  callback: () => void;
}

function MenuToggleBtn({ isOpen, callback }: MenuToggleBtnProps) {
  return (
    <button
      className="md:hidden btn btn-icon transform-none"
      onClick={callback}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {isOpen ? <X className="sm:size-9" /> : <Menu className="sm:size-9" />}
    </button>
  );
}

export default MenuToggleBtn;
