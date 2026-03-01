import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex items-center justify-center overflow-hidden bg-fdd-dark-bg"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-fdd-dark-bg/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover scale-105"
        />
      </motion.div>

      <div className="container relative z-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 flex flex-col items-center gap-4">
            <div className="h-16 w-[1px] bg-fdd-accent-primary/30"></div>
            <span className="text-fdd-dark-text-secondary text-xs font-bold tracking-[0.3em] uppercase">
              Eastern • Nigeria
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-fdd-dark-text-primary mb-8 leading-none tracking-tight">
            Curated <br/> <span className="italic font-light opacity-90">Elegance</span>
          </h1>

          <p className="max-w-md mx-auto text-fdd-dark-text-secondary text-sm md:text-base font-light leading-relaxed tracking-wide mb-12">
            We sculpt spaces that resonate with your identity. 
            A fusion of modern minimalism and timeless luxury.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              variant="white"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="text" 
              className="text-fdd-accent-primary border-fdd-accent-primary hover:text-fdd-accent-secondary hover:border-fdd-accent-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Conversation
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-fdd-dark-text-secondary/50 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2 block text-center">Scroll</span>
        <div className="w-[1px] h-12 bg-fdd-accent-primary/20 mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;