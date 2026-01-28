
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Menu, 
  X, 
  Leaf, 
  ArrowRight, 
  Mail, 
  Globe, 
  ChevronRight,
  BookOpen,
  GraduationCap,
  Microscope,
  ShieldCheck,
  Target,
  Building2,
  Users,
  ChevronUp,
  Download,
  FileText,
  Linkedin,
  Info,
  Filter
} from 'lucide-react';
import { PILLARS, STRATEGIC_FOCUS, ECOSYSTEM_PARTNERS, LATEST_INSIGHTS, TEAM_MEMBERS, RESOURCES } from './constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Team', href: '#team' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[#1a2e28] shadow-inner overflow-hidden">
             <Leaf className="text-white w-6 h-6 md:w-7 md:h-7 z-10" />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2e28] to-[#2d5a27] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-xl md:text-2xl leading-none tracking-tighter ${isScrolled ? 'text-[#1a2e28]' : 'text-white'}`}>MiESG</span>
            <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>Malaysia Institute of ESG</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold uppercase tracking-widest transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full ${isScrolled ? 'text-slate-600 hover:text-[#1a2e28]' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-[#1a2e28] text-white px-7 py-3 rounded-full text-sm font-black uppercase tracking-widest hover:bg-[#2d5a27] transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Connect
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-[#1a2e28]' : 'text-white'} size={28} />
          ) : (
            <Menu className={isScrolled ? 'text-[#1a2e28]' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center p-8 space-y-8">
          <button className="absolute top-6 right-6 p-2 text-[#1a2e28]" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-4xl font-black text-[#1a2e28] uppercase tracking-tighter"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-8 bg-[#1a2e28] text-white w-full max-w-xs p-5 rounded-2xl text-center font-black uppercase tracking-widest text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" 
          alt="Rainforest Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Leading Sustainability in Malaysia
          </div>
          <h1 className="text-white text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-tight drop-shadow-2xl">
            ESG <span className="text-green-400">Excellence.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-medium tracking-wide max-w-2xl mx-auto leading-relaxed px-4">
            The national and regional centre of excellence for Environmental, Social, and Governance integration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            <a href="#about" className="w-full sm:w-auto bg-white text-[#1a2e28] px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-green-50 transition-all shadow-2xl">
              Explore Mission
            </a>
            <a href="#contact" className="w-full sm:w-auto bg-transparent text-white border-2 border-white/30 px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Leadership</span>
          <h2 className="text-4xl md:text-7xl font-black text-[#1a2e28] mb-8 tracking-tighter">Our Experts.</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Bridging academia and industry with a shared vision for a sustainable Malaysia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100">
              <div className="h-72 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-8">
                <p className="text-green-600 font-bold text-[10px] uppercase tracking-widest mb-1">{member.specialty}</p>
                <h3 className="text-xl font-black text-[#1a2e28] leading-tight mb-2">{member.name}</h3>
                <p className="text-slate-400 font-bold text-xs uppercase mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{member.bio}</p>
                <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                  <a href="#" className="text-[#1a2e28] hover:text-green-600"><Linkedin size={20}/></a>
                  <button className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-[#1a2e28] flex items-center gap-1">
                    Bio <ArrowRight size={12}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResourcesHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Research', 'Academic', 'Policy', 'Corporate'];

  const filteredResources = useMemo(() => {
    if (activeCategory === 'All') return RESOURCES;
    return RESOURCES.filter(r => r.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="resources" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Knowledge Repository</span>
            <h2 className="text-4xl md:text-7xl font-black text-[#1a2e28] leading-none tracking-tighter">Resources.</h2>
            <p className="text-slate-500 text-lg mt-6 font-medium">
              Download our latest research papers, frameworks, and academic journals.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-[#1a2e28] text-white shadow-lg' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#1a2e28] shadow-sm">
                <FileText size={32} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                   <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-md text-[9px] font-black uppercase tracking-tighter">{item.type}</span>
                </div>
                <h3 className="text-xl font-black text-[#1a2e28] mb-1 leading-tight">{item.title}</h3>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{item.date} • {item.size}</p>
              </div>
              <button className="w-full sm:w-auto p-4 bg-white text-[#1a2e28] rounded-2xl border border-slate-200 hover:bg-[#1a2e28] hover:text-white transition-all shadow-sm flex items-center justify-center gap-2 sm:gap-0">
                <span className="sm:hidden font-black uppercase text-xs">Download</span>
                <Download size={24} />
              </button>
            </div>
          ))}
          {filteredResources.length === 0 && (
            <div className="col-span-2 py-20 text-center text-slate-400 font-bold uppercase tracking-widest">
              No documents found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#1a2e28] selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-20">
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" className="w-full h-auto aspect-[4/5] object-cover" alt="Office" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e28]/40 to-transparent"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs block">Our Profile</span>
                <h2 className="text-4xl md:text-7xl font-black text-[#1a2e28] leading-[0.9] tracking-tighter">Pioneering <span className="text-slate-400">Responsible</span> Growth.</h2>
                <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                  <p>To position Malaysia as a regional leader in tourism-focused ESG by establishing a centre of excellence that integrates research, education, certification, and industry collaboration.</p>
                  <p>We are dedicated to building high-quality ESG talent, advancing responsible standards, and supporting evidence-based policy at the national level.</p>
                </div>
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-green-600"><p className="text-2xl font-black text-[#1a2e28]">Regional</p><p className="text-xs text-slate-400 font-bold uppercase">Leadership Position</p></div>
                  <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-[#1a2e28]"><p className="text-2xl font-black text-[#1a2e28]">Supply</p><p className="text-xs text-slate-400 font-bold uppercase">Competent Talent</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="pillars" className="py-24 md:py-32 bg-[#1a2e28] text-white">
          <div className="container mx-auto px-6 text-center md:text-left">
            <div className="max-w-3xl mb-20">
              <span className="text-green-400 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Strategic Core</span>
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter">Our Four Pillars.</h2>
              <p className="text-white/60 text-lg md:text-xl font-medium">Building a holistic ecosystem for national sustainability through integrated action.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {PILLARS.map(p => (
                <div key={p.id} className="group bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 transition-all hover:bg-white/[0.08]">
                  <div className="h-40 rounded-xl overflow-hidden mb-8"><img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={p.title}/></div>
                  <h3 className="text-xl font-black mb-4 leading-tight">{p.title}</h3>
                  <ul className="space-y-3 text-left">
                    {p.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[13px] text-white/60 font-medium">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></div>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TeamSection />
        <ResourcesHub />

        {/* Ecosystem */}
        <section id="ecosystem" className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-[#1a2e28] rounded-[3rem] p-10 md:p-24 text-white relative overflow-hidden text-center md:text-left">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-8xl font-black mb-12 tracking-tighter leading-none">Collaborative <span className="text-white/30">Network.</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {ECOSYSTEM_PARTNERS.map((p, i) => (
                    <div key={i} className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto md:mx-0"><Building2 size={24}/></div>
                      <h3 className="text-2xl font-black">{p.title}</h3>
                      <p className="text-white/50 text-base font-medium">{p.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-20 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <p className="text-2xl font-black">Ready to partner with us?</p>
                  <a href="#contact" className="bg-white text-[#1a2e28] px-12 py-5 rounded-full font-black uppercase text-sm tracking-widest shadow-xl">Join MiESG</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
              <div className="lg:w-2/5 bg-[#1a2e28] p-12 md:p-20 text-white">
                <h2 className="text-5xl font-black mb-10 tracking-tighter">Connect.</h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center"><Mail size={20}/></div>
                    <a href="mailto:enquiry.miesg@gmail.com" className="font-bold text-lg hover:text-green-400 break-all">enquiry.miesg@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center"><Globe size={20}/></div>
                    <span className="font-bold text-lg">www.miesg.org</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5 p-10 md:p-20">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input className="w-full bg-slate-50 p-4 rounded-xl font-bold outline-none border border-slate-100" placeholder="Your Name"/>
                    <input className="w-full bg-slate-50 p-4 rounded-xl font-bold outline-none border border-slate-100" placeholder="Email Address"/>
                  </div>
                  <input className="w-full bg-slate-50 p-4 rounded-xl font-bold outline-none border border-slate-100" placeholder="Organization"/>
                  <textarea rows={4} className="w-full bg-slate-50 p-4 rounded-xl font-bold outline-none border border-slate-100 resize-none" placeholder="Message"></textarea>
                  <button className="w-full bg-[#1a2e28] text-white py-5 rounded-xl font-black uppercase tracking-widest">Send Inquiry</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100 text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Leaf className="text-[#1a2e28]" size={24}/>
              <span className="text-[#1a2e28] font-black text-xl tracking-tighter">MiESG</span>
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">© 2024 Malaysia Institute of ESG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
