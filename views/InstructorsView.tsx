
import React from 'react';
import { Section } from '../components/Section';
import { INSTRUCTORS } from '../constants';

export const InstructorsView: React.FC = () => {
  return (
    <div className="pt-20">
      <Section className="min-h-screen">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter">
            Våre <span className="text-[#e34b17]">Instruktører</span>
          </h1>
          <div className="w-24 h-1 bg-[#e34b17] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {INSTRUCTORS.map((instructor) => (
            <div key={instructor.id} className="group relative bg-[#121212] border border-[#1a1a1a] hover:border-[#e34b17] transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#e34b17] text-white font-black text-sm uppercase py-1 px-3 skew-x-[-10deg] shadow-xl">
                  <span className="skew-x-[10deg] inline-block">{instructor.rank}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
              </div>

              <div className="p-8 relative">
                <div className="absolute -top-6 left-8 w-12 h-1 bg-[#e34b17] group-hover:w-full group-hover:left-0 transition-all duration-500" />
                <h3 className="text-2xl font-bold text-white uppercase mb-2">{instructor.name}</h3>
                <p className="text-gray-400 leading-relaxed text-sm mb-4 font-light">
                  {instructor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
