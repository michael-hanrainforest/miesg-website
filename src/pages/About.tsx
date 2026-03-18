import React from 'react';
import { Target, Compass, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="bg-[#1a2e28] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000" 
            alt="Nature Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-green-400 font-black tracking-[0.4em] uppercase text-xs mb-4 block">About Us</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
            About MiESG
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            The Malaysia Institute of ESG (MiESG) is an expert institute focused on the practical application of ESG within tourism and related sectors.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="relative overflow-hidden bg-[#1a2e28] p-12 md:p-16 rounded-[3rem] text-white shadow-2xl group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 blur-[80px] rounded-full group-hover:bg-green-500/30 transition-colors duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-10 border border-white/20">
                  <Compass size={40} className="text-green-400" />
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">Our Vision.</h2>
                <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-medium">
                  To be the leading institutional catalyst for sustainable, equitable, and resilient tourism and destination development across the region.
                </p>
              </div>
            </div>
            {/* Mission */}
            <div className="relative overflow-hidden bg-gradient-to-br from-green-400 to-emerald-600 p-12 md:p-16 rounded-[3rem] text-white shadow-2xl group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 blur-[80px] rounded-full group-hover:bg-white/30 transition-colors duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-10 border border-white/30">
                  <Target size={40} className="text-white" />
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">Our Mission.</h2>
                <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-medium">
                  To equip the tourism and hospitality sectors with the knowledge, frameworks, and partnerships necessary to integrate Environmental, Social, and Governance (ESG) principles into their core operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Methodology</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a2e28] mb-8 tracking-tighter leading-none">Our Approach</h2>
            <p className="text-slate-600 text-xl leading-relaxed">
              We believe that effective ESG implementation requires a balance of rigorous standards and practical, context-aware application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Evidence-Based', desc: 'Our strategies and recommendations are grounded in robust research and data analysis, ensuring that actions lead to measurable impact.' },
              { num: '02', title: 'Context-Sensitive', desc: 'We recognize that every destination and organization is unique. We tailor our approaches to fit local realities, cultural nuances, and specific operational challenges.' },
              { num: '03', title: 'Collaborative', desc: 'True sustainability cannot be achieved in isolation. We actively foster partnerships across public, private, and community sectors to drive systemic change.' }
            ].map((item, i) => (
              <div key={i} className="group relative bg-white p-10 md:p-12 rounded-[3rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden hover:-translate-y-2">
                <div className="absolute -right-6 -top-6 text-[120px] font-black text-slate-50 group-hover:text-green-50 transition-colors duration-500 leading-none select-none z-0">
                  {item.num}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#1a2e28] text-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-black">{item.num}</span>
                  </div>
                  <h3 className="text-3xl font-black text-[#1a2e28] mb-6 tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tourism? */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1000" 
                alt="Tourism Destination" 
                className="rounded-[3rem] shadow-2xl w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs block">Sector Focus</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#1a2e28] tracking-tighter leading-tight">
                Why Focus on Tourism?
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Tourism is a unique sector. It relies directly on the preservation of the very assets it utilizes—natural landscapes, cultural heritage, and vibrant communities. When managed poorly, it can lead to environmental degradation and social inequality.
                </p>
                <p>
                  However, when guided by strong ESG principles, tourism has the unparalleled potential to be a force for good. It can fund conservation efforts, revitalize local economies, preserve cultural traditions, and foster cross-cultural understanding.
                </p>
                <p>
                  MiESG focuses on tourism because it is a critical intersection of economic development and sustainability, requiring specialized, nuanced approaches that generic corporate ESG frameworks often miss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
