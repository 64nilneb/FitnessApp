import React, { useState } from 'react';
import { ArrowLeft, TrendingDown, TrendingUp, Target } from 'lucide-react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

interface HealthGoalProps {
  onNext: (goal: string) => void;
  onBack: () => void;
}

export function HealthGoal({ onNext, onBack }: HealthGoalProps) {
  const [selected, setSelected] = useState<string>('');
  
  const goals = [
    { 
      id: 'lose', 
      label: 'Lose Weight', 
      desc: 'Reduce body fat and achieve a healthy weight',
      icon: TrendingDown,
      color: 'text-blue-500',
    },
    { 
      id: 'maintain', 
      label: 'Maintain Weight', 
      desc: 'Keep your current weight and improve health',
      icon: Target,
      color: 'text-primary',
    },
    { 
      id: 'gain', 
      label: 'Gain Weight', 
      desc: 'Build muscle and increase body mass',
      icon: TrendingUp,
      color: 'text-orange-500',
    },
  ];
  
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="px-6 pt-16 pb-8">
        <button onClick={onBack} className="mb-6">
          <ArrowLeft size={24} />
        </button>
        
        <div className="mb-2">
          <span className="text-sm text-muted-foreground">Step 4 of 6</span>
        </div>
        <h1 className="text-3xl font-semibold mb-2">Your Health Goal</h1>
        <p className="text-muted-foreground">What would you like to achieve?</p>
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="space-y-3 mb-8">
          {goals.map((goal) => {
            const Icon = goal.icon;
            return (
              <Card
                key={goal.id}
                onClick={() => setSelected(goal.id)}
                hoverable
                className={`border-2 transition-all ${
                  selected === goal.id
                    ? 'border-primary bg-primary/5'
                    : 'border-transparent'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-${goal.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <Icon size={24} className={goal.color} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{goal.label}</h3>
                    <p className="text-sm text-muted-foreground">{goal.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
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
