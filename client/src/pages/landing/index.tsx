import Hero from "./Hero";
import ProductivityBento from "./productivityBento";
import Framework from "./Framework";
import Workflow from "./Workflow";

function Landing() {
  return (
    <div className="layout-container max-width-page">
      <Hero />
      <ProductivityBento />
      <Framework />
      <Workflow />
    </div>
  );
}

export default Landing;
