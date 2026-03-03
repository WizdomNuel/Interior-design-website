import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import available portfolio images
import servImage from '../assets/serv.png';
import serv0Image from '../assets/serv0.jpeg';
import serv01Image from '../assets/serv01.png';
import serv02Image from '../assets/serv02.png';
import serv03Image from '../assets/serv03.png';
import serv04Image from '../assets/serv04.png';
import serv05Image from '../assets/serv05.png';
import serv06Image from '../assets/serv06.png';
import serv07Image from '../assets/serv07.png';
import serv08Image from '../assets/serv08.jpeg';
import serv09Image from '../assets/serv09.jpeg';
import serv1Image from '../assets/serv1.jpeg';
import serv2Image from '../assets/serv2.jpeg';
import serv3Image from '../assets/serv3.jpeg';
import serv4Image from '../assets/serv4.jpeg';
import serv5Image from '../assets/serv5.jpeg';
import serv6Image from '../assets/serv6.jpeg';
import serv7Image from '../assets/ser7.jpeg';
import serv8Image from '../assets/serv8.jpeg';
import serv9Image from '../assets/serv9.jpeg';
import serv10Image from '../assets/serv10.jpeg';
import serv11Image from '../assets/serv11.jpeg';
import serv12Image from '../assets/serv12.jpeg';
import serv13Image from '../assets/serv13.jpeg';
import serv14Image from '../assets/serv14.jpeg';
import serv15Image from '../assets/serv15.jpeg';
import serv16Image from '../assets/serv16.jpeg';
import serv17Image from '../assets/serv17.jpeg';
import serv18Image from '../assets/serv18.jpeg';
import serv19Image from '../assets/serv19.jpeg';
import serv20Image from '../assets/serv20.jpeg';
import serv21Image from '../assets/serv21.jpeg';
import serv22Image from '../assets/serv22.jpeg';
import serv23Image from '../assets/serv23.jpeg';
import serv24Image from '../assets/serv24.jpeg';
import serv25Image from '../assets/serv25.jpeg';
import serv26Image from '../assets/serv26.jpeg';
import serv27Image from '../assets/serv27.jpeg';
import serv28Image from '../assets/serv28.jpeg';
import serv29Image from '../assets/serv29.jpeg';

interface Image {
  src: string;
  title: string;
  description: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Gallery with available images
  const allImages = [
    { src: servImage, title: "Dining Lounge", description: "Elegant lounge with premium and comfortable seating arrangement" },
    { src: serv0Image, title: "Living room", description: "Modern living room with stylish sofas and contemporary furniture" },
    { src: serv01Image, title: "Game room", description: "Entertainment and gaming lounge premium sofas and media setup" },
    { src: serv02Image, title: "Game room", description: "Entertainment and gaming lounge premium sofas and media setup" },
    { src: serv03Image, title: "Elegant pool space", description: "Luxury pool with custom furniture, ambient lighting and fresh water" },
    { src: serv04Image, title: "Living room", description: "Comfortable living room with premium sofas and sophisticated lighting" },
    { src: serv05Image, title: "Living room", description: "Elegant living space with designer sofas and modern furnishings" },
    { src: serv06Image, title: "Living room", description: "Luxurious living room with comfortable seating and stylish decor" },
    { src: serv07Image, title: "Bedroom", description: "Luxurious bedroom with modern furniture and modern fixtures" },
    { src: serv08Image, title: "Living room", description: "Sophisticated living space with premium sofas and elegant design"},
    { src: serv09Image, title: "Guest Suite", description: "Comfortable accommodation with premium amenities" },
    { src: serv1Image, title: "Living room", description: "Contemporary living room with modern sofas and stylish chairs" },
    { src: serv2Image, title: "Living room", description: "Sophisticated living space with premium sofas and elegant design" },
    { src: serv3Image, title: "Guest Suite", description: "Comfortable accommodation with premium amenities" },
    { src: serv4Image, title: "Living room", description: "Elegant living space with comfortable sofas and premium furnishings" },
    { src: serv5Image, title: "Game room", description: "Entertainment and gaming lounge premium sofas and media setup" },
    { src: serv6Image, title: "Sitting room", description: "Luxurious living space with stylish seating and elegant design" },
    { src: serv7Image, title: "Game room", description: "Entertainment and gaming lounge premium sofas and media setup" },
    { src: serv8Image, title: "Living room", description: "Elegant living space with comfortable sofas and premium furnishings" },
    { src: serv9Image, title: "Dining space", description: "Elegant dining area with premium furniture and sophisticated lighting" },
    { src: serv10Image, title: "Dining space", description: "Spacious dining area with elegant tables and premium seating" },
    { src: serv11Image, title: "Living room", description: "Stylish living space with premium sofas and sophisticated design" },
    { src: serv12Image, title: "Living room", description: "Elegant living room with comfortable seating and luxury decor" },
    { src: serv13Image, title: "Living room", description: "Spacious living room with elegant sofas and modern furnishings" },
    { src: serv14Image, title: "Living room", description: "Entertainment space with panoramic views and luxury amenities" },
    { src: serv15Image, title: "Living room", description: "Elegant living room with comfortable seating and luxury decor" },
    { src: serv16Image, title: "Living room", description: "Elegant living room with comfortable seating and luxury decor" },
    { src: serv17Image, title: "Living room", description: "Entertainment living space with premium sofas and media setup" },
    { src: serv18Image, title: "Living room", description: "Elegant living room with comfortable seating and luxury decor" },
    { src: serv19Image, title: "Living room", description: "Recreational living space with comfortable sofas and entertainment systems" },
    { src: serv20Image, title: "Sunroom", description: "Bright space with natural light and comfortable relaxation areas" },
    { src: serv21Image, title: "Living room", description: "Cozy living area with elegant seating and natural light" },
    { src: serv22Image, title: "Visitors lounge", description: "Elegant space for guests with comfortable seating and sophisticated design" },
    { src: serv23Image, title: "Craft Room", description: "Creative workspace with organized storage and ample lighting" },
    { src: serv24Image, title: "Sitting room", description: "Cozy sitting area with comfortable seating and elegant design" },
    { src: serv25Image, title: "Pantry", description: "Organized storage space with custom shelving and premium finishes" },
    { src: serv26Image, title: "Living room", description: "Transformed living space with luxury finishes and comfortable seating" },
    { src: serv27Image, title: "Living room", description: "Transformed living space with luxury finishes and comfortable seating" },
    { src: serv28Image, title: "Living room", description: "Transformed living space with luxury finishes and comfortable seating" },
    { src: serv29Image, title: "Living room", description: "Transformed living space with luxury finishes and comfortable seating" },
  ];

  return (
    <div className="min-h-screen bg-fdd-dark-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Link 
            to="/portfolio"
            className="inline-flex items-center gap-2 text-fdd-accent-primary hover:text-fdd-accent-secondary mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          
          <h1 className="font-sohne font-bold text-4xl md:text-5xl text-white mb-6">
            Complete Gallery
          </h1>
          <p className="text-xl font-graphik text-gray-400 max-w-3xl mx-auto">
            Explore our complete collection of interior design projects showcasing luxury spaces and sophisticated craftsmanship.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
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
    </div>
  );
};

export default Gallery;
