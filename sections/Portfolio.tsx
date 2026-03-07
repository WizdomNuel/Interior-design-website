import React, { useState } from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import available portfolio images
import portImage from '../assets/port.jpeg';
import port01Image from '../assets/port01.jpeg';
import port02Image from '../assets/port02.jpeg';
import port03Image from '../assets/port03.jpeg';
import port04Image from '../assets/port04.png';
import port05Image from '../assets/port05.png';
import port06Image from '../assets/port06.png';
import port07Image from '../assets/port07.png';
import servImage from '../assets/serv.png';


interface Image {
  src: string;
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Featured images for main portfolio section
  const featuredImages = [
    { src: port05Image, title: "Living room", description: "Spacious living room with luxury sofas and elegant decor"  },
    { src: servImage, title: "Dining Lounge", description: "Elegant lounge with premium and comfortable seating arrangement" },
    { src: port01Image, title: "Living room", description: "Modern living room with stylish sofas and contemporary furniture" },
    { src: port04Image, title: "Bedroom", description: "Luxurious bedroom with modern furniture and modern fixtures" },
    { src: portImage, title: "Living room", description: "Elegant living space with premium sofas and comfortable seating arrangement" },
    { src: port07Image, title: "Game room", description: "Entertainment and gaming lounge premium sofas and media setup" },
    { src: port06Image, title: "Pool Area", description: "Luxury poolside retreat with elegant landscaping" },
  ];

  // Complete gallery with available images
  const allImages = [
    { src: portImage, title: "Living room", description: "Elegant living space with premium sofas and comfortable seating arrangement" },
    { src: port01Image, title: "Living room", description: "Modern living room with stylish sofas and contemporary furniture" },
    { src: port02Image, title: "Living room", description: "Spacious living room with luxury sofas and elegant decor" },
    { src: port03Image, title: "Gourmet Kitchen Design", description: "State-of-the-art kitchen with high-end appliances and custom finishes" },
    { src: port04Image, title: "Spa Bathroom Retreat", description: "Luxurious bathroom with marble surfaces and modern fixtures" },
    { src: port05Image, title: "Outdoor Living Space", description: "Elegant patio area with seamless indoor-outdoor integration" },
    { src: port06Image, title: "Dining Room Elegance", description: "Formal dining space with custom furniture and ambient lighting" },
    { src: port07Image, title: "Living room", description: "Entertainment living space with premium sofas and media setup" },
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
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-sohne font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-xs font-graphik opacity-90 line-clamp-2">{image.description}</p>
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
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
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
