import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  parseISO,
  isAfter,
  startOfDay
} from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { UPCOMING_EVENTS } from '../data/events';

const Events: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const onDateClick = (day: Date) => setSelectedDate(day);

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-6">
        <button onClick={prevMonth} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-slate-600" />
        </button>
        <h2 className="text-2xl font-bold text-[#1a2e28]">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button onClick={nextMonth} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ChevronRight className="w-6 h-6 text-slate-600" />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EEEE";
    const days = [];
    let startDate = startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center font-semibold text-sm text-slate-500 py-3 uppercase tracking-wider" key={i}>
          {format(addDays(startDate, i), dateFormat).substring(0, 3)}
        </div>
      );
    }
    return <div className="grid grid-cols-7 border-b border-slate-200 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        
        // Check if day has events
        const dayEvents = UPCOMING_EVENTS.filter(e => isSameDay(parseISO(e.date), cloneDay));
        const hasEvents = dayEvents.length > 0;

        days.push(
          <div
            className={`min-h-[100px] p-2 border border-slate-100 transition-all cursor-pointer relative
              ${!isSameMonth(day, monthStart) ? "bg-slate-50 text-slate-400" : "bg-white text-slate-800 hover:bg-slate-50"}
              ${isSameDay(day, selectedDate) ? "ring-2 ring-inset ring-[#1a2e28] bg-green-50/30" : ""}
            `}
            key={day.toString()}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium
              ${isSameDay(day, new Date()) ? "bg-[#1a2e28] text-white" : ""}
            `}>
              {formattedDate}
            </span>
            
            {hasEvents && (
              <div className="mt-2 flex flex-col gap-1">
                {dayEvents.map(event => {
                  const isClickable = event.id === 2 || event.requiresRegistration;
                  return (
                    <div 
                      key={event.id} 
                      className={`text-xs px-2 py-1 rounded truncate font-medium ${isClickable ? 'bg-green-200 text-green-900 hover:bg-green-300' : 'bg-green-100 text-green-800'}`}
                      onClick={(e) => {
                        if (isClickable) {
                          e.stopPropagation();
                          navigate(`/events/${event.id}`);
                        }
                      }}
                    >
                      {event.title}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">{rows}</div>;
  };

  const selectedDayEvents = UPCOMING_EVENTS.filter(e => isSameDay(parseISO(e.date), selectedDate));
  const upcomingEvents = UPCOMING_EVENTS.filter(e => isAfter(parseISO(e.date), startOfDay(new Date()))).sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime());

  return (
    <div className="pt-32 pb-24">
      <section className="bg-[#1a2e28] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000" 
            alt="Events Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-green-400 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Events & Programs</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
            Upcoming Events
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join our workshops, seminars, and networking events to connect with industry leaders and advance your ESG knowledge.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Calendar View */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                {renderHeader()}
                {renderDays()}
                {renderCells()}
              </div>
            </div>

            {/* Sidebar - Selected Day & Upcoming */}
            <div className="space-y-8">
              {/* Selected Date Events */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-[#1a2e28] mb-6 flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-green-600" />
                  {format(selectedDate, 'MMMM d, yyyy')}
                </h3>
                
                {selectedDayEvents.length > 0 ? (
                  <div className="space-y-6">
                    {selectedDayEvents.map(event => {
                      const content = (
                        <div className="border-l-4 border-green-500 pl-4 py-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-green-600 mb-1 block">{event.type}</span>
                          <h4 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-green-700 transition-colors">{event.title}</h4>
                          <div className="space-y-2 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      );

                      if (event.id === 2 || event.requiresRegistration) {
                        return (
                          <Link key={event.id} to={`/events/${event.id}`} className="block group hover:bg-slate-50 p-2 -ml-2 rounded-lg transition-colors">
                            {content}
                          </Link>
                        );
                      }

                      return (
                        <div key={event.id} className="p-2 -ml-2">
                          {content}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-slate-500 italic">No events scheduled for this day.</p>
                )}
              </div>

              {/* All Upcoming Events List */}
              <div className="bg-[#1a2e28] p-6 md:p-8 rounded-2xl shadow-sm text-white">
                <h3 className="text-xl font-bold mb-6">All Upcoming Events</h3>
                <div className="space-y-6">
                  {upcomingEvents.slice(0, 4).map(event => {
                    const isClickable = event.id === 2 || event.requiresRegistration;
                    return (
                      <div key={event.id} className="group cursor-pointer" onClick={() => {
                        if (isClickable) {
                          navigate(`/events/${event.id}`);
                        } else {
                          setCurrentMonth(parseISO(event.date));
                          setSelectedDate(parseISO(event.date));
                        }
                      }}>
                        <div className="text-green-400 text-sm font-bold mb-1">
                          {format(parseISO(event.date), 'MMM d, yyyy')}
                        </div>
                        <h4 className="font-semibold text-white group-hover:text-green-300 transition-colors">
                          {event.title}
                        </h4>
                      </div>
                    );
                  })}
                  {upcomingEvents.length === 0 && (
                    <p className="text-white/60 italic">No upcoming events at the moment.</p>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
