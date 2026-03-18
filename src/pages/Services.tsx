import React from 'react';
import { PILLARS } from '../constants';
import { Layers, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="bg-[#1a2e28] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000" 
            alt="Services Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-green-400 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our Services</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
            Strategic Pillars
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our work is structured around four core pillars designed to drive comprehensive ESG integration across the tourism and hospitality sectors.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PILLARS.map((pillar, index) => (
              <div key={index} className="bg-white p-12 md:p-16 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center text-green-600 mb-10 group-hover:scale-110 transition-transform duration-500">
                  <Layers size={40} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-[#1a2e28] mb-6 tracking-tight">{pillar.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow">{pillar.description}</p>
                <div className="pt-8 border-t border-slate-100">
                  <a href="/contact" className="inline-flex items-center gap-2 text-green-600 font-black uppercase tracking-widest text-sm hover:text-[#1a2e28] transition-colors group/link">
                    Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#1a2e28] tracking-tighter leading-tight">Ready to transform your ESG strategy?</h2>
            <p className="text-slate-600 text-xl leading-relaxed">
              Whether you need comprehensive advisory, targeted training, or robust research, MiESG is equipped to support your journey.
            </p>
            <div className="pt-8">
              <a href="/contact" className="inline-block bg-[#1a2e28] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-green-700 transition-all shadow-2xl transform hover:-translate-y-1">
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
