import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-24 md:py-32 bg-slate-50">
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
                  href="mailto:hello@miesg.org" 
                  className="inline-flex flex-col md:flex-row items-center gap-4 bg-white text-[#1a2e28] px-10 py-6 rounded-3xl font-black text-2xl md:text-3xl hover:bg-green-50 transition-all shadow-2xl transform hover:-translate-y-1 group"
                >
                  <Mail size={32} className="text-green-600 group-hover:scale-110 transition-transform" />
                  hello@miesg.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
