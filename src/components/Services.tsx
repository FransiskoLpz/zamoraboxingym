import React from 'react';
import { Users2, Swords, Dumbbell, Baby } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: Users2,
    title: 'Group Classes',
    description: 'Join our energetic group sessions for all skill levels',
    price: '$99/month',
  },
  {
    icon: Swords,
    title: 'Private Training',
    description: 'One-on-one sessions tailored to your goals',
    price: '$75/session',
  },
  {
    icon: Dumbbell,
    title: 'Competition Prep',
    description: 'Specialized training for amateur and pro fighters',
    price: '$150/month',
  },
  {
    icon: Baby,
    title: 'Youth Program',
    description: 'Boxing fundamentals for ages 8-15',
    price: '$85/month',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="down">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} direction="up" delay={index * 0.2}>
              <div className="bg-black p-6 rounded-lg text-center">
                <service.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-red-600 font-bold text-lg">{service.price}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;