import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import WhyChooseUs from '../sections/WhyChooseUs';
import CallToAction from '../sections/CallToAction';
import Contact from '../sections/Contact';
import { stagger } from '../components/animVariants';

const Home: React.FC = () => {
  return (
    <motion.div initial="hidden" animate="show" variants={stagger}>
      <Hero />
      <motion.section variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
        <About />
      </motion.section>
      <motion.section variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.08 } } }}>
        <Services />
      </motion.section>
      <motion.section variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.16 } } }}>
        <Portfolio />
      </motion.section>
      <WhyChooseUs />
      <CallToAction />
      <Contact />
    </motion.div>
  );
};

export default Home;
