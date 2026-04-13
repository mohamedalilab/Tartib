import Hero from "./Hero";
import ProductivityBento from "./productivityBento";
import Framework from "./Framework";

function Landing() {
  return (
    <div className="layout-container max-width-page">
      <Hero />
      <ProductivityBento />
      <Framework />
    </div>
  );
}

export default Landing;
