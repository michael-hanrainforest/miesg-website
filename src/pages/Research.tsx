import React from 'react';

const Research: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="bg-[#1a2e28] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000" 
            alt="Research Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-green-400 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Research & Insights</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
            Applied Research
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Generating applied knowledge to help institutions and industry players understand, interpret and implement ESG in meaningful ways.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-slate-50 border-y border-slate-100 min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-black text-[#1a2e28] mb-4">Research Publications Coming Soon</h2>
          <p className="text-slate-600 text-lg">We are currently compiling our latest research reports and case studies.</p>
        </div>
      </section>
    </div>
  );
};

export default Research;
