import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

interface FoodAllergiesProps {
  onComplete: (allergies: string[]) => void;
  onBack: () => void;
}

export function FoodAllergies({ onComplete, onBack }: FoodAllergiesProps) {
  const [selected, setSelected] = useState<string[]>([]);
  
  const allergies = [
    { id: 'none', label: 'No Allergies', icon: '✅' },
    { id: 'dairy', label: 'Dairy', icon: '🥛' },
    { id: 'eggs', label: 'Eggs', icon: '🥚' },
    { id: 'nuts', label: 'Tree Nuts', icon: '🥜' },
    { id: 'peanuts', label: 'Peanuts', icon: '🥜' },
    { id: 'shellfish', label: 'Shellfish', icon: '🦐' },
    { id: 'fish', label: 'Fish', icon: '🐟' },
    { id: 'soy', label: 'Soy', icon: '🫘' },
    { id: 'wheat', label: 'Wheat', icon: '🌾' },
  ];
  
  const toggleAllergy = (id: string) => {
    if (id === 'none') {
      setSelected(['none']);
    } else {
      const filtered = selected.filter(s => s !== 'none');
      if (filtered.includes(id)) {
        setSelected(filtered.filter(s => s !== id));
      } else {
        setSelected([...filtered, id]);
      }
    }
  };
  
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="px-6 pt-16 pb-8">
        <button onClick={onBack} className="mb-6">
          <ArrowLeft size={24} />
        </button>
        
        <div className="mb-2">
          <span className="text-sm text-muted-foreground">Step 6 of 6</span>
        </div>
        <h1 className="text-3xl font-semibold mb-2">Food Allergies</h1>
        <p className="text-muted-foreground">Select all that apply (optional)</p>
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto pb-24">
        <div className="grid grid-cols-2 gap-3 mb-8">
          {allergies.map((allergy) => {
            const isSelected = selected.includes(allergy.id);
            return (
              <Card
                key={allergy.id}
                onClick={() => toggleAllergy(allergy.id)}
                hoverable
                className={`border-2 transition-all relative ${
                  isSelected
                    ? 'border-primary bg-primary/5'
                    : 'border-transparent'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                )}
                <div className="text-center pt-2">
                  <span className="text-4xl block mb-2">{allergy.icon}</span>
                  <h3 className="font-medium text-sm">{allergy.label}</h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-6 py-4">
        <Button
          fullWidth
          size="lg"
          onClick={() => onComplete(selected)}
        >
          Complete Setup
        </Button>
      </div>
    </div>
  );
}
