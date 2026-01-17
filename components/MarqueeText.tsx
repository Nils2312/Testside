import React from 'react';

export const MarqueeText: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden z-10 border-t border-white/5">
      <div className="flex justify-start opacity-5 select-none pointer-events-none">
         <span className="text-[15vw] font-black uppercase text-white whitespace-nowrap -translate-x-12 tracking-tighter">
           JU JITSU NORGE
         </span>
      </div>
    </section>
  );
};