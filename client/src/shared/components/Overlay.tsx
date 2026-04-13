interface OverlayProps {
  isOpen: boolean;
  callback: () => void;
}

function Overlay({ isOpen, callback }: OverlayProps) {
  if (!isOpen) return null;

  return <div className="fixed inset-0 top-16 bg-black/20" onClick={callback} />;
}

export default Overlay;
