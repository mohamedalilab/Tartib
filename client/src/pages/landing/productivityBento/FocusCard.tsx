function FocusCard() {
  return (
    <div className="col-span-12 md:col-span-8 relative card-base border-ghost h-80 group">
      <img
        alt="Minimalist workspace"
        className="img-cover opacity-80 img-hover-zoom"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_w4SbGkISmPiLRTWeYyLWeTotFfeh8rbBZ0qhDVOuJIjOiSOZg1i2p5oPbftbltbhYZEqIJX7N3tflcloJDrBhFbPAoNlJ5JEIv-639gYOqnLYewscRmYHWkv50Fea-wK5shRAOPhwOKGoZBn1Z08377OxoMvRiTaygv7TT7vXnghUFBGvS0c9p4HfwUVjgD7dDpP0fjvSXeKLdpvi5y-dk1-QZAl13qG48PE63GXZqvt9jnEzKpd1NqOqhiA3943vSG74vf4tK1W"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent flex flex-col justify-end p-8">
        <h4>The Sanctuary of Focus</h4>
      </div>
    </div>
  );
}

export default FocusCard;
