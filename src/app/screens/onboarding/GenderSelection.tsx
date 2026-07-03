import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

interface GenderSelectionProps {
  onNext: (gender: string) => void;
  onBack: () => void;
}

export function GenderSelection({ onNext, onBack }: GenderSelectionProps) {
  const [selected, setSelected] = useState<string>('');
  
  const genders = [
    { id: 'male', label: 'Male', icon: '👨' },
    { id: 'female', label: 'Female', icon: '👩' },
    { id: 'other', label: 'Other', icon: '🧑' },
  ];
  
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="px-6 pt-16 pb-8">
        <button onClick={onBack} className="mb-6">
          <ArrowLeft size={24} />
        </button>
        
        <div className="mb-2">
          <span className="text-sm text-muted-foreground">Step 1 of 6</span>
        </div>
        <h1 className="text-3xl font-semibold mb-2">What's your gender?</h1>
        <p className="text-muted-foreground">This helps us personalize your experience</p>
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="space-y-3 mb-8">
          {genders.map((gender) => (
            <Card
              key={gender.id}
              onClick={() => setSelected(gender.id)}
              hoverable
              className={`border-2 transition-all ${
                selected === gender.id
                  ? 'border-primary bg-primary/5'
                  : 'border-transparent'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{gender.icon}</span>
                <span className="text-lg">{gender.label}</span>
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
