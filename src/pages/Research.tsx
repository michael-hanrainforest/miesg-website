import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PUBLICATIONS, RESEARCH_JOURNALS } from '../constants';
import { BookOpen, ExternalLink, FileText, Download, Eye, EyeOff } from 'lucide-react';
import { ResearchJournal } from '../types';

const JournalItem = ({ journal }: { journal: ResearchJournal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract ID from Google Drive URL
  const idMatch = journal.url.match(/\/d\/(.*?)\/view/);
  const driveId = idMatch ? idMatch[1] : '';
  const previewUrl = `https://drive.google.com/file/d/${driveId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveId}`;

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-6 flex-1">
          <div className="bg-white p-4 rounded-xl shadow-sm text-green-700 shrink-0">
            <FileText size={32} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1a2e28] leading-tight mb-2">
              {journal.title}
            </h3>
            <div className="mb-4">
              <span className="text-[#1a2e28] font-bold">{journal.author}</span>
              <p className="text-slate-600 text-sm mt-1">{journal.authorRole}</p>
            </div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest flex items-center gap-2">
              Technical & Discussion Paper
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 mt-4 md:mt-0">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#1a2e28] text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#2a4a40] transition-colors"
          >
            {isExpanded ? <EyeOff size={16} /> : <Eye size={16} />}
            {isExpanded ? 'Close' : 'Read'}
          </button>
          
          <a 
            href={downloadUrl}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#1a2e28] border border-slate-200 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-colors"
          >
            <Download size={16} />
          </a>
        </div>
      </div>

      {isExpanded && driveId && (
        <div className="border-t border-slate-200 bg-white">
          <iframe 
            src={previewUrl} 
            className="w-full h-[600px] md:h-[800px]" 
            allow="autoplay" 
            title={journal.title}
          />
        </div>
      )}
    </div>
  );
};

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

      {/* Technical and Discussion Papers Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#1a2e28] mb-6 tracking-tighter">Technical and Discussion Papers</h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
              Read our latest technical insights and thought-provoking discussion papers on ESG and sustainability.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {RESEARCH_JOURNALS.map((journal, index) => (
              <JournalItem key={index} journal={journal} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
