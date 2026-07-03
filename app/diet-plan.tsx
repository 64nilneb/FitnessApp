import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Calendar, ChevronRight, RefreshCw, Download, ArrowLeft } from 'lucide-react-native';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

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

export default function DietPlanScreen() {
  const [selectedDay, setSelectedDay] = useState('monday');

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView className="flex-1" contentContainerClassName="pb-24">
        <View className="bg-primary px-6 pt-4 pb-8 rounded-b-3xl">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center gap-3">
              <Pressable onPress={() => router.back()}>
                <ArrowLeft size={24} color="#ffffff" />
              </Pressable>
              <View>
                <Text className="text-2xl font-semibold text-white mb-1">Diet Plan</Text>
                <Text className="text-white/80">AI-generated for your goals</Text>
              </View>
            </View>
            <View className="w-10 h-10 bg-white/20 rounded-full items-center justify-center">
              <Calendar size={20} color="#ffffff" />
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-2">
            {days.map((day, index) => {
              const isSelected = fullDays[index] === selectedDay;
              return (
                <Pressable
                  key={day}
                  onPress={() => setSelectedDay(fullDays[index])}
                  className={`px-4 py-2 rounded-xl mr-2 ${isSelected ? 'bg-white' : 'bg-white/20'}`}>
                  <Text className={isSelected ? 'text-primary font-medium' : 'text-white'}>{day}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        <View className="px-6 -mt-4 gap-6 pt-2">
          <Card>
            <View className="flex-row items-center justify-between mb-4">
              <View>
                <Text className="font-semibold text-foreground mb-1">Today&apos;s Target</Text>
                <Text className="text-2xl font-semibold text-primary">2,100 kcal</Text>
              </View>
              <Button size="sm" variant="outline" icon={<RefreshCw size={16} color="#1C1C1E" />}>
                Regenerate
              </Button>
            </View>
            <View className="flex-row gap-3">
              {['Protein', 'Carbs', 'Fat'].map((m, i) => (
                <View key={m} className="flex-1 items-center p-3 bg-secondary/50 rounded-xl">
                  <Text className="text-xs text-muted-foreground mb-1">{m}</Text>
                  <Text className="font-semibold text-foreground">{[150, 230, 70][i]}g</Text>
                </View>
              ))}
            </View>
          </Card>

          {Object.entries(todayPlan).map(([mealType, items]) => (
            <View key={mealType}>
              <Text className="font-semibold text-foreground mb-3 capitalize">{mealType}</Text>
              <Card>
                {items.map((item, index) => (
                  <View key={item.name} className={index < items.length - 1 ? 'pb-3 mb-3 border-b border-border' : 'pb-2'}>
                    <View className="flex-row items-start justify-between mb-2">
                      <View className="flex-1">
                        <Text className="font-medium text-foreground mb-1">{item.name}</Text>
                        <Text className="text-xs text-muted-foreground">
                          P: {item.protein}g  C: {item.carbs}g  F: {item.fat}g
                        </Text>
                      </View>
                      <View className="items-end ml-3">
                        <Text className="font-semibold text-primary">{item.calories}</Text>
                        <Text className="text-xs text-muted-foreground">kcal</Text>
                      </View>
                    </View>
                  </View>
                ))}
                <Pressable className="py-2 flex-row items-center justify-center gap-1">
                  <Text className="text-sm text-primary font-medium">See Alternatives</Text>
                  <ChevronRight size={16} color="#1DB954" />
                </Pressable>
              </Card>
            </View>
          ))}

          <Button fullWidth variant="outline" icon={<Download size={20} color="#1C1C1E" />}>
            Download Weekly Plan (PDF)
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
