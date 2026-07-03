import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

interface DietaryPreferenceProps {
  onNext: (preference: string) => void;
  onBack: () => void;
}

export function DietaryPreference({ onNext, onBack }: DietaryPreferenceProps) {
  const [selected, setSelected] = useState<string>('');
  
  const preferences = [
    { id: 'none', label: 'No Preference', desc: 'Eat everything', icon: '🍽️' },
    { id: 'vegetarian', label: 'Vegetarian', desc: 'No meat or fish', icon: '🥗' },
    { id: 'vegan', label: 'Vegan', desc: 'No animal products', icon: '🌱' },
    { id: 'keto', label: 'Keto', desc: 'Low carb, high fat', icon: '🥑' },
    { id: 'paleo', label: 'Paleo', desc: 'Whole foods only', icon: '🥩' },
    { id: 'halal', label: 'Halal', desc: 'Islamic dietary laws', icon: '🕌' },
    { id: 'kosher', label: 'Kosher', desc: 'Jewish dietary laws', icon: '✡️' },
    { id: 'gluten-free', label: 'Gluten-Free', desc: 'No gluten', icon: '🌾' },
  ];
  
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="px-6 pt-16 pb-8">
        <button onClick={onBack} className="mb-6">
          <ArrowLeft size={24} />
        </button>
        
        <div className="mb-2">
          <span className="text-sm text-muted-foreground">Step 5 of 6</span>
        </div>
        <h1 className="text-3xl font-semibold mb-2">Dietary Preference</h1>
        <p className="text-muted-foreground">Choose your eating style</p>
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto pb-24">
        <div className="grid grid-cols-2 gap-3 mb-8">
          {preferences.map((pref) => (
            <Card
              key={pref.id}
              onClick={() => setSelected(pref.id)}
              hoverable
              className={`border-2 transition-all ${
                selected === pref.id
                  ? 'border-primary bg-primary/5'
                  : 'border-transparent'
              }`}
            >
              <div className="text-center">
                <span className="text-4xl block mb-2">{pref.icon}</span>
                <h3 className="font-medium text-sm mb-1">{pref.label}</h3>
                <p className="text-xs text-muted-foreground">{pref.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-6 py-4">
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
