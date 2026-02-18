import React from 'react';
import { motion } from 'framer-motion';
import About from '../sections/About';
import { fadeUp } from '../components/animVariants';

const AboutPage: React.FC = () => (
	<motion.div initial="hidden" animate="show" exit="hidden" variants={fadeUp}>
		<About />
	</motion.div>
);

export default AboutPage;
