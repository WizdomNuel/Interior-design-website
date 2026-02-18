import React from 'react';
import { motion } from 'framer-motion';
import Services from '../sections/Services';
import { fadeUp } from '../components/animVariants';

const ServicesPage: React.FC = () => (
	<motion.div initial="hidden" animate="show" exit="hidden" variants={fadeUp}>
		<Services />
	</motion.div>
);

export default ServicesPage;
