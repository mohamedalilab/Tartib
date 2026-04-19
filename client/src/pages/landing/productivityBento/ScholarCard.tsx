import ScholarImg from "@assets/images/scholar-card.png";

function ScholarCard() {
  return (
    <div className="col-span-12 md:col-span-4 card-base h-80 group">
      <img
        className="img-cover opacity-40 img-hover-zoom"
        src={ScholarImg}
        alt="Abstract Scholar Visual"
      />
      <div className="overlay-gradient-bottom"></div>
      <div className="absolute bottom-6 left-6">
        <h5 className="italic">The Scholar's Path</h5>
      </div>
    </div>
  );
}
export default ScholarCard;
