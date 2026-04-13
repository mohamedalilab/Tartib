import { Link } from "react-router";

function Hero() {
  return (
    <section className="flex-center flex-col text-center mb-24">
      <h1 className="text-display-md md:text-display-lg text-on-background mb-8">
        Order for the Modern Mind.
      </h1>
      <p className="max-width-prose text-body-lg md:text-headline-md font-body font-normal text-on-surface-variant mb-10">
        Managing notes, tasks, and time in one unified ecosystem. Designed for
        the digital scholar who values clarity over noise.
      </p>
      <Link
        className="btn btn-accent text-title-lg font-bold px-10 py-4 uppercase"
        to="/"
      >
        Start Journey
      </Link>
    </section>
  );
}

export default Hero;
