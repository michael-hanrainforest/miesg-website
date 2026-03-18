import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Target, ShieldCheck, Microscope } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const Home: React.FC = () => {
  const featuredMember = TEAM_MEMBERS.find(m => m.role === 'President');
  const otherMembers = TEAM_MEMBERS.filter(m => m.role !== 'President');

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" 
            alt="Rainforest Background" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e28]/40 via-transparent to-[#1a2e28]/60"></div>
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="max-w-5xl mx-auto flex flex-col items-center space-y-12">
            
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] drop-shadow-2xl">
              Advancing <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">ESG</span> <br className="hidden md:block" />
              for Tourism, Hospitality <br className="hidden md:block" />
              and Destinations
            </h1>

            <p className="text-white/80 text-lg md:text-2xl font-medium tracking-wide max-w-4xl mx-auto leading-relaxed px-4">
              MiESG is a specialist institute committed to strengthening environmental, social and governance practice across tourism, hospitality, destination management and community-based development. We connect research, capacity building, advisory support and partnerships to help organisations move from sustainability ambition to practical action.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 pt-6 w-full sm:w-auto">
              <Link to="/services" className="w-full sm:w-auto bg-white text-[#1a2e28] px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-green-50 transition-all shadow-2xl flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                Explore Our Services <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto bg-transparent text-white border-2 border-white/30 px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all text-center backdrop-blur-sm">
                Partner With MiESG
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="w-full lg:w-1/2 space-y-12">
              <div>
                <span className="text-green-600 font-black tracking-[0.4em] uppercase text-xs mb-4 block text-center lg:text-left">Who We Are</span>
                <h2 className="text-4xl md:text-6xl font-black text-[#1a2e28] leading-[1.1] tracking-tighter mb-10 text-center lg:text-left">
                  A Specialist Institute with a Clear Sector Focus
                </h2>
                <div className="space-y-8 text-slate-600 text-lg md:text-xl leading-relaxed font-medium text-center lg:text-left">
                  <p>The Malaysia Institute of ESG (MiESG) is an expert institute focused on the practical application of ESG within tourism and related sectors. The institute was established to respond to the growing need for more sector-specific, people-centred and action-oriented sustainability approaches.</p>
                  <p>Rather than treating ESG as a generic corporate agenda, MiESG recognises that tourism requires a framework that is sensitive to destinations, communities, culture, biodiversity and long-term resilience.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.12)]">
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" className="w-full h-auto aspect-[4/5] object-cover" alt="MiESG Vision" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e28]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-2xl rounded-[2rem] border border-white/20 text-center md:text-left">
                   <p className="text-white text-2xl font-black mb-1 italic leading-tight">"Driving the regional ESG transition."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Leadership</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a2e28] mb-8 tracking-tighter leading-none text-center">Institutional Leadership</h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium text-center">Our board consists of recognized experts at the intersection of public policy and private governance.</p>
          </div>
          
          {featuredMember && (
            <div className="max-w-4xl mx-auto mb-20">
               <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row group transition-all duration-700 hover:shadow-2xl">
                  <div className="w-full md:w-2/5 h-96 md:h-auto overflow-hidden relative">
                     <Link to={`/leadership/${encodeURIComponent(featuredMember.name)}`}>
                       <img src={featuredMember.image} alt={featuredMember.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     </Link>
                     <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e28]/20 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="p-10 md:p-16 flex-1 flex flex-col justify-center">
                     <span className="text-green-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Leadership</span>
                     <Link to={`/leadership/${encodeURIComponent(featuredMember.name)}`}>
                       <h3 className="text-4xl md:text-5xl font-black text-[#1a2e28] mb-2 tracking-tight hover:text-green-600 transition-colors">{featuredMember.name}</h3>
                     </Link>
                     <p className="text-green-600 font-black text-lg uppercase mb-6 tracking-widest">{featuredMember.role}</p>
                     <p className="text-slate-500 text-lg leading-relaxed italic mb-8">"{featuredMember.bio}"</p>
                  </div>
               </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherMembers.map((member, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100 flex flex-col">
                <div className="relative h-80 overflow-hidden shrink-0">
                  <Link to={`/leadership/${encodeURIComponent(member.name)}`} className="block w-full h-full">
                    <img src={member.image} alt={member.name} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${member.name.includes('Vikneswaran') ? 'object-top' : 'object-center'}`} />
                  </Link>
                </div>
                <div className="p-8 flex-1 flex flex-col text-center sm:text-left">
                  <span className="text-green-600 font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">{member.specialty}</span>
                  <Link to={`/leadership/${encodeURIComponent(member.name)}`}>
                    <h3 className="text-2xl font-black text-[#1a2e28] leading-tight mb-2 hover:text-green-600 transition-colors">{member.name}</h3>
                  </Link>
                  <p className="text-slate-400 font-bold text-[10px] uppercase mb-4 tracking-wider">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed italic line-clamp-3">"{member.bio}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Focus On */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Focus Areas</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a2e28] mb-8 tracking-tighter leading-none text-center">What We Focus On</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 mb-8 shadow-sm"><Globe size={32}/></div>
              <h3 className="text-2xl font-black text-[#1a2e28] mb-4">Tourism and Hospitality</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Supporting tourism businesses, hospitality operators and service providers in integrating ESG principles into their strategies, operations and stakeholder engagement.</p>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 mb-8 shadow-sm"><Users size={32}/></div>
              <h3 className="text-2xl font-black text-[#1a2e28] mb-4">Destinations and Communities</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Promoting destination development models that strengthen local participation, shared value creation, social inclusion and environmental stewardship.</p>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 mb-8 shadow-sm"><Microscope size={32}/></div>
              <h3 className="text-2xl font-black text-[#1a2e28] mb-4">Research and Capacity Building</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Generating applied knowledge and delivering training that help institutions and industry players understand, interpret and implement ESG in meaningful ways.</p>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 mb-8 shadow-sm"><Target size={32}/></div>
              <h3 className="text-2xl font-black text-[#1a2e28] mb-4">Partnerships and Impact</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Building collaboration with government agencies, industry bodies, academic institutions and community organisations to expand the reach and relevance of ESG practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why MiESG Matters */}
      <section className="py-24 md:py-32 bg-[#1a2e28] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-green-400 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Why MiESG Matters</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Why ESG Matters in Tourism</h2>
              <p className="text-white/80 text-xl leading-relaxed mb-8">
                Tourism is closely tied to environmental quality, community wellbeing and institutional accountability. Poorly managed tourism can weaken destinations, while responsible tourism can create jobs, support conservation, strengthen cultural assets and improve local resilience.
              </p>
              <p className="text-white/80 text-xl leading-relaxed">
                MiESG exists to help stakeholders address this balance through practical, evidence-informed and context-sensitive ESG approaches.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                  <h4 className="text-xl font-black mb-3">Environmental Quality</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Protecting natural assets that form the foundation of tourism experiences.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                  <h4 className="text-xl font-black mb-3">Community Wellbeing</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Ensuring local populations benefit from and participate in tourism development.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                  <h4 className="text-xl font-black mb-3">Institutional Accountability</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Fostering transparent governance and ethical business practices.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                  <h4 className="text-xl font-black mb-3">Local Resilience</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Building capacity to withstand economic, social and environmental shocks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Work */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Our Core Work</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a2e28] mb-8 tracking-tighter leading-none">What We Do</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "ESG training and executive development",
              "Applied research and policy support",
              "Advisory services and implementation guidance",
              "Partnership development and collaborative initiatives",
              "Awareness, advocacy and stakeholder engagement",
              "Certification and validation support through relevant pathways"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                <div className="mt-1 w-3 h-3 rounded-full bg-green-500 shrink-0"></div>
                <p className="text-[#1a2e28] font-bold text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Featured</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a2e28] mb-8 tracking-tighter leading-tight">A Tourism-Centred ESG Platform</h2>
            <p className="text-slate-600 text-xl md:text-2xl leading-relaxed mb-12">
              MiESG brings together sustainability thinking, destination understanding and sector experience. Our work is especially relevant to ecotourism, community-based tourism, educational tourism, responsible hospitality and sustainable destination planning.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 bg-[#1a2e28] text-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Looking to strengthen ESG practice in tourism or destination development?</h2>
            <p className="text-white/80 text-xl leading-relaxed">
              MiESG welcomes collaboration with institutions, businesses, public agencies and community partners seeking relevant and credible sustainability solutions.
            </p>
            <div className="pt-8">
              <Link to="/contact" className="inline-block bg-white text-[#1a2e28] px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-green-50 transition-all shadow-2xl transform hover:-translate-y-1">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
