import React, { FormEvent } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! In a real application, this would send your request to our server.');
  };

  return (
    <Section id="contact" bgColor="dark">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <span className="text-fdd-dark-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Get in Touch</span>
            <h2 className="font-serif text-5xl text-fdd-dark-text-primary mb-8 leading-tight">
              Let's create something <br/>
              <span className="italic text-fdd-accent-primary">exceptional.</span>
            </h2>
            
            <p className="text-fdd-dark-text-secondary font-light mb-16 text-lg max-w-md">
              We are currently accepting new residential and commercial projects.
            </p>

            <div className="grid gap-12">
              <div className="group">
                <h5 className="font-bold text-fdd-dark-text-primary uppercase tracking-[0.15em] text-xs mb-2 flex items-center gap-2">
                  <MapPin size={14} className="text-fdd-accent-primary" /> Visit Us
                </h5>
                <p className="text-fdd-dark-text-secondary font-light pl-6 border-l border-fdd-accent-primary group-hover:border-fdd-accent-secondary transition-colors pl-4">
                  12 Independence Layout,<br/> Awka, Anambra State
                </p>
              </div>

              <div className="group">
                <h5 className="font-bold text-fdd-dark-text-primary uppercase tracking-[0.15em] text-xs mb-2 flex items-center gap-2">
                  <Phone size={14} className="text-fdd-accent-primary" /> Call Us
                </h5>
                <p className="text-fdd-dark-text-secondary font-light pl-6 border-l border-fdd-accent-primary group-hover:border-fdd-accent-secondary transition-colors pl-4">
                  +234 800 123 4567
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-fdd-dark-surface p-12 lg:p-16">
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-transparent border-b border-fdd-dark-text-secondary py-4 focus:outline-none focus:border-fdd-accent-primary transition-colors text-fdd-dark-text-primary placeholder-transparent peer"
                  placeholder="John Doe"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-4 text-fdd-dark-text-secondary text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-fdd-accent-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-fdd-accent-primary cursor-text"
                >
                  Your Name
                </label>
              </div>
              
              <div className="relative group">
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  className="w-full bg-transparent border-b border-fdd-dark-text-secondary py-4 focus:outline-none focus:border-fdd-accent-primary transition-colors text-fdd-dark-text-primary placeholder-transparent peer"
                  placeholder="+234..."
                />
                <label 
                  htmlFor="phone" 
                  className="absolute left-0 top-4 text-fdd-dark-text-secondary text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-fdd-accent-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-fdd-accent-primary cursor-text"
                >
                  Phone Number
                </label>
              </div>

              <div className="relative group">
                <select 
                  id="service" 
                  className="w-full bg-transparent border-b border-fdd-dark-text-secondary py-4 focus:outline-none focus:border-fdd-accent-primary transition-colors text-fdd-dark-text-primary appearance-none rounded-none"
                >
                  <option className="bg-fdd-dark-bg text-fdd-dark-text-primary">Residential Project</option>
                  <option className="bg-fdd-dark-bg text-fdd-dark-text-primary">Commercial Space</option>
                  <option className="bg-fdd-dark-bg text-fdd-dark-text-primary">Renovation</option>
                  <option className="bg-fdd-dark-bg text-fdd-dark-text-primary">Consultation Only</option>
                </select>
                <label 
                  htmlFor="service" 
                  className="absolute left-0 -top-4 text-fdd-dark-text-primary text-xs font-bold"
                >
                  Interested In
                </label>
                <div className="absolute right-0 top-6 pointer-events-none">
                  <ArrowRight size={14} className="rotate-90 text-fdd-dark-text-secondary" />
                </div>
              </div>

              <div className="pt-8">
                <Button fullWidth type="submit" variant="primary">
                  Send Request
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Contact;