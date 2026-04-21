import ManifestoImg from "@assets/images/manifesto.png";
import { Link } from "react-router";

function Manifesto() {
  return (
    <div className="layout-container max-width-page">
      <section className="py-12 border-b border-outline-neutral">
        <h1 className="text-display-xl md:text-8xl font-normal text-on-surface mb-8">
          A Manifesto for Quiet Tech
        </h1>
        <p className="text-headline-sm md:text-headline-md font-body text-on-surface-variant font-light">
          Why cognitive load requires a minimalist architecture.
        </p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-24">
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-4">
            <span className="text-label-sm tracking-micro uppercase text-outline">
              Section 01
            </span>
            <h2 className="text-headline-md italic">The Digital Noise</h2>
            <p className="text-body-md text-on-surface-variant">
              In an era of relentless notification cycles, the modern scholar
              faces a new form of scarcity: focused attention.
            </p>
          </div>
          <div className="h-64 w-full rounded-sm border border-outline-variant relative overflow-hidden">
            <div className="absolute inset-0 flex-center">
              <div className="size-32 border border-outline-neutral rounded-full flex-center">
                <div className="size-16 border border-outline-neutral rounded-full flex-center">
                  <div className="size-4 bg-surface-container-highest rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-1/4 left-1/3 size-1 bg-primary rounded-full"></div>
              <div className="absolute bottom-1/3 right-1/4 size-1 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 lg:pl-12">
          <article className="text-body-xl font-headline text-on-surface space-y-12">
            <p>
              The Problem is not a lack of information, but the friction of its
              storage. We are surrounded by digital noise—ephemeral platforms
              designed for consumption rather than synthesis. Tartib was born
              from the realization that our digital environments should mirror
              the stillness of a physical library, prioritizing the longevity of
              thought over the urgency of the feed.
            </p>
            <div className="py-4">
              <img
                className="w-full h-100 object-cover grayscale opacity-90 brightness-105 hover:grayscale-0 hover:filter-none"
                src={ManifestoImg}
                alt="Library interior"
                data-alt="Minimalist modern library with high ceilings, warm wooden shelves, soft natural light streaming through large windows, and a solitary wooden desk"
              />
            </div>
            <p>
              The Influence stems from the Zettelkasten method—the art of
              networked thinking. By treating every note as a node in a living
              organism, we move away from hierarchical folders into a fluid web
              of associations. Tartib leverages this non-linear approach to
              ensure that your ideas don't just sit in a vault, but actively
              converse with one another, fostering serendipitous discovery and
              deeper cognitive synthesis.
            </p>
            <p>
              The Tech Stack serves this philosophy through Clean Architecture.
              Built on the MERN foundation (MongoDB, Express, React, Node), we
              have abstracted the business logic from the delivery mechanism.
              This ensures the system remains resilient, testable, and quiet. By
              minimizing side effects and enforcing a unidirectional data flow,
              Tartib ensures that the machine never gets in the way of the mind.
            </p>
          </article>
        </div>
      </section>
      <section className="py-20 border-t border-outline-neutral">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-6">
            <div className="h-px w-24 bg-on-surface"></div>
            <div className="space-y-2">
              <p className="font-serif text-2xl italic text-on-surface">
                — Mohamed Ali
              </p>
              <p className="text-body-md text-on-surface-variant uppercase tracking-widest">
                Creator of Tartib
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-8">
            <Link
              className="text-label-md tracking-widest uppercase text-primary hover:text-on-surface transition-all duration-300 border-b border-transparent hover:border-primary pb-1"
              to="#"
            >
              GitHub
            </Link>
            <Link
              className="text-label-md tracking-widest uppercase text-primary hover:text-on-surface transition-all duration-300 border-b border-transparent hover:border-primary pb-1"
              to="#"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Manifesto;
