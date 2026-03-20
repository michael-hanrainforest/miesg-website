import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLICATIONS } from '../constants';
import { BookOpen } from 'lucide-react';

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

      <section className="py-24 md:py-32 bg-slate-50 border-y border-slate-100 min-h-[50vh]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#1a2e28] mb-6 tracking-tighter">Publications</h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
              Explore our latest books, research reports, and case studies advancing the field of ESG.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {PUBLICATIONS.map((pub, index) => (
              <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col group">
                <Link to={`/research/publications/${pub.id}`} className="block relative aspect-[3/4] overflow-hidden bg-slate-100">
                  <img 
                    src={pub.image} 
                    alt={pub.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${pub.imagePosition || 'object-center'}`}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                    <BookOpen size={16} className="text-[#1a2e28]" />
                    <span className="text-xs font-black uppercase tracking-widest text-[#1a2e28]">{pub.type}</span>
                  </div>
                </Link>
                <div className="p-8 flex-1 flex flex-col">
                  <Link to={`/research/publications/${pub.id}`}>
                    <h3 className="text-2xl font-black text-[#1a2e28] mb-2 leading-tight group-hover:text-green-700 transition-colors">
                      {pub.title}
                    </h3>
                  </Link>
                  {pub.subtitle && (
                    <h4 className="text-sm font-bold text-green-700 mb-4 leading-snug">
                      {pub.subtitle}
                    </h4>
                  )}
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {pub.description}
                  </p>
                  <Link to={`/research/publications/${pub.id}`} className="w-full py-4 bg-slate-50 text-[#1a2e28] rounded-xl font-black uppercase tracking-widest text-sm hover:bg-[#1a2e28] hover:text-white transition-all border border-slate-200 hover:border-[#1a2e28] text-center block">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
