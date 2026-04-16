interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

function Overlay({ isOpen, onClose }: OverlayProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 top-16 bg-black/20"
      onClick={onClose}
      aria-hidden="true"
    />
  );
}

export default Overlay;
