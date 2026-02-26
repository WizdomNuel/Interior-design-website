import React, { useState } from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

// Import all portfolio images
import serviceImage from '../assets/service.png';
import service1Image from '../assets/service1.png';
import service2Image from '../assets/service2.png';
import service3Image from '../assets/service3.jpeg';
import service4Image from '../assets/service4.jpeg';
import service5Image from '../assets/service5.jpeg';
import service0Image from '../assets/service0.jpeg';
import service01Image from '../assets/service01.jpeg';
import service02Image from '../assets/service02.jpeg';
import service06Image from '../assets/service06.jpeg';
import service07Image from '../assets/service07.jpeg';
import service08Image from '../assets/service08.jpeg';
import service09Image from '../assets/service09.jpeg';
import service10Image from '../assets/service10.jpeg';
import service11Image from '../assets/service11.jpeg';
import service12Image from '../assets/service12.jpeg';
import service13Image from '../assets/service13.jpeg';
import service14Image from '../assets/service14.jpeg';
import service15Image from '../assets/service15.jpeg';
import service16Image from '../assets/service16.jpeg';
import service17Image from '../assets/service17.jpeg';
import service18Image from '../assets/service18.jpeg';
import service19Image from '../assets/service19.jpeg';
import service20Image from '../assets/service20.jpeg';
import service21Image from '../assets/service21.jpeg';
import service22Image from '../assets/service22.jpeg';
import service23Image from '../assets/service23.jpeg';
import service24Image from '../assets/service24.jpeg';
import service25Image from '../assets/service25.jpeg';
import service26Image from '../assets/service26.jpeg';
import service27Image from '../assets/service27.jpeg';
import service28Image from '../assets/service28.jpeg';
import service29Image from '../assets/service29.jpeg';
import service30Image from '../assets/service30.jpeg';
import service31Image from '../assets/service31.jpeg';
import service32Image from '../assets/service32.jpeg';
import service33Image from '../assets/service33.jpeg';
import service34Image from '../assets/service34.jpeg';
import service35Image from '../assets/service35.jpeg';
import service36Image from '../assets/service36.jpeg';
import service37Image from '../assets/service37.jpeg';
import service38Image from '../assets/service38.jpeg';
import service39Image from '../assets/service39.jpeg';
import service40Image from '../assets/service40.jpeg';
import service41Image from '../assets/service41.jpeg';
import service42Image from '../assets/service42.jpeg';
import service43Image from '../assets/service43.jpeg';
import service44Image from '../assets/service44.jpeg';
import service45Image from '../assets/service45.jpeg';
import service46Image from '../assets/service46.jpeg';
import service47Image from '../assets/service47.jpeg';
import service48Image from '../assets/service48.jpeg';
import service49Image from '../assets/service49.jpeg';
import service50Image from '../assets/service50.jpeg';
import service51Image from '../assets/service51.jpeg';
import service52Image from '../assets/service52.jpeg';
import service53Image from '../assets/service53.jpeg';
import service54Image from '../assets/service54.jpeg';
import service55Image from '../assets/service55.jpeg';

interface Image {
  src: string;
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Featured images for main portfolio section
  const featuredImages = [
    { src: serviceImage, title: "Modern Kitchen", description: "Sleek white cabinetry with marble countertops and premium appliances" },
    { src: service1Image, title: "Luxury Master Bedroom", description: "Elegant retreat with sophisticated lighting and premium furnishings" },
    { src: service2Image, title: "Contemporary Bedroom", description: "Stylish seating area with modern decor and comfortable ambiance" },
    { src: service3Image, title: "Modern Living Room", description: "Elegant marble surfaces with contemporary fixtures and luxury finishes" },
    { src: service4Image, title: "Formal Dining Room", description: "Sophisticated dining space with elegant table and ambient lighting" },
    { src: service5Image, title: "Executive Waiting Room", description: "Professional workspace with ergonomic design and modern amenities" }
  ];

