import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Logo } from './Logo';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Research', href: '/research' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const headerBgClass = isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6';
  const linkTextClass = isScrolled || !isHomePage ? 'text-slate-600 hover:text-[#1a2e28]' : 'text-white/90 hover:text-white';
  const menuIconClass = isScrolled || !isHomePage ? 'text-[#1a2e28]' : 'text-white';

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#1a2e28] selection:text-white overflow-x-hidden bg-white font-['Inter']">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerBgClass}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className={`px-4 py-3 rounded-[1.2rem] transition-all duration-500 flex items-center justify-center ${(!isScrolled && isHomePage) ? 'bg-white/70 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
              <Logo className="h-20 md:h-24" />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-sm font-bold uppercase tracking-widest transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full ${location.pathname === link.href ? 'after:w-full' : ''} ${linkTextClass}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-[#1a2e28] text-white px-7 py-3 rounded-full text-sm font-black uppercase tracking-widest hover:bg-[#2d5a27] transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Partner With MiESG
            </Link>
          </nav>

          <button className="lg:hidden p-2 text-current focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={menuIconClass} size={32} />
            ) : (
              <Menu className={menuIconClass} size={32} />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center p-8 space-y-8 animate-in fade-in slide-in-from-top duration-300">
            <button className="absolute top-6 right-6 p-2 text-[#1a2e28]" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={40} />
            </button>
            <Logo className="h-32 mb-12" />
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-4xl font-black uppercase tracking-tighter ${location.pathname === link.href ? 'text-green-600' : 'text-[#1a2e28]'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="mt-8 bg-[#1a2e28] text-white w-full max-w-xs p-6 rounded-2xl text-center font-black uppercase tracking-widest text-xl shadow-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Partner With MiESG
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-slate-100 mt-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Logo className="h-16 mb-6" />
              <p className="text-slate-500 font-medium max-w-md leading-relaxed">
                MiESG is a specialist institute advancing ESG practice in tourism, hospitality, destinations and community-centred development.
              </p>
            </div>
            
            <div>
              <h4 className="font-black text-[#1a2e28] uppercase tracking-widest text-sm mb-6">Menu</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-slate-500 hover:text-green-600 font-medium transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-black text-[#1a2e28] uppercase tracking-widest text-sm mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li>enquiry.miesg@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
              © 2026 Malaysia Institute of ESG. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-600 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-green-600 transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>

      <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="fixed bottom-10 right-10 w-16 h-16 bg-[#1a2e28] text-white rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-2 transition-all z-40 active:scale-90">
        <ChevronUp size={32} />
      </button>
    </div>
  );
};

export default Layout;
