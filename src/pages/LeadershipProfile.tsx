import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const LeadershipProfile: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  
  const member = TEAM_MEMBERS.find(m => m.name === decodeURIComponent(name || ''));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-black text-[#1a2e28] mb-4">Profile Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-green-600 font-bold hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-40 md:pt-48 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link to="/#leadership" className="inline-flex items-center gap-2 text-green-600 font-bold mb-12 hover:text-green-700 transition-colors uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Leadership
        </Link>
        
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-[500px] md:h-auto relative">
            <img 
              src={member.image} 
              alt={member.name} 
              className={`w-full h-full object-cover ${member.imagePosition || (member.name.includes('Vikneswaran') ? 'object-top' : 'object-center')}`} 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e28]/10 to-transparent pointer-events-none"></div>
          </div>
          
          <div className="p-10 md:p-16 flex-1 flex flex-col justify-center">
            <span className="text-green-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">{member.specialty}</span>
            <h1 className="text-4xl md:text-5xl font-black text-[#1a2e28] mb-2 tracking-tight">{member.name}</h1>
            <p className="text-slate-400 font-bold text-sm uppercase mb-8 tracking-widest">{member.role}</p>
            
            <div className="prose prose-lg prose-slate max-w-none">
              <div className="text-slate-600 leading-relaxed text-lg whitespace-pre-wrap">
                {member.bio}
              </div>
              {/* If we add fullBio later, we can render it here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipProfile;
