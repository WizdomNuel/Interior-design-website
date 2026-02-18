import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../sections/Contact';
import { fadeUp } from '../components/animVariants';

const ContactPage: React.FC = () => (
	<motion.div initial="hidden" animate="show" exit="hidden" variants={fadeUp}>
		<Contact />
	</motion.div>
);

export default ContactPage;
