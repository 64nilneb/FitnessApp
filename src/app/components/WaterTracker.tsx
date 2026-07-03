import React, { useState } from 'react';
import { Droplet, Plus, Minus, TrendingUp } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { motion } from 'motion/react';

export function WaterTracker() {
  const [glasses, setGlasses] = useState(6);
  const target = 8;
  
  const addGlass = () => {
    if (glasses < 12) setGlasses(glasses + 1);
  };
  
  const removeGlass = () => {
    if (glasses > 0) setGlasses(glasses - 1);
  };
  
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold mb-1">Water Intake</h3>
          <p className="text-sm text-muted-foreground">
            {glasses} / {target} glasses today
          </p>
        </div>
        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
          <Droplet size={24} className="text-blue-500" />
        </div>
      </div>
      
      {/* Water glasses visualization */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {Array.from({ length: target }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className={`w-10 h-14 rounded-lg border-2 transition-all relative overflow-hidden ${
              i < glasses ? 'border-blue-500 bg-blue-500/10' : 'border-secondary'
            }`}
          >
            {i < glasses && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="absolute bottom-0 left-0 right-0 bg-blue-500/30"
              />
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Controls */}
      <div className="flex items-center justify-between">
        <Button
          size="sm"
          variant="outline"
          onClick={removeGlass}
          disabled={glasses === 0}
        >
          <Minus size={16} />
        </Button>
        
        <div className="text-center">
          <div className="text-2xl font-semibold text-blue-500">{glasses * 250}ml</div>
          <div className="text-xs text-muted-foreground">Total consumed</div>
        </div>
        
        <Button
          size="sm"
          onClick={addGlass}
          disabled={glasses >= 12}
        >
          <Plus size={16} />
        </Button>
      </div>
      
      {glasses >= target && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-primary/10 rounded-xl flex items-center gap-2"
        >
          <TrendingUp size={16} className="text-primary" />
          <p className="text-sm text-primary font-medium">
            Great job! You've reached your daily water goal! 🎉
          </p>
        </motion.div>
      )}
    </Card>
  );
}
