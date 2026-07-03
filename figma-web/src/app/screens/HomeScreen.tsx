import React from 'react';
import { Bell, Flame, Droplet, TrendingUp, Sparkles, Plus, Calendar } from 'lucide-react';
import { Card } from '../components/Card';
import { ProgressRing } from '../components/ProgressRing';
import { Button } from '../components/Button';

interface HomeScreenProps {
  onAddMeal: () => void;
  onViewDietPlan?: () => void;
}

export function HomeScreen({ onAddMeal, onViewDietPlan }: HomeScreenProps) {
  // Mock data
  const calorieData = {
    consumed: 1450,
    target: 2100,
    remaining: 650,
    burned: 320,
  };
  
  const macros = [
    { name: 'Protein', value: 85, target: 150, unit: 'g', color: '#1DB954' },
    { name: 'Carbs', value: 140, target: 230, unit: 'g', color: '#3B82F6' },
    { name: 'Fat', value: 45, target: 70, unit: 'g', color: '#F59E0B' },
  ];
  
  const meals = [
    { id: 1, name: 'Breakfast', time: '8:00 AM', calories: 420, logged: true },
    { id: 2, name: 'Lunch', time: '1:00 PM', calories: 680, logged: true },
    { id: 3, name: 'Dinner', time: '7:00 PM', calories: 0, logged: false },
    { id: 4, name: 'Snacks', time: 'Anytime', calories: 350, logged: true },
  ];
  
  const waterIntake = 6; // glasses
  const waterTarget = 8;
  
  const progress = Math.min((calorieData.consumed / calorieData.target) * 100, 100);
  
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-emerald-600 px-6 pt-16 pb-8 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-white mb-1">Good Morning! 👋</h1>
            <p className="text-white/80">Let's track your nutrition today</p>
          </div>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bell size={20} className="text-white" />
          </button>
        </div>
        
        {/* Calorie Ring */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="text-white/80 text-sm mb-1">Daily Calories</div>
              <div className="text-3xl font-semibold text-white mb-1">
                {calorieData.consumed}
                <span className="text-lg text-white/60">/{calorieData.target}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-1">
                  <Flame size={16} />
                  <span>{calorieData.burned} burned</span>
                </div>
                <div>
                  <span className="text-white font-medium">{calorieData.remaining} left</span>
                </div>
              </div>
            </div>
            <ProgressRing
              progress={progress}
              size={100}
              strokeWidth={8}
              color="#ffffff"
              backgroundColor="rgba(255, 255, 255, 0.2)"
            >
              <div className="text-center">
                <div className="text-2xl font-semibold text-white">{Math.round(progress)}%</div>
              </div>
            </ProgressRing>
          </div>
        </Card>
      </div>
      
      <div className="px-6 -mt-4 space-y-6">
        {/* AI Insight Card */}
        <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles size={20} className="text-accent" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium">AI Daily Insight</h3>
                <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full">Premium</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Great progress! You're 69% to your goal. Try adding more protein to reach your macro targets. Consider a lean protein source for dinner.
              </p>
            </div>
          </div>
        </Card>
        
        {/* Diet Plan Quick Access */}
        <Card 
          hoverable 
          onClick={onViewDietPlan}
          className="bg-gradient-to-br from-primary/5 to-emerald-600/5 border border-primary/20"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Calendar size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Today's Diet Plan</h3>
                <p className="text-sm text-muted-foreground">AI-personalized for you</p>
              </div>
            </div>
            <Button size="sm" variant="ghost">
              View
            </Button>
          </div>
        </Card>
        
        {/* Macronutrients */}
        <div>
          <h2 className="font-semibold mb-4">Macronutrients</h2>
          <div className="grid grid-cols-3 gap-3">
            {macros.map((macro) => {
              const macroProgress = (macro.value / macro.target) * 100;
              return (
                <Card key={macro.name} className="text-center">
                  <ProgressRing
                    progress={macroProgress}
                    size={70}
                    strokeWidth={6}
                    color={macro.color}
                  >
                    <div className="text-xs font-semibold">
                      {macro.value}
                      <div className="text-[10px] text-muted-foreground">/{macro.target}</div>
                    </div>
                  </ProgressRing>
                  <div className="mt-2">
                    <div className="text-xs text-muted-foreground">{macro.name}</div>
                    <div className="text-sm font-medium">{macro.value}{macro.unit}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Water Intake */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Droplet size={20} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">Water Intake</h3>
                <p className="text-sm text-muted-foreground">{waterIntake} / {waterTarget} glasses</p>
              </div>
            </div>
            <Button size="sm" onClick={() => {}}>
              <Plus size={16} />
            </Button>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: waterTarget }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-2 rounded-full transition-all ${
                  i < waterIntake ? 'bg-blue-500' : 'bg-secondary'
                }`}
              />
            ))}
          </div>
        </Card>
        
        {/* Meals */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Today's Meals</h2>
            <button className="text-sm text-primary font-medium" onClick={onViewDietPlan}>View All</button>
          </div>
          <div className="space-y-3">
            {meals.map((meal) => (
              <Card
                key={meal.id}
                hoverable
                onClick={onAddMeal}
                className={`${!meal.logged ? 'border border-dashed border-border' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      meal.logged ? 'bg-primary/10' : 'bg-secondary'
                    }`}>
                      {meal.logged ? (
                        <TrendingUp size={20} className="text-primary" />
                      ) : (
                        <Plus size={20} className="text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{meal.name}</h3>
                      <p className="text-sm text-muted-foreground">{meal.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {meal.logged ? (
                      <>
                        <div className="font-semibold text-primary">{meal.calories}</div>
                        <div className="text-xs text-muted-foreground">kcal</div>
                      </>
                    ) : (
                      <div className="text-sm text-muted-foreground">Not logged</div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}