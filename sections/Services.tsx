import React from 'react';
import Section from '../components/Section';
import { Home, Briefcase, Ruler, Armchair, Lamp, Hammer, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Residential Interior Design',
    description: 'Transform your living spaces into personalized sanctuaries of comfort and style.',
    icon: Home,
  },
  {
    id: '2',
    title: 'Commercial Ditto',
    description: 'Professional commercial spaces designed for productivity and brand impact.',
    icon: Briefcase,
  },
  {
    id: '3',
    title: 'Renovations and Building Facelift',
    description: 'Complete transformations that breathe new life into existing structures.',
    icon: Hammer,
  },
  {
    id: '4',
    title: 'Space Planning and 3D Designs',
    description: 'Strategic layout optimization with immersive 3D visualization.',
    icon: Ruler,
  },
  {
    id: '5',
    title: 'Furnishing',
    description: 'Curated furniture and decor solutions that complete your vision.',
    icon: Armchair,
  },
  {
    id: '6',
    title: 'Consultations',
    description: 'Expert guidance and design consultations for your unique needs.',
    icon: Lamp,
  },
];

const Services: React.FC = () => {
  return (
    <Section id="services" bgColor="dark">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
             <span className="text-fdd-dark-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Expertise</span>
             <h2 className="font-sohne font-bold text-4xl text-white">Holistic Design Solutions</h2>
          </div>
          <p className="text-white font-graphik max-w-sm mt-6 md:mt-0 font-light text-sm leading-relaxed text-right">
            We offer end-to-end services, handling everything from the initial concept sketches to the final installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-fdd-accent-primary border border-fdd-accent-primary">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="group bg-fdd-dark-surface p-12 relative overflow-hidden hover:bg-fdd-accent-primary transition-colors duration-500 shadow-sm hover:shadow-lg"
            >
              <div className="mb-8 flex justify-between items-start">
                <service.icon size={28} strokeWidth={1} className="text-fdd-accent-primary group-hover:text-fdd-dark-bg transition-colors duration-500" />
                <ArrowUpRight size={20} className="text-fdd-dark-text-secondary group-hover:text-fdd-dark-bg opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0" />
              </div>
              
              <h3 className="font-sohne font-semibold text-2xl text-white group-hover:text-fdd-dark-bg transition-colors duration-500 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 font-graphik group-hover:text-fdd-dark-bg font-light text-sm leading-relaxed transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;