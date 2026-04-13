function NotesCard() {
  return (
    <div className="col-span-12 md:col-span-7 card-base border-ghost p-10 group">
      <div className="bg-glow-primary top-0 right-0 transition-opacity opacity-0 group-hover:opacity-100" />

      <div className="relative z-10">
        <span className="text-label-md uppercase text-accent mb-4 block">
          Refined Thought
        </span>
        <h3 className="text-on-surface mb-4">Atomic Note-Taking</h3>
        <p className="text-body-lg text-on-surface-variant max-width-prose mb-4">
          Connect ideas through a non-linear network of knowledge. A canvas that
          adapts to your mental model.
        </p>
      </div>

      <div className="relative w-full h-60 bg-surface-container-lowest rounded-xl overflow-hidden p-8 img-hover-zoom">
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.05] pointer-events-none" />

        <div className="flex gap-6 relative z-10">
          <div className="w-1/4 space-y-5">
            {[100, 75, 90].map((width, i) => (
              <div
                key={i}
                style={{ width: `${width}%` }}
                className="h-1.5 bg-primary/20 rounded-full overflow-hidden"
              >
                <div className="h-full bg-primary/40 group-hover:bg-primary transition-all duration-1000" />
              </div>
            ))}
          </div>

          {/* Main Editor Preview */}
          <div className="flex-1 h-44 bg-surface-container-low rounded-lg border border-outline/10 p-5 transition-all duration-500 group-hover:border-primary/30">
            <div className="h-3 w-24 bg-primary/10 rounded-md mb-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesCard;
