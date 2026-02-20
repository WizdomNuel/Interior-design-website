import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isInitialLoad: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isInitialLoad }) => {
  const [hideOverlay, setHideOverlay] = useState(false);

  useEffect(() => {
    if (!isInitialLoad) {
      // Hide overlay when loading is complete
      const timer = setTimeout(() => {
        setHideOverlay(true);
        const preload = document.getElementById('app-preload');
        if (preload) {
          preload.classList.add('hidden');
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  return (
    <>
      <AnimatePresence>
        {isInitialLoad && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ backgroundColor: 'var(--bg-primary)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Premium loading spinner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 border-2 rounded-full"
                style={{
                  borderColor: 'var(--text-secondary)',
                  borderTopColor: 'var(--accent-primary)',
                }}
              />

              {/* Loading text */}
              <motion.p
                className="text-sm font-light tracking-widest uppercase"
                style={{ color: 'var(--text-secondary)' }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoadingScreen;
