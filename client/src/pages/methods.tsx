import { Copy, Network, Timer } from "lucide-react";

function Methods() {
  return (
    <div className="layout-container max-width-page">
      <section className="mb-15 max-width-prose">
        <span className="text-label-md uppercase text-accent tracking-micro block w-fit mb-2 rounded-md btn border border-outline-variant">
          Methodologies
        </span>
        <h1 className="text-display-xl mb-8 leading-tight">
          Structured <br />
          <span className="italic">Thought &amp; Focus.</span>
        </h1>
        <p className="text-body-xl text-on-surface-variant leading-relaxed">
          Tartib integrates centuries-old academic systems with modern
          neuro-productivity frameworks to create a workspace that doesn't just
          manage tasks, but cultivates wisdom.
        </p>
      </section>
      <div className="card-base is-border bg-surface-container-lowest p-7 mb-6 group transition-all">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Network size={30} className="text-accent" />
            <h2 className="text-headline-md">Zettelkasten: The Second Brain</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 text-body-md text-on-surface-variant">
            <p>
              Atomic Note-Taking is the practice of breaking complex ideas into
              their smallest, independent parts. Each "Zettel" or note
              represents a single thought, tagged and linked to others, creating
              a web of intelligence that grows organically over time.
            </p>
            <p>
              In Tartib, your notes are not static files. They are active nodes.
              By focusing on atomicity, you ensure that every piece of
              information is reusable across multiple projects, preventing the
              "silo effect" of traditional folder systems.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-outline-variant">
          <q className="text-body-lg italic text-on-surface-variant">
            One cannot think without writing. — Luhmann
          </q>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto text-on-surface">
        <div className="md:col-span-7 card-base is-border bg-surface-container p-7">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Timer size={30} className="text-accent" />
              <h2 className="text-headline-md font-serif font-bold">
                The Pomodoro Rhythm
              </h2>
            </div>
            <p className="text-on-surface-variant mb-8">
              Named after the tomato-shaped kitchen timer used by Francesco
              Cirillo, this technique uses a timer to break work into intervals,
              traditionally 25 minutes in length, separated by short breaks.
            </p>
            <div className="grid grid-cols-3 gap-4 uppercase">
              <div className="p-3 px-2 text-center border border-outline-neutral">
                <span className="block text-headline-md font-sans text-accent mb-1">
                  25
                </span>
                <span className="text-label-sm opacity-50">Minutes Focus</span>
              </div>
              <div className="p-4 px-2 text-center border border-outline-neutral">
                <span className="block text-headline-md font-sans text-accent mb-1">
                  05
                </span>
                <span className="text-label-sm opacity-50">Minutes Rest</span>
              </div>
              <div className="p-4 px-2 text-center border border-outline-neutral">
                <span className="block text-headline-md font-sans text-accent mb-1">
                  15
                </span>
                <span className="text-label-sm opacity-50">Deep Reset</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-outline-variant flex-between">
            <p className="text-label-md font-bold uppercase gap-2">
              Inspired by
              <span className="text-accent ml-1">
                Francesco Cirillo’s Pomodoro Technique
              </span>
            </p>
          </div>
        </div>
        <div className="md:col-span-5 card-base is-border flex-center text-center bg-surface-container-lowest p-7">
          <div className="mb-6 size-20 rounded-pill border border-outline-variant flex-center">
            <Copy className="text-accent" />
          </div>
          <h3 className="text-headline-sm mb-4 italic">Flow over Friction</h3>
          <p className="text-body-md text-on-surface-variant px-4">
            Tartib's implementation of these methods focuses on reducing
            cognitive load so you can stay in 'Deep Work' longer.
          </p>
          <div className="mt-8">
            <button className="text-label-md font-bold uppercase tracking-micro text-accent border-b-2 border-outline-variant pb-1 hover:border-accent transition-all">
              Explore the OS
            </button>
          </div>
        </div>
      </div>

      <section className="mt-32 flex flex-col md:flex-row gap-10 items-end">
        <div className="md:w-1/2">
          <blockquote className="text-headline-md italic leading-snug text-on-surface">
            "The mind is for having ideas, not holding them. Tartib ensures the
            holding is handled, so your mind can remain free to wander the peaks
            of creativity."
          </blockquote>
        </div>
        <div className="md:w-1/3 pb-4">
          <div className="h-px w-12 bg-accent mb-6"></div>
          <p className="text-sm uppercase tracking-widest font-semibold">
            Editorial Note
          </p>
          <p className="text-label-md text-on-surface-variant mt-2">
            A Note on How Tartib Thinks
          </p>
        </div>
      </section>
    </div>
  );
}

export default Methods;
