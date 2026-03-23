import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const slashVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: (i) => ({
      scaleX: 1,
      opacity: 1,
      transition: { 
        delay: 0.5 + (i * 0.15), 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }),
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0a0c10]"
        >
          <div className="relative flex flex-col items-center">
            {/* Claw Slash Animation */}
            <div className="relative w-64 h-32 mb-8 flex items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={slashVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute w-[120%] h-4 bg-[#FFCC00] shadow-[0_0_25px_rgba(255,204,0,0.6)]"
                  style={{
                    transform: `rotate(-35deg) translateY(${(i - 1) * 35}px)`,
                    clipPath: 'polygon(5% 0%, 100% 40%, 95% 100%, 0% 60%)'
                  }}
                />
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-7xl font-black text-white z-10 tracking-tighter mix-blend-difference"
              >
                PB<span className="text-[#FFCC00]">.</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="font-black text-[#FFCC00] tracking-[0.3em] uppercase text-xs"
            >
              Initializing Adamantium
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
