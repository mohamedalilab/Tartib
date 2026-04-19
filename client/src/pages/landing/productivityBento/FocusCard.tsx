import FocusImg from "@assets/images/focus-card.png";

function FocusCard() {
  return (
    <div className="col-span-12 md:col-span-8 card-base h-80 group">
      <img
        className="img-cover opacity-80 img-hover-zoom"
        src={FocusImg}
        loading="eager"
        alt="Minimalist workspace"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent flex flex-col justify-end p-8">
        <h4>The Sanctuary of Focus</h4>
      </div>
    </div>
  );
}

export default FocusCard;
