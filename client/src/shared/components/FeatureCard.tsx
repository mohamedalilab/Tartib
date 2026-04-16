import type { FeatureItem } from "../constants/features";

interface FeatureCardProps {
  feature: FeatureItem;
}

function FeatureCard({ feature }: FeatureCardProps) {
  const { title, description, icon: IconComponent } = feature;

  return (
    <div className="group space-y-8 p-6 rounded-2xl bg-surface-container">
      <div
        className="btn btn-icon p-4 text-accent bg-surface-container-highest border border-outline-variant/10  
        transition-all duration-500 group-hover:scale-110 shadow-sm"
      >
        <IconComponent />
      </div>
      <div className="space-y-4">
        <h4 className="text-on-surface">{title}</h4>
        <p className="text-body-lg text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
