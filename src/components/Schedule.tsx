import React from 'react';
import AnimatedSection from './AnimatedSection';

const Schedule = () => {
  const schedule = [
    { day: 'Monday', classes: ['6:00 AM - Beginner Boxing', '12:00 PM - Advanced Training', '6:00 PM - HIIT Boxing'] },
    { day: 'Tuesday', classes: ['7:00 AM - Cardio Boxing', '4:00 PM - Youth Program', '7:00 PM - Technical Sparring'] },
    { day: 'Wednesday', classes: ['6:00 AM - Beginner Boxing', '12:00 PM - Advanced Training', '6:00 PM - HIIT Boxing'] },
    { day: 'Thursday', classes: ['7:00 AM - Cardio Boxing', '4:00 PM - Youth Program', '7:00 PM - Technical Sparring'] },
    { day: 'Friday', classes: ['6:00 AM - Open Gym', '12:00 PM - Advanced Training', '5:00 PM - Competition Prep'] },
    { day: 'Saturday', classes: ['9:00 AM - All Levels Boxing', '11:00 AM - Conditioning', '1:00 PM - Open Gym'] },
  ];

  return (
    <section id="schedule" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="down">
          <h2 className="text-4xl font-bold text-center mb-16">Class Schedule</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((day, index) => (
            <AnimatedSection key={day.day} direction="up" delay={index * 0.1}>
              <div className="bg-black p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-4 text-red-600">{day.day}</h3>
                <ul className="space-y-2">
                  {day.classes.map((classTime) => (
                    <li key={classTime} className="text-gray-300">{classTime}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;