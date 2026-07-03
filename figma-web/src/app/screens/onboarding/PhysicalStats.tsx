import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

interface PhysicalStatsProps {
  onNext: (stats: { age: string; height: string; weight: string }) => void;
  onBack: () => void;
}

export function PhysicalStats({ onNext, onBack }: PhysicalStatsProps) {
  const [stats, setStats] = useState({
    age: '',
    height: '',
    weight: '',
  });
  
  const isValid = stats.age && stats.height && stats.weight;
  
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="px-6 pt-16 pb-8">
        <button onClick={onBack} className="mb-6">
          <ArrowLeft size={24} />
        </button>
        
        <div className="mb-2">
          <span className="text-sm text-muted-foreground">Step 2 of 6</span>
        </div>
        <h1 className="text-3xl font-semibold mb-2">Your Physical Stats</h1>
        <p className="text-muted-foreground">Help us calculate your needs accurately</p>
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="space-y-6 mb-8">
          <div>
            <Input
              label="Age"
              type="number"
              placeholder="25"
              value={stats.age}
              onChange={(e) => setStats({ ...stats, age: e.target.value })}
            />
            <p className="text-xs text-muted-foreground mt-2 ml-1">Years</p>
          </div>
          
          <div>
            <Input
              label="Height"
              type="number"
              placeholder="170"
              value={stats.height}
              onChange={(e) => setStats({ ...stats, height: e.target.value })}
            />
            <p className="text-xs text-muted-foreground mt-2 ml-1">Centimeters (cm)</p>
          </div>
          
          <div>
            <Input
              label="Current Weight"
              type="number"
              placeholder="70"
              value={stats.weight}
              onChange={(e) => setStats({ ...stats, weight: e.target.value })}
            />
            <p className="text-xs text-muted-foreground mt-2 ml-1">Kilograms (kg)</p>
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-8">
        <Button
          fullWidth
          size="lg"
          onClick={() => isValid && onNext(stats)}
          disabled={!isValid}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
