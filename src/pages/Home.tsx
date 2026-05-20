import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Globe, Users, Target, ShieldCheck, Microscope, Cpu, Leaf, GraduationCap, Building2, LineChart, HeartHandshake, CloudRain, Lightbulb, Sprout, Landmark, Shield, Zap } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <SEO 
        title="Leading ESG Practices in Malaysia" 
        description="The Malaysia Institute of ESG (MiESG) empowers businesses through consulting, capacity building, and certification to adopt sustainable and globally competitive ESG practices."
        url="https://miesg.org.my/"
      />
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
              Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Sustainability</span>, <br className="hidden md:block" />
              Technology, Governance, <br className="hidden md:block" />
              and Human Development
            </h1>

            <p className="text-white/80 text-lg md:text-2xl font-medium tracking-wide max-w-4xl mx-auto leading-relaxed px-4">
              MiESG is a multidisciplinary institute advancing ESG leadership, digital innovation, sustainable development, and responsible governance across industries, communities, and future economies.
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
                  Connecting ESG, Communities, and Digital Innovation
                </h2>
                <div className="space-y-8 text-slate-600 text-lg md:text-xl leading-relaxed font-medium text-center lg:text-left">
                  <p>The Malaysia Institute of ESG (MiESG) sits at the intersection of sustainability transitions, integrated systems thinking, and technological empowerment. We align our focus with emerging ASEAN priorities including ISSB reporting, carbon markets, AI governance, green talent development, and just transition frameworks.</p>
                  <p>Rather than treating ESG as a generic compliance checklist, MiESG champions transition readiness, digital ESG systems, measurable impact, ethical AI, climate resilience, biodiversity, inclusive development, and practical ESG implementation for SMEs and communities.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.12)]">
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" className="w-full h-auto aspect-[4/5] object-cover" alt="MiESG Vision" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e28]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-2xl rounded-[2rem] border border-white/20 text-center md:text-left">
                   <p className="text-white text-2xl font-black mb-1 italic leading-tight">"Advancing ESG leadership across future economies."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors & Leadership Sections */}
      <section id="leadership" className="py-24 md:py-32 bg-slate-50 border-y border-slate-100 scroll-mt-24">
        <div className="container mx-auto px-6">
          {/* Advisors Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Patrons & Advisors</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a2e28] mb-8 tracking-tighter leading-none text-center">Global Advisory</h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium text-center">Guided by international experts driving forward sustainable development frameworks.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-24">
            {TEAM_MEMBERS.filter(m => m.role.toLowerCase().includes('advisor') || m.role.toLowerCase().includes('patron')).map((member, i) => (
              <div key={i} className="bg-white w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] xl:w-[calc(25%-1.5rem)] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100 flex flex-col">
                <div className="relative h-80 overflow-hidden shrink-0">
                  <Link to={`/leadership/${encodeURIComponent(member.name)}`} className="block w-full h-full">
                    <img src={member.image} alt={member.name} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${member.imagePosition || (member.name.includes('Vikneswaran') ? 'object-top' : 'object-center')}`} />
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

          <div className="text-center mb-16 max-w-3xl mx-auto pt-8 border-t border-slate-200">
            <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a2e28] mb-8 tracking-tighter leading-none text-center">Institutional Leadership</h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium text-center">Our board consists of recognized experts at the intersection of public policy and private governance.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {TEAM_MEMBERS.filter(m => !m.role.toLowerCase().includes('advisor') && !m.role.toLowerCase().includes('patron')).map((member, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100 flex flex-col">
                <div className="relative h-80 overflow-hidden shrink-0">
                  <Link to={`/leadership/${encodeURIComponent(member.name)}`} className="block w-full h-full">
                    <img src={member.image} alt={member.name} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${member.imagePosition || (member.name.includes('Vikneswaran') ? 'object-top' : 'object-center')}`} />
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
            <h2 className="text-4xl md:text-6xl font-black text-[#1a2e28] mb-8 tracking-tighter leading-none text-center">Interconnected Domains</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group hover:bg-[#1a2e28]">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-green-600 mb-6 shadow-sm group-hover:text-[#1a2e28]"><Globe size={28}/></div>
              <h3 className="text-xl font-black text-[#1a2e28] group-hover:text-white mb-3 leading-tight">Sustainable Tourism & Hospitality</h3>
              <p className="text-slate-600 group-hover:text-white/80 text-sm leading-relaxed">Reimagining destination management as a vital component of sustainable economic development.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group hover:bg-[#1a2e28]">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-green-600 mb-6 shadow-sm group-hover:text-[#1a2e28]"><ShieldCheck size={28}/></div>
              <h3 className="text-xl font-black text-[#1a2e28] group-hover:text-white mb-3 leading-tight">ESG & Corporate Governance</h3>
              <p className="text-slate-600 group-hover:text-white/80 text-sm leading-relaxed">Strengthening institutional accountability, ethical supply chains, and transparent reporting frameworks.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group hover:bg-[#1a2e28]">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-green-600 mb-6 shadow-sm group-hover:text-[#1a2e28]"><Building2 size={28}/></div>
              <h3 className="text-xl font-black text-[#1a2e28] group-hover:text-white mb-3 leading-tight">Smart Cities & Urban Sustainability</h3>
              <p className="text-slate-600 group-hover:text-white/80 text-sm leading-relaxed">Integrating ESG principles into urban planning, resilient infrastructure, and liveability.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group hover:bg-[#1a2e28]">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-green-600 mb-6 shadow-sm group-hover:text-[#1a2e28]"><CloudRain size={28}/></div>
              <h3 className="text-xl font-black text-[#1a2e28] group-hover:text-white mb-3 leading-tight">Climate Action & Carbon Transition</h3>
              <p className="text-slate-600 group-hover:text-white/80 text-sm leading-relaxed">Accelerating regional carbon reduction, nature-based solutions, and adaptation strategies.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group hover:bg-[#1a2e28]">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-green-600 mb-6 shadow-sm group-hover:text-[#1a2e28]"><Cpu size={28}/></div>
              <h3 className="text-xl font-black text-[#1a2e28] group-hover:text-white mb-3 leading-tight">AI, Digital Innovation & Analytics</h3>
              <p className="text-slate-600 group-hover:text-white/80 text-sm leading-relaxed">Leveraging data platforms and emerging tech to measure compliance and drive sustainable efficiency.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group hover:bg-[#1a2e28]">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-green-600 mb-6 shadow-sm group-hover:text-[#1a2e28]"><HeartHandshake size={28}/></div>
              <h3 className="text-xl font-black text-[#1a2e28] group-hover:text-white mb-3 leading-tight">Community & Social Inclusion</h3>
              <p className="text-slate-600 group-hover:text-white/80 text-sm leading-relaxed">Centring human development, equitable opportunities, and community empowerment in the transition.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group hover:bg-[#1a2e28]">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-green-600 mb-6 shadow-sm group-hover:text-[#1a2e28]"><LineChart size={28}/></div>
              <h3 className="text-xl font-black text-[#1a2e28] group-hover:text-white mb-3 leading-tight">Sustainable Finance & Investment</h3>
              <p className="text-slate-600 group-hover:text-white/80 text-sm leading-relaxed">Unlocking capital for green initiatives through structured standards and proven ESG impact metrics.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group hover:bg-[#1a2e28]">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-green-600 mb-6 shadow-sm group-hover:text-[#1a2e28]"><GraduationCap size={28}/></div>
              <h3 className="text-xl font-black text-[#1a2e28] group-hover:text-white mb-3 leading-tight">Education & Capacity Building</h3>
              <p className="text-slate-600 group-hover:text-white/80 text-sm leading-relaxed">Fostering top-tier ESG literacy and pragmatic skills among professionals and policymakers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why MiESG Matters */}
      <section className="py-24 md:py-32 bg-[#1a2e28] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-green-400 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Strategic Relevance</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Why Integrated ESG Matters</h2>
              <p className="text-white/80 text-xl leading-relaxed mb-8">
                In rapidly growing economies, ESG is no longer a siloed compliance exercise. It is a whole-of-economy agenda involving manufacturing, finance, technology, urban systems, energy, governance, education, healthcare, agriculture, and digital transformation.
              </p>
              <p className="text-white/80 text-xl leading-relaxed">
                MiESG bridges these domains, connecting environmental action, community resilience, technological innovation, and institutional accountability into cohesive, actionable frameworks.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                  <h4 className="text-xl font-black mb-3">Systemic Resilience</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Building capacity for industries and communities to adapt to climate and economic shocks.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                  <h4 className="text-xl font-black mb-3">Human-Centric Tech</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Driving ESG accountability and data integrity through ethical AI and digital systems.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                  <h4 className="text-xl font-black mb-3">Robust Governance</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Fostering transparent policies that align with global standards and local contexts.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                  <h4 className="text-xl font-black mb-3">Equitable Value</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Ensuring growth benefits society broadly via inclusive development and capital access.</p>
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
              "Policy & thought leadership platform",
              "Applied research & advisory centre",
              "Industry-academia collaboration hub",
              "Regional ASEAN ESG network",
              "ESG digital systems implementation",
              "Transition readiness & capacity building"
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
            <h2 className="text-4xl md:text-6xl font-black text-[#1a2e28] mb-8 tracking-tighter leading-tight">An Interconnected ESG Platform</h2>
            <p className="text-slate-600 text-xl md:text-2xl leading-relaxed mb-12">
              MiESG leverages its comparative advantage to seamlessly connect ESG with tourism, community development, digital innovation, and sustainability transitions — pioneering collaborative ecosystems across Malaysia and the ASEAN region.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 bg-[#1a2e28] text-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Ready to strengthen your ESG practice and regional impact?</h2>
            <p className="text-white/80 text-xl leading-relaxed">
              MiESG welcomes collaboration with policy makers, corporations, tech partners, and academic institutions seeking resilient and digitally-enabled sustainability solutions.
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
