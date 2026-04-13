import React from "react";

function BentoGrid() {
  return (
    <section>
      <div className="grid-system grid-bento mb-24">
        {/* <!-- Bento Item 1: Notes Wireframe --> */}
        <div className="col-span-12 md:col-span-7 bg-surface-container border-ghost rounded-lg p-10 flex flex-col justify-between h-[500px]">
          <div>
            <span className="label-md uppercase tracking-[0.1em] text-on-surface-variant text-xs font-semibold mb-4 block">
              Refined Thought
            </span>
            <h3 className="serif-display text-3xl font-medium mb-4">
              Atomic Note-Taking
            </h3>
            <p className="text-on-surface-variant leading-relaxed max-w-md">
              Connect ideas through a non-linear network of knowledge. A canvas
              that adapts to your mental model.
            </p>
          </div>
          <div className="relative w-full h-56 bg-surface-container-lowest ghost-border rounded-sm overflow-hidden p-6 mt-8">
            <div className="flex gap-4">
              <div className="w-1/3 space-y-3">
                <div className="h-2 w-full bg-surface-variant rounded-full"></div>
                <div className="h-2 w-3/4 bg-surface-variant rounded-full opacity-60"></div>
                <div className="h-2 w-5/6 bg-surface-variant rounded-full opacity-40"></div>
              </div>
              <div className="w-2/3 h-40 bg-surface-container-low rounded-sm ghost-border p-4 space-y-4">
                <div className="h-4 w-1/2 bg-outline-variant opacity-20 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-outline-variant opacity-10 rounded-full"></div>
                  <div className="h-1.5 w-full bg-outline-variant opacity-10 rounded-full"></div>
                  <div className="h-1.5 w-4/5 bg-outline-variant opacity-10 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Bento Item 2: Pomodoro Wireframe --> */}
        <div className="col-span-12 md:col-span-5 bg-surface-container-high border-ghost rounded-lg p-10 flex flex-col justify-between h-[500px]">
          <div>
            <span className="label-md uppercase tracking-[0.1em] text-on-surface-variant text-xs font-semibold mb-4 block">
              Temporal Discipline
            </span>
            <h3 className="serif-display text-3xl font-medium mb-4">
              Pomodoro Flow
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Deep work facilitated by an unobtrusive temporal rhythm. Balance
              focus with deliberate rest.
            </p>
          </div>
          <div className="relative w-full h-48 flex items-center justify-center mt-8">
            <div className="w-40 h-40 rounded-full border border-primary/20 flex items-center justify-center">
              <div
                className="w-32 h-32 rounded-full border-4 border-primary border-t-transparent flex items-center justify-center cursor-pointer hover:-translate-y-0.5 transition-transform duration-300"
                id="pomodoro-timer"
              >
                <span
                  className="serif-display text-2xl text-primary select-none"
                  id="timer-display"
                >
                  25:00
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Bento Item 3: Time Block Wireframe --> */}
        <div className="col-span-12 md:col-span-4 bg-surface-container border-ghost rounded-lg p-8 h-80 flex flex-col justify-end">
          <div className="mb-6 h-full flex items-start">
            <div className="space-y-2 w-full">
              <div className="h-10 w-full bg-surface-container-lowest ghost-border rounded-sm flex items-center px-4">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <div className="h-2 w-20 bg-surface-variant rounded-full"></div>
              </div>
              <div className="h-10 w-full bg-surface-container-lowest ghost-border rounded-sm flex items-center px-4 opacity-50">
                <div className="w-2 h-2 rounded-full bg-outline-variant mr-3"></div>
                <div className="h-2 w-32 bg-surface-variant rounded-full"></div>
              </div>
            </div>
          </div>
          <h4 className="serif-display text-xl font-medium mb-2">
            Daily Architecture
          </h4>
          <p className="text-sm text-on-surface-variant">
            Structure your day around intent, not reaction.
          </p>
        </div>
        {/* <!-- Bento Item 4: Image/Abstract --> */}
        <div className="col-span-12 md:col-span-8 bg-surface-container-lowest border-ghost rounded-lg overflow-hidden h-80 relative">
          <img
            alt="Minimalist workspace"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_w4SbGkISmPiLRTWeYyLWeTotFfeh8rbBZ0qhDVOuJIjOiSOZg1i2p5oPbftbltbhYZEqIJX7N3tflcloJDrBhFbPAoNlJ5JEIv-639gYOqnLYewscRmYHWkv50Fea-wK5shRAOPhwOKGoZBn1Z08377OxoMvRiTaygv7TT7vXnghUFBGvS0c9p4HfwUVjgD7dDpP0fjvSXeKLdpvi5y-dk1-QZAl13qG48PE63GXZqvt9jnEzKpd1NqOqhiA3943vSG74vf4tK1W"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex flex-col justify-end p-8">
            <h4 className="serif-display text-2xl font-medium">
              The Sanctuary of Focus
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoGrid;

// <script>
//           const timerBtn = document.getElementById('pomodoro-timer');
//           const timerDisplay = document.getElementById('timer-display');
//           let ticking = false;
//           timerBtn.addEventListener('click', () => {
//               if(!ticking) {
//                   timerDisplay.innerText = '24:59';
//                   ticking = true;
//                   let sec = 59;
//                   const interval = setInterval(() => {
//                       sec--;
//                       if(sec < 0) {
//                           clearInterval(interval);
//                           ticking = false;
//                           return;
//                       }
//                       timerDisplay.innerText = `24:${sec < 10 ? '0'+sec : sec}`;
//                   }, 1000);
//               }
//           });
//       </script>
