import FeatureCard from "@/shared/components/FeatureCard";
import { FRAMEWORK_FEATURES } from "@/shared/constants/features";

function Framework() {
  return (
    <section className="mb-40 px-4" id="framework">
      <div className="text-center mb-24">
        <span className="text-label-lg uppercase text-accent mb-4 block tracking-micro ">
          System Design
        </span>
        <h2 className="text-on-background">The Framework of Focus</h2>
      </div>
      <div className="grid grid-auto-fill-lg gap-6 max-width-page">
        {FRAMEWORK_FEATURES.map((feature) => (
          <FeatureCard key={feature.id} feature={feature}></FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default Framework;
