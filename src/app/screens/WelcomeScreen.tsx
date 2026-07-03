import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Sparkles, TrendingUp, Apple } from 'lucide-react';
import { Button } from '../components/Button';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function WelcomeScreen({ onGetStarted, onLogin }: WelcomeScreenProps) {
  const features = [
    { icon: Sparkles, title: 'AI-Powered Insights', desc: 'Get personalized nutrition advice' },
    { icon: TrendingUp, title: 'Track Your Progress', desc: 'See your health journey unfold' },
    { icon: Apple, title: 'Smart Meal Plans', desc: 'Customized to your goals' },
  ];
  
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-cream-white to-white">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary to-emerald-600 rounded-[2rem] mb-8 shadow-xl"
        >
          <Leaf size={64} className="text-white" />
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-semibold text-center mb-3"
        >
          Welcome to NutriAI
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-muted-foreground text-center mb-12 max-w-sm"
        >
          Your journey to a healthier lifestyle starts here
        </motion.p>
        
        {/* Features */}
        <div className="w-full max-w-md space-y-4 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* CTA Buttons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="px-6 pb-12 space-y-3"
      >
        <Button fullWidth size="lg" onClick={onGetStarted}>
          Get Started
        </Button>
        <Button fullWidth size="lg" variant="outline" onClick={onLogin}>
          I Already Have an Account
        </Button>
      </motion.div>
    </div>
  );
}
