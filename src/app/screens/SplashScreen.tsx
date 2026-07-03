import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);
  
  return (
    <div className="h-full bg-gradient-to-br from-primary via-primary to-emerald-600 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-3xl mb-6"
        >
          <Leaf size={48} className="text-white" />
        </motion.div>
        
        <h1 className="text-4xl font-semibold text-white mb-2">NutriAI</h1>
        <p className="text-white/80 text-lg">Your Personal Nutrition Coach</p>
      </motion.div>
    </div>
  );
}
