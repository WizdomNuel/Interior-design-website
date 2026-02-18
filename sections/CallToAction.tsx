import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <Section id="cta" bgColor="dark" className="text-center relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-stone-500 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
            Ready to Redefine Your Space?
          </h2>
          <p className="text-stone-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Book a consultation today and let us bring your vision to life with elegance and style.
          </p>
          <Button 
            variant="primary" 
            className="bg-white text-stone-900 hover:bg-stone-200 border-none px-10 py-4 text-base"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default CallToAction;