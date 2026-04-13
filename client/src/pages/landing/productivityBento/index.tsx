import NotesCard from "./NotesCard";
import PomodoroCard from "./PomodoroCard";
import ScholarCard from "./ScholarCard";
import FocusCard from "./FocusCard";

function ProductivityBento() {
  return (
    <section>
      <div className="grid-system grid-bento mb-24">
        <NotesCard />
        <PomodoroCard />
        <ScholarCard />
        <FocusCard />
      </div>
    </section>
  );
}

export default ProductivityBento;
