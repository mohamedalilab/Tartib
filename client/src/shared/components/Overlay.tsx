interface OverlayProps {
  isOpen: boolean;
  callback: () => void;
}

function Overlay({ isOpen, callback }: OverlayProps) {
  if (!isOpen) return null;

  return <div className="fixed inset-0 bg-black/20 z-40" onClick={callback} />;
}

export default Overlay;
