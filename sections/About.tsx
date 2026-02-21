import React from 'react';
import { motion } from 'framer-motion';
import principalImg from '../assets/img.jpeg';
import Section from '../components/Section';

const About: React.FC = () => {
  const values = [
    { title: 'Excellence Without Compromise', text: 'We approach every project with meticulous attention to detail, ensuring every finish, texture, and layout reflects refined craftsmanship.' },
    { title: 'Intentional Design', text: 'Every space is designed with purpose — aligned with the client’s lifestyle, identity, and long-term vision.' },
    { title: 'Integrity in Execution', text: 'Transparent processes, disciplined timelines, and responsible resource management define how we operate.' }
  ];

  return (
    <Section id="about" bgColor="dark" className="overflow-hidden">
      <div className="container px-6">
        
        {/* Intro Block */}
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 mb-32 items-start">
          <motion.div 
             className="w-full md:w-1/2"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
          >
            <span className="text-fdd-dark-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Since 2021</span>
            <h2 className="font-sohne font-bold text-5xl md:text-6xl text-fdd-dark-text-primary mb-8 leading-[1.1]">
              Rooted in Awka,<br/> 
              Inspired by <span className="italic text-fdd-accent-primary">Global Luxury.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex flex-col pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-fdd-dark-text-secondary font-graphik font-light text-lg leading-relaxed mb-6">
              FDD was born from a desire to bring world-class interior design standards to Southeast Nigeria. 
              We noticed a gap between generic finishing and true spatial artistry.
            </p>
            <p className="text-fdd-dark-text-secondary font-graphik font-light text-lg leading-relaxed">
              Today, we are a multidisciplinary team of designers, architects, and project managers dedicated to 
              transforming the way people live and work. We don't just decorate; we curate lifestyles.
            </p>
          </motion.div>
        </div>

        {/* Founder Profile / Team Section */}
        <div className="relative mb-32">
           <div className="bg-fdd-dark-surface w-full md:w-3/4 ml-auto p-12 md:p-24 relative z-0">
              <div className="md:w-2/3 ml-auto">
                <h3 className="font-sohne font-bold text-3xl text-fdd-dark-text-primary mb-6">Meet the Founder</h3>
                <p className="text-fdd-dark-text-secondary font-graphik font-light leading-relaxed mb-8 italic text-lg">
                  The vision for FDD was born in 2020 after Ms Frances attended a Kingdom Economic Summit at Love Ambassadors Ministries, Awka — a moment that became a personal calling to create refined, intentional spaces.

                  With over five years managing her father’s export business (2012 - 2018) and later running her own cleaning agency, she built strong operational and client experience, also learnt a lot about marketing and bookkeeping before fully stepping into premium interior design.
                </p>
                <div className="flex items-center gap-4">
                   <div className="h-[1px] w-12 bg-fdd-accent-primary"></div>
                   <div>
                     <span className="block font-sohne font-bold text-fdd-dark-text-primary uppercase tracking-widest text-sm">Ms Frances</span>
                     <span className="block font-graphik text-fdd-dark-text-secondary text-xs mt-1">Founder & Principal Designer</span>
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
                alt="Ms Frances Oluebube, Founder, FDD" 
                className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
           </motion.div>
           
           {/* Mobile Image */}
           <div className="md:hidden mt-8">
              <img 
                src={principalImg} 
                alt="Ms Frances Oluebube, Founder, FDD" 
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
                <span className="text-fdd-dark-text-secondary text-5xl font-serif mb-6 block opacity-50">0{idx + 1}</span>
                <h4 className="text-fdd-dark-text-primary font-serif font-bold text-xl mb-2 leading-tight">{item.title}</h4>
                <p className="text-fdd-dark-text-secondary font-light text-sm leading-relaxed pr-4">{item.text}</p>
             </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default About;