import React, { useState } from 'react';
import { Calendar, ChevronRight, RefreshCw, Download, ArrowLeft } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export function DietPlanScreen() {
  const [selectedDay, setSelectedDay] = useState('monday');
  
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const fullDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  
  const todayPlan = {
    breakfast: [
      { name: 'Oatmeal with Berries', calories: 320, protein: 12, carbs: 54, fat: 6 },
      { name: 'Greek Yogurt', calories: 100, protein: 17, carbs: 6, fat: 0.7 },
    ],
    lunch: [
      { name: 'Grilled Chicken Salad', calories: 380, protein: 42, carbs: 18, fat: 14 },
      { name: 'Quinoa', calories: 120, protein: 4, carbs: 21, fat: 2 },
    ],
    dinner: [
      { name: 'Baked Salmon', calories: 280, protein: 34, carbs: 0, fat: 15 },
      { name: 'Roasted Vegetables', calories: 110, protein: 3, carbs: 20, fat: 3 },
      { name: 'Brown Rice', calories: 140, protein: 3, carbs: 28, fat: 1 },
    ],
    snacks: [
      { name: 'Apple with Almond Butter', calories: 190, protein: 4, carbs: 24, fat: 8 },
      { name: 'Protein Shake', calories: 150, protein: 25, carbs: 8, fat: 2 },
    ],
  };
  
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-emerald-600 px-6 pt-16 pb-8 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button onClick={() => window.history.back()} className="text-white">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-2xl font-semibold text-white mb-1">Diet Plan</h1>
              <p className="text-white/80">AI-generated for your goals</p>
            </div>
          </div>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Calendar size={20} className="text-white" />
          </button>
        </div>
        
        {/* Day Selector */}
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {days.map((day, index) => {
            const isSelected = fullDays[index] === selectedDay;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(fullDays[index])}
                className={`flex-shrink-0 px-4 py-2 rounded-xl transition-all ${
                  isSelected
                    ? 'bg-white text-primary font-medium'
                    : 'bg-white/20 text-white'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="px-6 -mt-4 space-y-6">
        {/* Plan Summary */}
        <Card className="bg-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold mb-1">Today's Target</h3>
              <p className="text-2xl font-semibold text-primary">2,100 kcal</p>
            </div>
            <Button size="sm" variant="outline" icon={<RefreshCw size={16} />}>
              Regenerate
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-secondary/50 rounded-xl">
              <div className="text-xs text-muted-foreground mb-1">Protein</div>
              <div className="font-semibold">150g</div>
            </div>
            <div className="text-center p-3 bg-secondary/50 rounded-xl">
              <div className="text-xs text-muted-foreground mb-1">Carbs</div>
              <div className="font-semibold">230g</div>
            </div>
            <div className="text-center p-3 bg-secondary/50 rounded-xl">
              <div className="text-xs text-muted-foreground mb-1">Fat</div>
              <div className="font-semibold">70g</div>
            </div>
          </div>
        </Card>
        
        {/* Meals */}
        {Object.entries(todayPlan).map(([mealType, items]) => (
          <div key={mealType}>
            <h2 className="font-semibold mb-3 capitalize">{mealType}</h2>
            <Card>
              <div className="space-y-3">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`pb-3 ${index < items.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{item.name}</h3>
                        <div className="flex gap-3 text-xs text-muted-foreground">
                          <span>P: {item.protein}g</span>
                          <span>C: {item.carbs}g</span>
                          <span>F: {item.fat}g</span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-3">
                        <div className="font-semibold text-primary">{item.calories}</div>
                        <div className="text-xs text-muted-foreground">kcal</div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <button className="w-full py-2 text-sm text-primary font-medium flex items-center justify-center gap-1 hover:bg-primary/5 rounded-lg transition-colors">
                  See Alternatives
                  <ChevronRight size={16} />
                </button>
              </div>
            </Card>
          </div>
        ))}
        
        {/* Download Plan */}
        <Button fullWidth variant="outline" icon={<Download size={20} />}>
          Download Weekly Plan (PDF)
        </Button>
      </div>
    </div>
  );
}