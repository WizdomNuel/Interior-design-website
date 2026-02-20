import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { pageVariants } from './components/animVariants';

import React, { Suspense, lazy, useState, useEffect } from 'react';

const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  const location = useLocation();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Mark that initial load is complete after all content is mounted
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  return (
    <>
      <LoadingScreen isInitialLoad={isInitialLoad} />
      <motion.div 
        className="min-h-screen font-sans flex flex-col"
        style={{
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInitialLoad ? 0 : 1 }}
        transition={{ duration: 0.5, delay: isInitialLoad ? 0 : 0 }}
      >
        <Navbar />
        <main id="main" role="main" className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="enter"
              exit="exit"
              variants={pageVariants}
            >
              <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;