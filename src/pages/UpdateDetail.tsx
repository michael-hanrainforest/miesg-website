import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NEWS_ITEMS } from '../data/news';

const UpdateDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = NEWS_ITEMS.find((n) => n.id === Number(id));

  if (!article) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Article Not Found</h2>
        <Link to="/updates" className="text-green-600 hover:text-green-700 font-bold">
          &larr; Back to Updates
        </Link>
      </div>
    );
  }

  const imageUrl = article.image.includes('view?usp=sharing') 
    ? article.image.replace('file/d/', 'thumbnail?id=').replace('/view?usp=sharing', '&sz=w1000') 
    : article.image;

  return (
    <div className="pt-40 lg:pt-48 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/updates" className="inline-flex items-center gap-2 text-green-600 font-bold uppercase tracking-widest text-sm mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={16} /> Back to Updates
        </Link>

        <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block">
          {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>

        <h1 className="text-4xl md:text-6xl font-black text-[#1a2e28] tracking-tighter mb-12 leading-tight">
          {article.title}
        </h1>

        <div className="rounded-[2.5rem] overflow-hidden mb-16 shadow-xl border border-slate-100">
          <img 
            src={imageUrl} 
            alt={article.title} 
            className="w-full h-auto object-cover max-h-[600px]"
          />
        </div>

        <div className="prose prose-lg md:prose-xl prose-slate max-w-none font-medium leading-relaxed">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateDetail;
