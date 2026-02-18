import React from 'react';
import { motion } from 'framer-motion';
import principalImg from '../assets/myimage.png';
import Section from '../components/Section';

const About: React.FC = () => {
  const values = [
    { title: 'Authenticity', text: 'We believe your space should be a reflection of your identity, not just a catalog copy. Every design is bespoke.' },
    { title: 'Craftsmanship', text: 'We collaborate with skilled local artisans in Anambra to create custom furniture and finishes that stand the test of time.' },
    { title: 'Harmony', text: 'Our designs balance functionality with aesthetics, ensuring that beauty never compromises the livability of your home.' }
  ];

  return (
    <Section id="about" bgColor="white" className="overflow-hidden">
      <div className="container px-6">
        
        {/* Intro Block */}
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 mb-32 items-start">
          <motion.div 
             className="w-full md:w-1/2"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
          >
            <span className="text-stone-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Since 2018</span>
            <h2 className="font-serif text-5xl md:text-6xl text-stone-900 mb-8 leading-[1.1]">
              Rooted in Awka,<br/> 
              Inspired by <span className="italic text-stone-500">Global Luxury.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex flex-col pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-stone-600 font-light text-lg leading-relaxed mb-6">
              Luxe Interiors was born from a desire to bring world-class interior design standards to Southeast Nigeria. 
              We noticed a gap between generic finishing and true spatial artistry.
            </p>
            <p className="text-stone-600 font-light text-lg leading-relaxed">
              Today, we are a multidisciplinary team of designers, architects, and project managers dedicated to 
              transforming the way people live and work in Anambra State. We don't just decorate; we curate lifestyles.
            </p>
          </motion.div>
        </div>

        {/* Founder Profile / Team Section */}
        <div className="relative mb-32">
           <div className="bg-stone-50 w-full md:w-3/4 ml-auto p-12 md:p-24 relative z-0">
              <div className="md:w-2/3 ml-auto">
                <h3 className="font-serif text-3xl text-stone-900 mb-6">Meet the Principal</h3>
                <p className="text-stone-600 font-light leading-relaxed mb-8 italic text-lg">
                  "I believe that true luxury is not about the price tag of the furniture, but about the feeling of ease, elegance, and peace that a well-designed space provides."
                </p>
                <div className="flex items-center gap-4">
                   <div className="h-[1px] w-12 bg-stone-900"></div>
                   <div>
                     <span className="block font-bold text-stone-900 uppercase tracking-widest text-sm">Chidimma Nwosu</span>
                     <span className="block text-stone-500 text-xs mt-1">Lead Interior Designer</span>
                   </div>
                </div>
              </div>
           </div>
           
           {/* Desktop Image */}
           <motion.div 
             className="absolute top-0 left-0 w-full md:w-1/3 h-64 md:h-full z-10 hidden md:block"
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <img 
                src={principalImg} 
                alt="Chidimma Nwosu - Lead Designer" 
                className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
           </motion.div>
           
           {/* Mobile Image */}
           <div className="md:hidden mt-8">
              <img 
                src={principalImg} 
                alt="Chidimma Nwosu - Lead Designer" 
                className="w-full aspect-square object-cover shadow-lg grayscale"
              />
           </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-stone-200 pt-16">
          {values.map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               whileHover={{ y: -6, scale: 1.01 }}
               whileTap={{ scale: 0.995 }}
               transition={{ delay: idx * 0.08, duration: 0.45 }}
               className="hover:shadow-lg"
             >
                <span className="text-stone-300 text-5xl font-serif mb-6 block opacity-50">0{idx + 1}</span>
                <h4 className="text-stone-900 font-bold uppercase tracking-widest text-sm mb-4">{item.title}</h4>
                <p className="text-stone-500 font-light text-sm leading-relaxed pr-4">{item.text}</p>
             </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default About;