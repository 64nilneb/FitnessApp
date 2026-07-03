import React, { useState } from 'react';
import { Search, Clock, Flame, ChefHat, Heart } from 'lucide-react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function RecipesScreen() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showRecipeDetail, setShowRecipeDetail] = useState(false);
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'lunch', label: 'Lunch' },
    { id: 'dinner', label: 'Dinner' },
    { id: 'snacks', label: 'Snacks' },
  ];
  
  const recipes = [
    {
      id: 1,
      name: 'Quinoa Buddha Bowl',
      image: '🥗',
      calories: 420,
      protein: 18,
      cookTime: 25,
      difficulty: 'Easy',
      tags: ['Vegan', 'High Protein'],
    },
    {
      id: 2,
      name: 'Grilled Salmon & Asparagus',
      image: '🐟',
      calories: 380,
      protein: 42,
      cookTime: 20,
      difficulty: 'Medium',
      tags: ['Keto', 'High Protein'],
    },
    {
      id: 3,
      name: 'Overnight Oats',
      image: '🥣',
      calories: 320,
      protein: 12,
      cookTime: 5,
      difficulty: 'Easy',
      tags: ['Breakfast', 'Make Ahead'],
    },
    {
      id: 4,
      name: 'Chicken Stir Fry',
      image: '🍜',
      calories: 450,
      protein: 38,
      cookTime: 30,
      difficulty: 'Easy',
      tags: ['Low Carb', 'Quick'],
    },
  ];
  
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-16 pb-6 sticky top-0 z-10 border-b border-border">
        <h1 className="text-2xl font-semibold mb-4">Healthy Recipes</h1>
        <Input
          placeholder="Search recipes..."
          icon={<Search size={20} />}
        />
      </div>
      
      <div className="px-6 pt-6 space-y-6">
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl transition-all ${
                selectedFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Recipe Cards */}
        <div className="space-y-4">
          {recipes.map((recipe) => (
            <Card key={recipe.id} hoverable onClick={() => setShowRecipeDetail(true)}>
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0">
                  {recipe.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{recipe.name}</h3>
                    <button className="flex-shrink-0 ml-2">
                      <Heart size={20} className="text-muted-foreground" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{recipe.cookTime} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame size={14} />
                      <span>{recipe.calories} kcal</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ChefHat size={14} />
                      <span>{recipe.difficulty}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {recipe.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Recipe Detail Modal */}
      {showRecipeDetail && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-border px-6 py-4">
              <button
                onClick={() => setShowRecipeDetail(false)}
                className="text-sm text-primary font-medium"
              >
                Close
              </button>
            </div>
            
            <div className="px-6 py-6">
              <div className="text-center mb-6">
                <div className="text-7xl mb-4">🥗</div>
                <h2 className="text-2xl font-semibold mb-2">Quinoa Buddha Bowl</h2>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>25 min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame size={16} />
                    <span>420 kcal</span>
                  </div>
                </div>
              </div>
              
              {/* Nutrition Facts */}
              <Card className="mb-6">
                <h3 className="font-semibold mb-3">Nutrition Facts</h3>
                <div className="grid grid-cols-4 gap-3">
                  <div className="text-center p-3 bg-secondary/50 rounded-xl">
                    <div className="font-semibold text-lg mb-1">420</div>
                    <div className="text-xs text-muted-foreground">Calories</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/50 rounded-xl">
                    <div className="font-semibold text-lg mb-1">18g</div>
                    <div className="text-xs text-muted-foreground">Protein</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/50 rounded-xl">
                    <div className="font-semibold text-lg mb-1">52g</div>
                    <div className="text-xs text-muted-foreground">Carbs</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/50 rounded-xl">
                    <div className="font-semibold text-lg mb-1">14g</div>
                    <div className="text-xs text-muted-foreground">Fat</div>
                  </div>
                </div>
              </Card>
              
              {/* Ingredients */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Ingredients</h3>
                <Card>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>1 cup cooked quinoa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>1 cup roasted chickpeas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>1 cup mixed greens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>1/2 avocado, sliced</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>1/2 cup cherry tomatoes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>2 tbsp tahini dressing</span>
                    </li>
                  </ul>
                </Card>
              </div>
              
              {/* Cooking Steps */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Cooking Steps</h3>
                <Card>
                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        1
                      </div>
                      <p className="flex-1 text-sm">Cook quinoa according to package instructions and let cool.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        2
                      </div>
                      <p className="flex-1 text-sm">Roast chickpeas with olive oil and spices at 400°F for 20 minutes.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        3
                      </div>
                      <p className="flex-1 text-sm">Arrange mixed greens in a bowl, top with quinoa and chickpeas.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        4
                      </div>
                      <p className="flex-1 text-sm">Add sliced avocado and cherry tomatoes.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        5
                      </div>
                      <p className="flex-1 text-sm">Drizzle with tahini dressing and enjoy!</p>
                    </li>
                  </ol>
                </Card>
              </div>
              
              <Button fullWidth>Add to Meal Plan</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
