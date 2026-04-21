export default function TopProgress() {
  return (
    <div className="absolute top-0 h-0.5 w-full overflow-hidden rounded-full bg-on-surface-variant/10">
      <div className="absolute inset-y-0 left-0 w-1/3 animate-skeleton-shimmer motion-reduce:animate-none">
        <div className="h-full w-full rounded-full bg-accent/80" />
      </div>
    </div>
  );
}
