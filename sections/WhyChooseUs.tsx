import React from 'react';
import Section from '../components/Section';
import { Award, Clock, Heart, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: PenTool,
    title: "Industry-Informed Expertise",
    description: "With a background in export operations and business management, FDD understands structure, scale, and strategic execution."
  },
  {
    icon: Award,
    title: "Refined Client Experience",
    description: "From consultation to completion, clients experience clarity, professionalism, and seamless coordination."
  },
  {
    icon: Heart,
    title: "Detail-Driven Precision",
    description: "Every material, measurement, and finish is reviewed with uncompromising attention."
  },
  {
    icon: Clock,
    title: "Long-Term Value Creation",
    description: "Beyond aesthetics, we design spaces that appreciate in experience, function, and brand equity."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <Section id="why-us" bgColor="offwhite">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sohne font-bold text-3xl md:text-4xl text-fdd-light-text-primary dark:text-white mb-6">Why Choose FDD</h2>
          <p className="text-fdd-light-text-secondary dark:text-gray-600 font-graphik font-light text-lg">
            We bring a standard of excellence that transforms ordinary rooms into extraordinary living experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.995 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="bg-fdd-dark-surface p-8 text-center border-t-4 border-fdd-accent-primary hover:border-fdd-accent-secondary transition-colors duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fdd-accent-primary text-fdd-dark-bg mb-6">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-sohne font-semibold text-xl text-white mb-4">{feature.title}</h3>
              <p className="text-fdd-light-text-secondary dark:text-gray-600 font-graphik text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;