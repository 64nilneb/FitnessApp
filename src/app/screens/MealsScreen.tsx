import React, { useState } from 'react';
import { Search, Camera, ScanBarcode, Clock, Plus, X } from 'lucide-react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function MealsScreen() {
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const recentFoods = [
    { name: 'Grilled Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6, serving: '100g' },
    { name: 'Brown Rice', calories: 111, protein: 2.6, carbs: 23, fat: 0.9, serving: '100g' },
    { name: 'Avocado', calories: 160, protein: 2, carbs: 9, fat: 15, serving: '100g' },
    { name: 'Greek Yogurt', calories: 59, protein: 10, carbs: 3.6, fat: 0.4, serving: '100g' },
  ];
  
  const popularFoods = [
    { name: 'Oatmeal', calories: 68, icon: '🥣' },
    { name: 'Banana', calories: 89, icon: '🍌' },
    { name: 'Eggs', calories: 155, icon: '🥚' },
    { name: 'Salmon', calories: 208, icon: '🐟' },
  ];
  
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-16 pb-6 sticky top-0 z-10 border-b border-border">
        <h1 className="text-2xl font-semibold mb-4">Track Meals</h1>
        <Input
          placeholder="Search foods..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={<Search size={20} />}
        />
      </div>
      
      <div className="px-6 pt-6 space-y-6">
        {/* Quick Add Options */}
        <div className="grid grid-cols-3 gap-3">
          <Card hoverable onClick={() => setShowAddMeal(!showAddMeal)} className="text-center py-4">
            <Camera size={24} className="mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">Take Photo</p>
            <p className="text-xs text-muted-foreground">AI Recognition</p>
          </Card>
          
          <Card hoverable className="text-center py-4">
            <ScanBarcode size={24} className="mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">Scan Barcode</p>
            <p className="text-xs text-muted-foreground">Quick Add</p>
          </Card>
          
          <Card hoverable onClick={() => setShowAddMeal(!showAddMeal)} className="text-center py-4">
            <Plus size={24} className="mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">Manual</p>
            <p className="text-xs text-muted-foreground">Add Details</p>
          </Card>
        </div>
        
        {/* Recent Foods */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Recent Foods</h2>
            <Clock size={16} className="text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {recentFoods.map((food, index) => (
              <Card key={index} hoverable onClick={() => setShowAddMeal(!showAddMeal)}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-medium mb-1">{food.name}</h3>
                    <p className="text-sm text-muted-foreground">{food.serving}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary">{food.calories}</div>
                    <div className="text-xs text-muted-foreground">kcal</div>
                  </div>
                </div>
                <div className="flex gap-4 text-xs">
                  <div className="flex-1 bg-secondary/50 rounded-lg px-2 py-1.5 text-center">
                    <div className="text-muted-foreground">Protein</div>
                    <div className="font-medium">{food.protein}g</div>
                  </div>
                  <div className="flex-1 bg-secondary/50 rounded-lg px-2 py-1.5 text-center">
                    <div className="text-muted-foreground">Carbs</div>
                    <div className="font-medium">{food.carbs}g</div>
                  </div>
                  <div className="flex-1 bg-secondary/50 rounded-lg px-2 py-1.5 text-center">
                    <div className="text-muted-foreground">Fat</div>
                    <div className="font-medium">{food.fat}g</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Popular Foods */}
        <div>
          <h2 className="font-semibold mb-4">Popular Foods</h2>
          <div className="grid grid-cols-2 gap-3">
            {popularFoods.map((food, index) => (
              <Card key={index} hoverable onClick={() => setShowAddMeal(!showAddMeal)} className="text-center">
                <div className="text-4xl mb-2">{food.icon}</div>
                <h3 className="font-medium text-sm mb-1">{food.name}</h3>
                <p className="text-xs text-primary font-medium">{food.calories} kcal</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add Meal Modal */}
      {showAddMeal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Add Food Details</h2>
              <button onClick={() => setShowAddMeal(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <Input label="Food Name" placeholder="e.g., Grilled Chicken" />
              <Input label="Serving Size" placeholder="e.g., 100g" />
              <Input label="Calories" type="number" placeholder="e.g., 165" />
              
              <div className="grid grid-cols-3 gap-3">
                <Input label="Protein (g)" type="number" placeholder="31" />
                <Input label="Carbs (g)" type="number" placeholder="0" />
                <Input label="Fat (g)" type="number" placeholder="3.6" />
              </div>
              
              <Button fullWidth onClick={() => setShowAddMeal(false)}>
                Add to Diary
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
