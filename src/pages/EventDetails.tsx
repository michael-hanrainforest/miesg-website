import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar as CalendarIcon, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { UPCOMING_EVENTS } from '../data/events';

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = UPCOMING_EVENTS.find(e => e.id === Number(id));
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: ''
  });

  if (!event) {
    return (
      <div className="pt-32 md:pt-40 pb-24 min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Event Not Found</h2>
        <p className="text-slate-600 mb-8">The event you are looking for does not exist or has been removed.</p>
        <Link to="/events" className="bg-[#1a2e28] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2d5a27] transition-colors">
          Back to Events
        </Link>
      </div>
    );
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    setTimeout(() => {
      setIsRegistered(true);
    }, 500);
  };

  return (
    <div className="pt-32 md:pt-40 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/events" className="inline-flex items-center text-green-700 hover:text-green-800 font-semibold mb-8 group">
          <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Events
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[#1a2e28] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000" 
                alt="Event Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <span className="inline-block bg-green-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {event.type}
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                {event.title}
              </h1>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-white/90">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-green-400" />
                  <span className="font-medium">{format(parseISO(event.date), 'MMMM d, yyyy')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="font-medium">{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="font-medium">{event.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {event.image && (
              <div className="mb-12">
                <img 
                  src={event.image} 
                  alt={`${event.title} Poster`} 
                  className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg border border-slate-200"
                />
              </div>
            )}
            
            {event.images && event.images.length > 0 && (
              <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {event.images.map((img, i) => (
                  <img 
                    key={i}
                    src={img} 
                    alt={`${event.title} Poster ${i + 1}`} 
                    className="w-full h-auto rounded-2xl shadow-lg border border-slate-200 object-cover"
                  />
                ))}
              </div>
            )}

            <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Event</h2>
            <div className="prose prose-slate max-w-none mb-12">
              <div className="whitespace-pre-wrap text-lg text-slate-700 leading-relaxed">
                {event.fullDescription || event.description}
              </div>
            </div>

            {/* Registration Section */}
            {event.requiresRegistration && (
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Register for Event</h2>
                
                {event.registrationLink ? (
                  <div className="text-center">
                    <p className="text-slate-600 mb-6">Please register via Zoom to gain access to this FREE webinar.</p>
                    <a 
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#1a2e28] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#2d5a27] transition-colors"
                    >
                      Register on Zoom
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                ) : isRegistered ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-900 mb-2">Registration Successful!</h3>
                    <p className="text-green-700">
                      Thank you for registering. We have sent the event details to your email address.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-semibold text-slate-700 mb-1">Organization / Company</label>
                      <input 
                        type="text" 
                        id="organization" 
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                        placeholder="Your Organization"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-[#1a2e28] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#2d5a27] transition-colors flex items-center justify-center gap-2 mt-4"
                    >
                      Complete Registration
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
