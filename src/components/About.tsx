import React from 'react';
import { Users2, Target, Trophy } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="down">
          <h2 className="text-4xl font-bold text-center mb-16">About Our Gym</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { Icon: Users2, title: 'Expert Trainers', desc: 'Learn from professional boxers with years of experience' },
            { Icon: Target, title: 'Focused Training', desc: 'Personalized programs to help you reach your goals' },
            { Icon: Trophy, title: 'Champion Mindset', desc: 'Develop discipline, confidence, and mental toughness' },
          ].map((item, index) => (
            <AnimatedSection key={item.title} direction="up" delay={index * 0.2}>
              <div className="text-center">
                <item.Icon className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;