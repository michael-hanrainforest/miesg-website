import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, BookOpen, Loader2 } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const OrderForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData();

    // Map to Google Form entry IDs
    formData.append('entry.2008212585', publication?.title || '');
    formData.append('entry.1155374981', (form.elements.namedItem('fullName') as HTMLInputElement).value);
    formData.append('entry.138621851', (form.elements.namedItem('email') as HTMLInputElement).value);
    formData.append('entry.1450254780', (form.elements.namedItem('phone') as HTMLInputElement).value);
    formData.append('entry.176858254', (form.elements.namedItem('address') as HTMLTextAreaElement).value);
    formData.append('entry.831899638', (form.elements.namedItem('quantity') as HTMLInputElement).value);
    formData.append('entry.1039929485', (form.elements.namedItem('notes') as HTMLTextAreaElement).value);

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSeburrgaLYrnmSfm8FR0DGhW4AgFWXLbvU5jzq-kIGTRHUWgg/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });
      
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-40 md:pt-48 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link to={`/research/publications/${publication.id}`} className="inline-flex items-center gap-2 text-green-600 font-bold mb-12 hover:text-green-700 transition-colors uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Publication
        </Link>
        
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 p-8 md:p-16 relative">
          {isSubmitted ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a2e28] mb-6 tracking-tight">Order Request Received!</h2>
              <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in <strong>{publication.title}</strong>. Our team will contact you shortly via email or phone to arrange for payment and delivery.
              </p>
              <Link 
                to="/research" 
                className="inline-block bg-[#1a2e28] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#2d5a27] transition-all shadow-lg transform hover:-translate-y-1"
              >
                Return to Research
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl mb-6 text-[#1a2e28]">
                  <BookOpen size={32} />
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-[#1a2e28] mb-4 tracking-tight">Order Request</h1>
                <p className="text-slate-600 text-lg max-w-lg mx-auto">
                  You are requesting to order: <br/>
                  <strong className="text-[#1a2e28] mt-2 block">{publication.title}</strong>
                </p>
                {(publication.price || publication.orderNote) && (
                  <div className="mt-6 bg-slate-50 p-6 rounded-2xl max-w-lg mx-auto border border-slate-100 text-left">
                    {publication.price && (
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-500 font-medium">Price per set:</span>
                        <span className="text-xl font-black text-[#1a2e28]">{publication.price}</span>
                      </div>
                    )}
                    {publication.orderNote && (
                      <div className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-100 mt-3">
                        {publication.orderNote}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number (with country code) *</label>
                    <input type="tel" id="phone" name="phone" placeholder="e.g., +1 234-567-8900" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-bold text-slate-700 mb-2">Delivery Address *</label>
                  <textarea id="address" name="address" required rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-bold text-slate-700 mb-2">Quantity *</label>
                    <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" />
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-bold text-slate-700 mb-2">Additional Notes (Optional)</label>
                  <textarea id="notes" name="notes" rows={2} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="Any special instructions?"></textarea>
                </div>

                <div className="pt-8 border-t border-slate-100 mt-8">
                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#1a2e28] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-[#2d5a27] transition-all shadow-xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2">
                    {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Submitting...</> : 'Submit Order Request'}
                  </button>
                  <p className="text-center text-slate-500 text-sm mt-6 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    No payment is required now. Our team will contact you with payment instructions.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
