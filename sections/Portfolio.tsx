import React, { useState } from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

interface Image {
  src: string;
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [images, setImages] = useState<Image[]>([
    { src: "/assets/service.png", title: "Modern Living Room", description: "Contemporary design with clean lines and neutral colors" },
    { src: "/assets/service1.png", title: "Luxury Kitchen", description: "High-end appliances and custom cabinetry" },
    { src: "/assets/service2.png", title: "Elegant Bedroom", description: "Serene retreat with premium furnishings" },
    { src: "/assets/service3.jpeg", title: "Sophisticated Bathroom", description: "Spa-like atmosphere with modern fixtures" },
    { src: "/assets/service4.jpeg", title: "Home Office", description: "Functional workspace with ergonomic design" },
    { src: "/assets/service5.jpeg", title: "Dining Room", description: "Elegant space for entertaining guests" }
  ]);

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

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
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our collection of meticulously designed spaces that blend functionality with aesthetic excellence.
          </p>
          <Button variant="text" className="inline-flex items-center gap-3 text-gray-700 border-b border-gray-700 pb-1 text-sm uppercase tracking-[0.15em]">
            View Full Gallery <ArrowRight size={14} />
          </Button>
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
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
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
                <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-lg opacity-90">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Section>
  );
};

export default Portfolio;
