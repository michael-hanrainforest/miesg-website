import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const PublicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const publication = PUBLICATIONS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!publication) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-black text-[#1a2e28] mb-4">Publication Not Found</h2>
        <button 
          onClick={() => navigate('/research')}
          className="text-green-600 font-bold hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to Research
        </button>
      </div>
    );
  }

  return (
    <div className="pt-40 md:pt-48 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link to="/research" className="inline-flex items-center gap-2 text-green-600 font-bold mb-12 hover:text-green-700 transition-colors uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Research
        </Link>
        
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col">
          <div className="w-full relative bg-slate-100 flex items-center justify-center p-12 md:p-16">
            <img 
              src={publication.image} 
              alt={publication.title} 
              className="max-w-full max-h-[600px] object-contain shadow-2xl rounded-sm z-10" 
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm z-20">
              <BookOpen size={16} className="text-[#1a2e28]" />
              <span className="text-xs font-black uppercase tracking-widest text-[#1a2e28]">{publication.type}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e28]/5 to-transparent pointer-events-none"></div>
          </div>
          
          <div className="p-10 md:p-16 max-w-4xl mx-auto w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a2e28] mb-6 tracking-tight leading-tight text-center">{publication.title}</h1>
            {publication.subtitle && (
              <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-10 leading-snug text-center">
                {publication.subtitle}
              </h2>
            )}
            
            <div className="prose prose-lg prose-slate max-w-none mt-8">
              {publication.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-slate-600 leading-relaxed text-lg mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {publication.isForSale && (
              <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col items-center justify-center text-center">
                {publication.price && (
                  <div className="text-3xl font-black text-[#1a2e28] mb-2">{publication.price}</div>
                )}
                {publication.orderNote && (
                  <div className="text-sm font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-lg mb-8 max-w-md">
                    {publication.orderNote}
                  </div>
                )}
                <Link 
                  to={`/research/publications/${publication.id}/order`}
                  className="bg-[#1a2e28] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#2d5a27] transition-all shadow-xl transform hover:-translate-y-1 flex items-center gap-3 group"
                >
                  <BookOpen size={18} className="group-hover:scale-110 transition-transform" />
                  Order Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationDetail;
