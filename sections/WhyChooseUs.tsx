import React from 'react';
import Section from '../components/Section';
import { Award, Clock, Heart, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: PenTool,
    title: "Personalized Design",
    description: "Your space should tell your story. We tailor every texture, color, and layout to fit your unique lifestyle and preferences."
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "We source only the finest materials and furniture, ensuring that your interior looks premium and stands the test of time."
  },
  {
    icon: Heart,
    title: "Attention to Detail",
    description: "From the stitching on a cushion to the lighting ambience, we obsess over the small details that make a big difference."
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description: "We respect your time. Our project management ensures timely delivery without compromising on the quality of finish."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <Section id="why-us" bgColor="offwhite">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-fdd-dark-text-primary mb-6">Why Choose FDD?</h2>
          <p className="text-fdd-dark-text-secondary font-light text-lg">
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
              <h3 className="font-serif text-xl text-fdd-dark-text-primary mb-4">{feature.title}</h3>
              <p className="text-fdd-dark-text-secondary text-sm leading-relaxed font-light">
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