import { useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Camera, ScanBarcode, Clock, Plus, X } from 'lucide-react-native';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

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

export default function MealsScreen() {
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <View className="bg-white px-6 pt-4 pb-6 border-b border-border">
        <Text className="text-2xl font-semibold text-foreground mb-4">Track Meals</Text>
        <Input
          placeholder="Search foods..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          icon={<Search size={20} color="#6B7280" />}
        />
      </View>

      <ScrollView className="flex-1" contentContainerClassName="px-6 pt-6 pb-24 gap-6">
        <View className="flex-row gap-3">
          {[
            { icon: Camera, label: 'Take Photo', sub: 'AI Recognition' },
            { icon: ScanBarcode, label: 'Scan Barcode', sub: 'Quick Add' },
            { icon: Plus, label: 'Manual', sub: 'Add Details' },
          ].map((item) => (
            <Card key={item.label} onPress={() => setShowAddMeal(true)} className="flex-1 items-center py-4">
              <item.icon size={24} color="#1DB954" />
              <Text className="text-sm font-medium text-foreground mt-2">{item.label}</Text>
              <Text className="text-xs text-muted-foreground">{item.sub}</Text>
            </Card>
          ))}
        </View>

        <View>
          <View className="flex-row items-center justify-between mb-4">
            <Text className="font-semibold text-foreground">Recent Foods</Text>
            <Clock size={16} color="#6B7280" />
          </View>
          <View className="gap-3">
            {recentFoods.map((food) => (
              <Card key={food.name} onPress={() => setShowAddMeal(true)}>
                <View className="flex-row items-center justify-between mb-3">
                  <View>
                    <Text className="font-medium text-foreground mb-1">{food.name}</Text>
                    <Text className="text-sm text-muted-foreground">{food.serving}</Text>
                  </View>
                  <View className="items-end">
                    <Text className="font-semibold text-primary">{food.calories}</Text>
                    <Text className="text-xs text-muted-foreground">kcal</Text>
                  </View>
                </View>
                <View className="flex-row gap-2">
                  {[
                    { label: 'Protein', val: food.protein },
                    { label: 'Carbs', val: food.carbs },
                    { label: 'Fat', val: food.fat },
                  ].map((m) => (
                    <View key={m.label} className="flex-1 bg-secondary/50 rounded-lg px-2 py-1.5 items-center">
                      <Text className="text-xs text-muted-foreground">{m.label}</Text>
                      <Text className="font-medium text-foreground">{m.val}g</Text>
                    </View>
                  ))}
                </View>
              </Card>
            ))}
          </View>
        </View>

        <View>
          <Text className="font-semibold text-foreground mb-4">Popular Foods</Text>
          <View className="flex-row flex-wrap gap-3">
            {popularFoods.map((food) => (
              <View key={food.name} className="w-[47%]">
                <Card onPress={() => setShowAddMeal(true)} className="items-center">
                  <Text className="text-4xl mb-2">{food.icon}</Text>
                  <Text className="font-medium text-sm text-foreground mb-1">{food.name}</Text>
                  <Text className="text-xs text-primary font-medium">{food.calories} kcal</Text>
                </Card>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <Modal visible={showAddMeal} transparent animationType="slide">
        <Pressable className="flex-1 bg-black/50 justify-end" onPress={() => setShowAddMeal(false)}>
          <Pressable className="bg-white rounded-t-3xl p-6 max-h-[80%]" onPress={(e) => e.stopPropagation()}>
            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-xl font-semibold text-foreground">Add Food Details</Text>
              <Pressable onPress={() => setShowAddMeal(false)}>
                <X size={24} color="#1C1C1E" />
              </Pressable>
            </View>
            <ScrollView className="gap-4">
              <Input label="Food Name" placeholder="e.g., Grilled Chicken" />
              <Input label="Serving Size" placeholder="e.g., 100g" />
              <Input label="Calories" placeholder="e.g., 165" keyboardType="numeric" />
              <View className="flex-row gap-3">
                <View className="flex-1"><Input label="Protein (g)" placeholder="31" keyboardType="numeric" /></View>
                <View className="flex-1"><Input label="Carbs (g)" placeholder="0" keyboardType="numeric" /></View>
                <View className="flex-1"><Input label="Fat (g)" placeholder="3.6" keyboardType="numeric" /></View>
              </View>
              <Button fullWidth onPress={() => setShowAddMeal(false)}>Add to Diary</Button>
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}
