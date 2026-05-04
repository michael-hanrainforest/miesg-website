import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_ITEMS } from '../data/news';

const Updates: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Organization News</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#1a2e28] tracking-tighter mb-6">Latest Updates</h1>
          <p className="text-xl text-slate-500 font-medium max-w-3xl">Catch up on the newest developments, events, and milestones from MiESG and our partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS_ITEMS.map((item) => (
            <Link key={item.id} to={`/updates/${item.id}`} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image.includes('view?usp=sharing') ? item.image.replace('file/d/', 'thumbnail?id=').replace('/view?usp=sharing', '&sz=w1000') : item.image}
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-3">
                  {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <h2 className="text-2xl font-black text-[#1a2e28] leading-tight mb-4 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-slate-500 line-clamp-3 mb-6">
                  {item.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="text-green-600 font-bold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read Story
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;
