import React from 'react';
import Section from '../components/Section';
import { Home, Briefcase, Ruler, Armchair, Lamp, Hammer, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Residential',
    description: 'Living spaces defined by comfort and sophisticated aesthetics.',
    icon: Home,
  },
  {
    id: '2',
    title: 'Commercial',
    description: 'High-performance workspaces that inspire creativity and focus.',
    icon: Briefcase,
  },
  {
    id: '3',
    title: 'Space Planning',
    description: 'Architectural layout optimization for flow and functionality.',
    icon: Ruler,
  },
  {
    id: '4',
    title: 'Furnishing',
    description: 'Curating bespoke furniture, art, and decor elements.',
    icon: Armchair,
  },
  {
    id: '5',
    title: 'Lighting',
    description: 'Sculpting space with layered ambient and task lighting.',
    icon: Lamp,
  },
  {
    id: '6',
    title: 'Renovation',
    description: 'Transforming dated structures into modern masterpieces.',
    icon: Hammer,
  },
];

const Services: React.FC = () => {
  return (
    <Section id="services" bgColor="offwhite">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
             <span className="text-stone-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Expertise</span>
             <h2 className="font-serif text-4xl text-stone-900">Holistic Design Solutions</h2>
          </div>
          <p className="text-stone-500 max-w-sm mt-6 md:mt-0 font-light text-sm leading-relaxed text-right">
            We offer end-to-end services, handling everything from the initial concept sketches to the final installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="group bg-white p-12 relative overflow-hidden hover:bg-stone-900 transition-colors duration-500 shadow-sm hover:shadow-lg"
            >
              <div className="mb-8 flex justify-between items-start">
                <service.icon size={28} strokeWidth={1} className="text-stone-900 group-hover:text-white transition-colors duration-500" />
                <ArrowUpRight size={20} className="text-stone-300 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0" />
              </div>
              
              <h3 className="font-serif text-2xl text-stone-900 group-hover:text-white transition-colors duration-500 mb-4">
                {service.title}
              </h3>
              
              <p className="text-stone-500 group-hover:text-stone-400 font-light text-sm leading-relaxed transition-colors duration-500">
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