  // Complete gallery with all images
  const allImages = [
    { src: serviceImage, title: "Modern Living Room", description: "Professional luxury with premium finishes" },
    { src: service1Image, title: "Luxury Master Bedroom", description: "Elegant retreat with sophisticated lighting and premium furnishings" },
    { src: service2Image, title: "Contemporary Living Room", description: "Stylish seating area with modern decor and comfortable ambiance" },
    { src: service3Image, title: "Dining Room", description: "Elegant marble surfaces with contemporary fixtures and luxury finishes" },
    { src: service4Image, title: "Formal Dining Room", description: "Sophisticated dining space with elegant table and ambient lighting" },
    { src: service5Image, title: "Executive Home Office", description: "Professional workspace with ergonomic design and modern amenities" },
    { src: service0Image, title: "Contemporary Kitchen", description: "Sleek design with premium finishes" },
    { src: service01Image, title: "Luxury Dining Room", description: "Elegant space for formal entertaining" },
    { src: service02Image, title: "Modern Gym Room", description: "Spa-like retreat with premium fixtures" },
    { src: service06Image, title: "Executive Office", description: "Professional workspace with sophisticated design" },
    { src: service07Image, title: "Home Theater", description: "Entertainment space with premium acoustics" },
    { src: service08Image, title: "Walk-in Closet", description: "Luxury storage solutions with custom organization" },
    { src: service09Image, title: "Penthouse Living", description: "Urban luxury with panoramic views" },
    { src: service10Image, title: "Minimalist Bedroom", description: "Clean lines and serene atmosphere" },
    { src: service11Image, title: "Gourmet Kitchen", description: "Professional-grade appliances and custom design" },
    { src: service12Image, title: "Spa Bathroom", description: "Luxurious retreat with modern amenities" },
    { src: service13Image, title: "Contemporary Office", description: "Modern workspace with ergonomic solutions" },
    { src: service14Image, title: "Designer Entryway", description: "Impressive first impression with custom details" },
    { src: service15Image, title: "Luxury Lounge", description: "Comfortable seating with sophisticated styling" },
    { src: service16Image, title: "Modern Penthouse", description: "Contemporary design with urban elegance" },
    { src: service17Image, title: "Executive Suite", description: "Professional luxury with premium finishes" },
    { src: service18Image, title: "Custom Kitchen", description: "Tailored design with high-end appliances" },
    { src: service19Image, title: "Sophisticated Bedroom", description: "Elegant retreat with custom furnishings" },
    { src: service20Image, title: "Modern Living Space", description: "Contemporary design with functional layout" },
    { src: service21Image, title: "Luxury Bath", description: "Spa-inspired design with premium materials" },
    { src: service22Image, title: "Executive Conference Room", description: "Professional space with modern technology" },
    { src: service23Image, title: "Custom Library", description: "Elegant study with sophisticated storage" },
    { src: service24Image, title: "Designer Lounge", description: "Stylish entertainment space with modern amenities" },
    { src: service25Image, title: "Contemporary Suite", description: "Modern luxury with thoughtful details" },
    { src: service26Image, title: "Minimalist Office", description: "Clean workspace with efficient design" },
    { src: service27Image, title: "Luxury Kitchen", description: "Premium appliances and custom cabinetry" },
    { src: service28Image, title: "Modern Living Room", description: "Contemporary design with comfortable seating" },
    { src: service29Image, title: "Executive Penthouse", description: "Sophisticated urban living space" },
    { src: service30Image, title: "Designer Bedroom", description: "Luxurious retreat with custom furnishings" },
    { src: service31Image, title: "Modern Office Space", description: "Professional environment with modern design" },
    { src: service32Image, title: "Contemporary Kitchen", description: "Sleek design with functional layout" },
    { src: service33Image, title: "Luxury Living Area", description: "Elegant space with premium finishes" },
    { src: service34Image, title: "Designer Lounge", description: "Sophisticated entertainment space" },
    { src: service35Image, title: "Modern Bathroom", description: "Contemporary design with luxury fixtures" },
    { src: service36Image, title: "Executive Suite", description: "Professional luxury with modern amenities" },
    { src: service37Image, title: "Custom Living Space", description: "Tailored design with premium materials" },
    { src: service38Image, title: "Luxury Conference Room", description: "Professional space with elegant design" },
    { src: service39Image, title: "Modern Kitchen Design", description: "Contemporary style with high-end features" },
    { src: service40Image, title: "Designer Bedroom", description: "Luxurious retreat with sophisticated styling" },
    { src: service41Image, title: "Contemporary Office", description: "Modern workspace with elegant solutions" },
    { src: service42Image, title: "Executive Living Room", description: "Sophisticated space with premium furnishings" },
    { src: service43Image, title: "Luxury Kitchen Suite", description: "Professional-grade design with custom features" },
    { src: service44Image, title: "Modern Penthouse", description: "Contemporary urban luxury with panoramic views" },
    { src: service45Image, title: "Designer Dining Room", description: "Elegant space for sophisticated entertaining" },
    { src: service46Image, title: "Executive Lounge", description: "Professional space with modern amenities" },
    { src: service47Image, title: "Custom Bedroom Suite", description: "Luxurious retreat with personalized design" },
    { src: service48Image, title: "Modern Conference Space", description: "Professional environment with sophisticated styling" },
    { src: service49Image, title: "Luxury Living Suite", description: "Elegant space with premium furnishings" },
    { src: service50Image, title: "Contemporary Kitchen", description: "Modern design with high-end appliances" },
    { src: service51Image, title: "Designer Office", description: "Professional workspace with custom solutions" },
    { src: service52Image, title: "Executive Living Area", description: "Sophisticated space with modern design" },
    { src: service53Image, title: "Luxury Kitchen Design", description: "Premium appliances with custom cabinetry" },
    { src: service54Image, title: "Modern Bedroom Suite", description: "Contemporary retreat with elegant furnishings" },
    { src: service55Image, title: "Designer Conference Room", description: "Professional space with sophisticated amenities" }
  ];

  const images = featuredImages;

  return (
    <Section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sohne font-bold text-4xl md:text-5xl text-white mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl font-graphik text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our collection of meticulously designed spaces that blend functionality with aesthetic excellence.
          </p>
          <Link 
            to="/gallery"
            className="inline-flex items-center gap-3 text-gray-700 border-b border-gray-700 pb-1 text-sm uppercase tracking-[0.15em] hover:text-fdd-accent-primary transition-colors"
          >
            View Full Gallery <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-sohne font-semibold text-xl mb-2">{image.title}</h3>
                  <p className="text-sm font-graphik opacity-90">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="font-sohne font-bold text-2xl mb-2">{selectedImage.title}</h3>
                <p className="text-lg font-graphik opacity-90">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Section>
  );
};

export default Portfolio;
