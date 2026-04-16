import React from "react";

// Initial duration in seconds (25 minutes)
const DURATION = 25 * 60;

export default function PomodoroCard() {
  // State to track the remaining seconds
  const [time, setTime] = React.useState<number>(DURATION);
  // State to track the timer on/off
  const [isRunning, setIsRunning] = React.useState<boolean>(true);
  // Persist the exact timestamp when the timer should end without triggering re-renders
  const endTimeRef = React.useRef<number | null>(null);

  /**
   * Toggles the timer state.
   * If starting: Calculates the future end timestamp based on current time + remaining seconds.
   */
  const toggleTimer = () => {
    if (!isRunning) {
      // Set the end time to: Now + (remaining seconds converted to milliseconds)
      endTimeRef.current = Date.now() + time * 1000;
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };

  React.useEffect(() => {
    // Optimization:
    // Don't start an interval if the timer is paused or has no end time
    if (!isRunning && !endTimeRef.current) {
      endTimeRef.current = Date.now() + time * 1000;
    }

    // If not running, clear the ref so it can be recalculated on resume
    if (!isRunning) {
      endTimeRef.current = null;
      return; 
    }

    const tick = () => {
      // Calculate the difference between the target end time and the current system time
      const remainingMs = endTimeRef.current! - Date.now();

      // Convert MS back to seconds, rounding up to prevent premature zeroing
      const remainingSecs = Math.max(0, Math.ceil(remainingMs / 1000));

      if (remainingSecs <= 0) {
        // Auto-restart
        // logic: Reset the end time for a continuous loop
        endTimeRef.current = Date.now() + DURATION * 1000;
        setTime(DURATION);
      } else {
        // Update state with the accurately calculated remaining time
        setTime(remainingSecs);
      }
    };

    // Use a 1-second interval to check the time difference
    const interval = setInterval(tick, 1000);

    // Cleanup function: Prevents memory leaks by clearing the interval when the component unmounts or pauses
    return () => clearInterval(interval);
  }, [isRunning, time]);

  // Format the seconds into a human-readable MM:SS string
  const formatted = `${Math.floor(time / 60)}:${(time % 60)
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="col-span-12 md:col-span-5 bg-surface-container-high border-ghost rounded-lg p-10 flex flex-col justify-between h-125">
      <div>
        <span className="text-label-md uppercase text-on-surface-variant mb-4 block">
          Temporal Discipline
        </span>
        <h3 className="mb-4">Pomodoro Flow</h3>
        <p className="text-on-surface-variant leading-relaxed">
          Deep work facilitated by an unobtrusive temporal rhythm. Balance focus
          with deliberate rest.
        </p>
      </div>
      <div className="relative w-full h-48 flex-center mt-8">
        <div className="w-40 h-40 rounded-pill border border-outline/30 flex-center">
          <div
            onClick={toggleTimer}
            className="w-32 h-32 rounded-pill border-4 border-inverse-surface border-t-transparent flex-center cursor-pointer hover:-translate-y-0.5 transition-transform duration-300"
          >
            <span className="text-2xl text-primary select-none">
              {formatted}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
