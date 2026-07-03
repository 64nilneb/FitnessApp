import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

interface ActivityLevelProps {
  onNext: (level: string) => void;
  onBack: () => void;
}

export function ActivityLevel({ onNext, onBack }: ActivityLevelProps) {
  const [selected, setSelected] = useState<string>('');
  
  const levels = [
    { id: 'sedentary', label: 'Sedentary', desc: 'Little or no exercise', icon: '🪑' },
    { id: 'light', label: 'Lightly Active', desc: 'Exercise 1-3 days/week', icon: '🚶' },
    { id: 'moderate', label: 'Moderately Active', desc: 'Exercise 3-5 days/week', icon: '🏃' },
    { id: 'very', label: 'Very Active', desc: 'Exercise 6-7 days/week', icon: '💪' },
    { id: 'extra', label: 'Extra Active', desc: 'Physical job + exercise', icon: '🔥' },
  ];
  
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="px-6 pt-16 pb-8">
        <button onClick={onBack} className="mb-6">
          <ArrowLeft size={24} />
        </button>
        
        <div className="mb-2">
          <span className="text-sm text-muted-foreground">Step 3 of 6</span>
        </div>
        <h1 className="text-3xl font-semibold mb-2">Activity Level</h1>
        <p className="text-muted-foreground">How active are you?</p>
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="space-y-3 mb-8">
          {levels.map((level) => (
            <Card
              key={level.id}
              onClick={() => setSelected(level.id)}
              hoverable
              className={`border-2 transition-all ${
                selected === level.id
                  ? 'border-primary bg-primary/5'
                  : 'border-transparent'
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{level.icon}</span>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{level.label}</h3>
                  <p className="text-sm text-muted-foreground">{level.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-8">
        <Button
          fullWidth
          size="lg"
          onClick={() => selected && onNext(selected)}
          disabled={!selected}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
