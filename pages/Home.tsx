import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import WhyChooseUs from '../sections/WhyChooseUs';
import CallToAction from '../sections/CallToAction';
import Contact from '../sections/Contact';
import { stagger, containerVariants, fadeUp, slideInLeft, slideInRight, scaleIn } from '../components/animVariants';

const Home: React.FC = () => {
  return (
    <motion.div initial="hidden" animate="show" variants={containerVariants}>
      <Hero />
      <motion.section variants={slideInLeft}>
        <About />
      </motion.section>
      <motion.section variants={fadeUp}>
        <Services />
      </motion.section>
      <motion.section variants={slideInRight}>
        <Portfolio />
      </motion.section>
      <motion.section variants={fadeUp}>
        <WhyChooseUs />
      </motion.section>
      <motion.section variants={scaleIn}>
        <CallToAction />
      </motion.section>
      <motion.section variants={slideInLeft}>
        <Contact />
      </motion.section>
    </motion.div>
  );
};

export default Home;
