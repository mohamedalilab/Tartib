import Hero from "./Hero";
import ProductivityBento from "./productivityBento";
import Framework from "./Framework";
import Workflow from "./Workflow";
import Philosophy from "./Philosophy";

function Landing() {
  return (
    <div className="layout-container max-width-page">
      <Hero />
      <ProductivityBento />
      <Framework />
      <Workflow />
      <Philosophy />
    </div>
  );
}

export default Landing;
