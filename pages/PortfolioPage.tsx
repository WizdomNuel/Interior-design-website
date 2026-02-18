import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../sections/Portfolio';
import { stagger, fadeUp } from '../components/animVariants';

const PortfolioPage: React.FC = () => (
	<motion.div initial="hidden" animate="show" exit="hidden" variants={stagger}>
		<motion.div variants={fadeUp}>
			<Portfolio />
		</motion.div>
	</motion.div>
);

export default PortfolioPage;
