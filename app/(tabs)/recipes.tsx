import { useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Clock, Flame, ChefHat, Heart, X } from 'lucide-react-native';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Lunch' },
  { id: 'dinner', label: 'Dinner' },
  { id: 'snacks', label: 'Snacks' },
];

const recipes = [
  { id: 1, name: 'Quinoa Buddha Bowl', image: '🥗', calories: 420, protein: 18, cookTime: 25, difficulty: 'Easy', tags: ['Vegan', 'High Protein'] },
  { id: 2, name: 'Grilled Salmon & Asparagus', image: '🐟', calories: 380, protein: 42, cookTime: 20, difficulty: 'Medium', tags: ['Keto', 'High Protein'] },
  { id: 3, name: 'Overnight Oats', image: '🥣', calories: 320, protein: 12, cookTime: 5, difficulty: 'Easy', tags: ['Breakfast', 'Make Ahead'] },
  { id: 4, name: 'Chicken Stir Fry', image: '🍜', calories: 450, protein: 38, cookTime: 30, difficulty: 'Easy', tags: ['Low Carb', 'Quick'] },
];

export default function RecipesScreen() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedRecipe, setSelectedRecipe] = useState<typeof recipes[0] | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <View className="bg-white px-6 pt-4 pb-6 border-b border-border">
        <Text className="text-2xl font-semibold text-foreground mb-4">Healthy Recipes</Text>
        <Input placeholder="Search recipes..." icon={<Search size={20} color="#6B7280" />} />
      </View>

      <ScrollView className="flex-1" contentContainerClassName="px-6 pt-6 pb-24 gap-6">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-2">
          {filters.map((filter) => (
            <Pressable
              key={filter.id}
              onPress={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-xl mr-2 ${selectedFilter === filter.id ? 'bg-primary' : 'bg-secondary'}`}>
              <Text className={selectedFilter === filter.id ? 'text-white' : 'text-foreground'}>{filter.label}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View className="gap-4">
          {recipes.map((recipe) => (
            <Card key={recipe.id} onPress={() => setSelectedRecipe(recipe)}>
              <View className="flex-row gap-4">
                <View className="w-24 h-24 bg-primary/10 rounded-2xl items-center justify-center">
                  <Text className="text-5xl">{recipe.image}</Text>
                </View>
                <View className="flex-1">
                  <View className="flex-row items-start justify-between mb-2">
                    <Text className="font-semibold text-lg text-foreground flex-1">{recipe.name}</Text>
                    <Heart size={20} color="#6B7280" />
                  </View>
                  <View className="flex-row gap-3 mb-3">
                    <View className="flex-row items-center gap-1">
                      <Clock size={14} color="#6B7280" />
                      <Text className="text-sm text-muted-foreground">{recipe.cookTime} min</Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                      <Flame size={14} color="#6B7280" />
                      <Text className="text-sm text-muted-foreground">{recipe.calories} kcal</Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                      <ChefHat size={14} color="#6B7280" />
                      <Text className="text-sm text-muted-foreground">{recipe.difficulty}</Text>
                    </View>
                  </View>
                  <View className="flex-row flex-wrap gap-2">
                    {recipe.tags.map((tag) => (
                      <Text key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{tag}</Text>
                    ))}
                  </View>
                </View>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>

      <Modal visible={!!selectedRecipe} transparent animationType="slide">
        <Pressable className="flex-1 bg-black/50 justify-end" onPress={() => setSelectedRecipe(null)}>
          <Pressable className="bg-white rounded-t-3xl p-6" onPress={(e) => e.stopPropagation()}>
            {selectedRecipe && (
              <>
                <View className="flex-row justify-between mb-4">
                  <Text className="text-2xl font-semibold text-foreground flex-1">{selectedRecipe.name}</Text>
                  <Pressable onPress={() => setSelectedRecipe(null)}><X size={24} color="#1C1C1E" /></Pressable>
                </View>
                <Text className="text-6xl text-center mb-4">{selectedRecipe.image}</Text>
                <View className="flex-row justify-around mb-6">
                  <View className="items-center"><Text className="text-muted-foreground text-sm">Calories</Text><Text className="font-semibold">{selectedRecipe.calories}</Text></View>
                  <View className="items-center"><Text className="text-muted-foreground text-sm">Protein</Text><Text className="font-semibold">{selectedRecipe.protein}g</Text></View>
                  <View className="items-center"><Text className="text-muted-foreground text-sm">Time</Text><Text className="font-semibold">{selectedRecipe.cookTime} min</Text></View>
                </View>
                <Button fullWidth>Add to Meal Plan</Button>
              </>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}
