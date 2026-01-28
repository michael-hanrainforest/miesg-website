
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Mail, 
  Globe, 
  Building2,
  Users,
  ChevronUp,
  Download,
  FileText,
  Linkedin,
  Calendar,
  Layers,
  Clock
} from 'lucide-react';
import { PILLARS, TEAM_MEMBERS, RESOURCES, ECOSYSTEM_PARTNERS } from './constants';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <img 
      src="logo.svg" 
      alt="MiESG Logo" 
      className={`object-contain block ${className}`}
      onError={(e) => {
        console.error("logo.svg failed to load. Please ensure it is in the root directory.");
        (e.target as HTMLImageElement).style.opacity = '0';
      }}
    />
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Team', href: '#team' },
    { name: 'Resources', href: '#resources' },
  ];

  const president = TEAM_MEMBERS.find(m => m.role === 'President');
  const otherOfficers = TEAM_MEMBERS.filter(m => m.role !== 'President');

  return (
    <div className="min-h-screen selection:bg-[#1a2e28] selection:text-white overflow-x-hidden bg-white font-['Inter']">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center">
            <Logo className="h-10 md:h-16" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-bold uppercase tracking-widest transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full ${isScrolled ? 'text-slate-600 hover:text-[#1a2e28]' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-[#1a2e28] text-white px-7 py-3 rounded-full text-sm font-black uppercase tracking-widest hover:bg-[#2d5a27] transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Connect
            </a>
          </nav>

          <button className="lg:hidden p-2 text-current focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-[#1a2e28]' : 'text-white'} size={32} />
            ) : (
              <Menu className={isScrolled ? 'text-[#1a2e28]' : 'text-white'} size={32} />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center p-8 space-y-8 animate-in fade-in slide-in-from-top duration-300">
            <button className="absolute top-6 right-6 p-2 text-[#1a2e28]" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={40} />
            </button>
            <Logo className="h-24 mb-12" />
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-4xl font-black text-[#1a2e28] uppercase tracking-tighter"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-8 bg-[#1a2e28] text-white w-full max-w-xs p-6 rounded-2xl text-center font-black uppercase tracking-widest text-xl shadow-2xl"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Connect
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" 
              alt="Rainforest Background" 
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e28]/40 via-transparent to-[#1a2e28]/60"></div>
          </div>
          <div className="container mx-auto px-6 z-10 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center space-y-12">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white text-xs md:text-sm font-black uppercase tracking-[0.2em]">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                National ESG Centre of Excellence
              </div>
              
              {/* Main Headline Brand Logo */}
              <div className="w-full flex justify-center transform hover:scale-[1.02] transition-transform duration-700">
                <Logo className="h-32 md:h-48 lg:h-64 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white/5 backdrop-blur-sm p-8 rounded-[3rem] border border-white/10" />
              </div>

              <p className="text-white/80 text-lg md:text-2xl font-medium tracking-wide max-w-2xl mx-auto leading-relaxed px-4">
                Advancing Malaysia’s sustainability transition through rigorous research, professional certification, and strategic policy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 pt-6 w-full sm:w-auto">
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="w-full sm:w-auto bg-white text-[#1a2e28] px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-green-50 transition-all shadow-2xl flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                  Our Mission <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#resources" onClick={(e) => scrollToSection(e, '#resources')} className="w-full sm:w-auto bg-transparent text-white border-2 border-white/30 px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all text-center backdrop-blur-sm">
                  Publications
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
              <div className="w-full lg:w-1/2 relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.12)]">
                  <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" className="w-full h-auto aspect-[4/5] object-cover" alt="MiESG Vision" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e28]/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-2xl rounded-[2rem] border border-white/20 text-center md:text-left">
                     <p className="text-white text-3xl font-black mb-1 italic leading-tight">"Driving the regional ESG transition."</p>
                     <p className="text-white/70 text-xs font-black uppercase tracking-[0.3em]">MiESG Institutional Mandate</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-12">
                <div>
                  <span className="text-green-600 font-black tracking-[0.4em] uppercase text-xs mb-4 block text-center lg:text-left">Institutional Profile</span>
                  <h2 className="text-5xl md:text-8xl font-black text-[#1a2e28] leading-[0.85] tracking-tighter mb-10 text-center lg:text-left">
                    Redefining <br/> <span className="text-slate-300 italic">Excellence.</span>
                  </h2>
                  <div className="space-y-8 text-slate-600 text-lg md:text-2xl leading-relaxed font-medium text-center lg:text-left">
                    <p>Establishing Malaysia as a regional leader in ESG by integrating elite research, professional education, and industry-standard certification.</p>
                    <p>We empower institutions to pivot from traditional operation to ESG-centric models that resonate on the global stage.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                  <div className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#1a2e28] mb-6 group-hover:bg-[#1a2e28] group-hover:text-white transition-all shadow-sm mx-auto lg:mx-0"><Globe size={28}/></div>
                    <h4 className="text-2xl font-black text-[#1a2e28] mb-3 tracking-tight text-center lg:text-left">Regional Impact</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium text-center lg:text-left">Setting cross-border sustainability benchmarks for SE Asia.</p>
                  </div>
                  <div className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#1a2e28] mb-6 group-hover:bg-[#1a2e28] group-hover:text-white transition-all shadow-sm mx-auto lg:mx-0"><Users size={28}/></div>
                    <h4 className="text-2xl font-black text-[#1a2e28] mb-3 tracking-tight text-center lg:text-left">Supply Talent</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium text-center lg:text-left">Providing specialized ESG literacy for boards and public agencies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="pillars" className="py-24 md:py-32 bg-[#1a2e28] text-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-24 text-center md:text-left mx-auto md:mx-0">
              <span className="text-green-400 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our DNA</span>
              <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none tracking-tighter">Strategic Pillars.</h2>
              <p className="text-white/50 text-xl md:text-2xl font-medium leading-relaxed">Defining the infrastructure of Malaysia’s sustainable future through four core mandates.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PILLARS.map(p => (
                <div key={p.id} className="group bg-white/[0.03] border border-white/10 rounded-[3.5rem] p-10 flex flex-col transition-all hover:bg-white/[0.07] hover:-translate-y-3 duration-500">
                  <div className="h-44 rounded-3xl overflow-hidden mb-12 border border-white/5 shadow-inner">
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" alt={p.title}/>
                  </div>
                  <div className="flex-1">
                    <span className="text-green-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block text-center sm:text-left">Pillar 0{p.id}</span>
                    <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight group-hover:text-green-400 transition-colors tracking-tight text-center sm:text-left">{p.title}</h3>
                    <ul className="space-y-5 mt-10 border-t border-white/5 pt-10">
                      {p.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-5 text-[15px] text-white/50 font-medium">
                          <div className="mt-2 w-2 h-2 rounded-full bg-green-500 shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Leadership</span>
              <h2 className="text-4xl md:text-7xl font-black text-[#1a2e28] mb-8 tracking-tighter leading-none text-center">Institutional Leadership.</h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium text-center">Our board consists of recognized experts at the intersection of public policy and private governance.</p>
            </div>
            
            {president && (
              <div className="max-w-4xl mx-auto mb-20">
                 <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row group transition-all duration-700 hover:shadow-green-900/10">
                    <div className="w-full md:w-2/5 h-96 md:h-auto overflow-hidden relative">
                       <img src={president.image} alt={president.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e28]/20 to-transparent"></div>
                    </div>
                    <div className="p-10 md:p-16 flex-1 flex flex-col justify-center">
                       <span className="text-green-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Organization Head</span>
                       <h3 className="text-4xl md:text-5xl font-black text-[#1a2e28] mb-2 tracking-tight">{president.name}</h3>
                       <p className="text-green-600 font-black text-lg uppercase mb-6 tracking-widest">{president.role}</p>
                       <p className="text-slate-500 text-lg leading-relaxed italic mb-8">"{president.bio}"</p>
                       <div className="flex items-center gap-4">
                          <a href="#" className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-xl text-[#1a2e28] hover:bg-[#1a2e28] hover:text-white transition-all shadow-sm"><Linkedin size={20}/></a>
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Professional Profile</span>
                       </div>
                    </div>
                 </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {otherOfficers.map((member, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col">
                  <div className="relative h-80 overflow-hidden shrink-0">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e28]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                        <a href="#" className="w-full bg-white text-[#1a2e28] py-4 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-2 shadow-xl tracking-widest">
                            <Linkedin size={18} /> Profile
                        </a>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col text-center sm:text-left">
                    <span className="text-green-600 font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">{member.specialty}</span>
                    <h3 className="text-2xl font-black text-[#1a2e28] leading-tight mb-2">{member.name}</h3>
                    <p className="text-slate-400 font-bold text-[10px] uppercase mb-4 tracking-wider">{member.role}</p>
                    <p className="text-slate-500 text-sm leading-relaxed italic line-clamp-3">"{member.bio}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-24 md:py-32 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16 text-center md:text-left mx-auto">
              <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block text-center">Knowledge Hub</span>
              <h2 className="text-4xl md:text-7xl font-black text-[#1a2e28] leading-none tracking-tighter mb-8 text-center">Publications.</h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium text-center">Access peer-reviewed research, policy frameworks, and academic journals driving the national ESG agenda.</p>
            </div>

            <div className="bg-slate-50 rounded-[4rem] p-12 md:p-24 border border-slate-100 flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden group max-w-5xl mx-auto">
               <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[100px] rounded-full group-hover:bg-green-500/10 transition-colors duration-1000"></div>
               <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-[#1a2e28] shadow-xl">
                  <Clock size={48} className="animate-pulse" />
               </div>
               <div className="space-y-4 max-w-xl">
                  <h3 className="text-3xl md:text-5xl font-black text-[#1a2e28] tracking-tight">Content Available Soon</h3>
               </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="bg-[#1a2e28] rounded-[4rem] shadow-2xl overflow-hidden relative p-12 md:p-24 text-center max-w-5xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/10 to-transparent"></div>
              <div className="relative z-10 space-y-12">
                <span className="text-green-400 font-black tracking-[0.4em] uppercase text-xs block">Contact MiESG</span>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">Let's Connect.</h2>
                <p className="text-white/60 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                  Join us in shaping the sustainable future of Southeast Asia. For all institutional inquiries and partnership requests, please contact us directly via email.
                </p>
                <div className="pt-8">
                  <a 
                    href="mailto:enquiry.miesg@gmail.com" 
                    className="inline-flex flex-col md:flex-row items-center gap-4 bg-white text-[#1a2e28] px-10 py-6 rounded-3xl font-black text-2xl md:text-3xl hover:bg-green-50 transition-all shadow-2xl transform hover:-translate-y-1 group"
                  >
                    <Mail size={32} className="text-green-600 group-hover:scale-110 transition-transform" />
                    enquiry.miesg@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
           <div className="flex flex-col items-center gap-6 mb-12">
              <div className="flex items-center justify-center h-16 w-auto">
                <Logo className="h-full" />
              </div>
              <div className="w-24 h-1 bg-[#1a2e28] rounded-full opacity-10"></div>
           </div>
           <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">© 2024 Malaysia Institute of ESG. All rights reserved.</p>
        </div>
      </footer>

      <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="fixed bottom-10 right-10 w-16 h-16 bg-[#1a2e28] text-white rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-2 transition-all z-40 active:scale-90">
        <ChevronUp size={32} />
      </button>
    </div>
  );
};

export default App;
