function ScholarCard() {
  return (
    <div className="col-span-12 md:col-span-4 card-base border-ghost relative overflow-hidden h-80 group">
      <img
        alt="Abstract Scholar Visual"
        className="img-cover opacity-40 img-hover-zoom"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrd4KnMc55jd9Ijs-PSwfNMZrbBrGy65oLhYD3WD-iYiUtVYU4P6gR-PqsdAE4hKEUJiVE3iHkKc190RsC45_R817x-KQM-iDqcUfABma07Q3cOyv2_vd2DUqDcxTe_BjjnMSS82IRZK-BK1MOHymunT5V2xeJLTZpY9cYbGGM9nXxoKqBxjMhpMxlWAl27K6GAWWuFGOKrlinFkw9yH4bzG_UaQpHNHgYNPbYLmiQBhMLsID_qk9elUkoJw7lyVYarzjLPfW652Ke"
      />
      <div className="overlay-gradient-bottom"></div>
      <div className="absolute bottom-6 left-6">
        <h5 className="italic">The Scholar's Path</h5>
      </div>
    </div>
  );
}
export default ScholarCard;
