import { ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Bell, Flame, Droplet, TrendingUp, Sparkles, Plus, Calendar } from 'lucide-react-native';
import { Card } from '@/components/ui/Card';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { Button } from '@/components/ui/Button';

export default function HomeScreen() {
  const calorieData = { consumed: 1450, target: 2100, remaining: 650, burned: 320 };
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
  const waterIntake = 6;
  const waterTarget = 8;
  const progress = Math.min((calorieData.consumed / calorieData.target) * 100, 100);

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView className="flex-1" contentContainerClassName="pb-24">
        <View className="bg-primary px-6 pt-4 pb-8 rounded-b-3xl">
          <View className="flex-row items-center justify-between mb-6">
            <View>
              <Text className="text-2xl font-semibold text-white mb-1">Good Morning! 👋</Text>
              <Text className="text-white/80">Let&apos;s track your nutrition today</Text>
            </View>
            <View className="w-10 h-10 bg-white/20 rounded-full items-center justify-center">
              <Bell size={20} color="#ffffff" />
            </View>
          </View>

          <Card className="bg-white/10 border border-white/20">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-white/80 text-sm mb-1">Daily Calories</Text>
                <Text className="text-3xl font-semibold text-white mb-1">
                  {calorieData.consumed}
                  <Text className="text-lg text-white/60">/{calorieData.target}</Text>
                </Text>
                <View className="flex-row items-center gap-4">
                  <View className="flex-row items-center gap-1">
                    <Flame size={16} color="#ffffff" />
                    <Text className="text-sm text-white/80">{calorieData.burned} burned</Text>
                  </View>
                  <Text className="text-sm text-white font-medium">{calorieData.remaining} left</Text>
                </View>
              </View>
              <ProgressRing progress={progress} size={100} strokeWidth={8} color="#ffffff" backgroundColor="rgba(255,255,255,0.2)">
                <Text className="text-2xl font-semibold text-white">{Math.round(progress)}%</Text>
              </ProgressRing>
            </View>
          </Card>
        </View>

        <View className="px-6 -mt-4 gap-6 pt-2">
          <Card className="bg-accent/10 border border-accent/20">
            <View className="flex-row items-start gap-3">
              <View className="w-10 h-10 bg-accent/20 rounded-full items-center justify-center">
                <Sparkles size={20} color="#D4AF37" />
              </View>
              <View className="flex-1">
                <View className="flex-row items-center gap-2 mb-1">
                  <Text className="font-medium text-foreground">AI Daily Insight</Text>
                  <Text className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full">Premium</Text>
                </View>
                <Text className="text-sm text-muted-foreground leading-relaxed">
                  Great progress! You&apos;re 69% to your goal. Try adding more protein to reach your macro targets.
                </Text>
              </View>
            </View>
          </Card>

          <Card onPress={() => router.push('/diet-plan')} className="border border-primary/20">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-12 h-12 bg-primary/10 rounded-xl items-center justify-center">
                  <Calendar size={24} color="#1DB954" />
                </View>
                <View>
                  <Text className="font-semibold text-foreground mb-1">Today&apos;s Diet Plan</Text>
                  <Text className="text-sm text-muted-foreground">AI-personalized for you</Text>
                </View>
              </View>
              <Button size="sm" variant="ghost">View</Button>
            </View>
          </Card>

          <View>
            <Text className="font-semibold text-foreground mb-4">Macronutrients</Text>
            <View className="flex-row gap-3">
              {macros.map((macro) => (
                <Card key={macro.name} className="flex-1 items-center">
                  <ProgressRing progress={(macro.value / macro.target) * 100} size={70} strokeWidth={6} color={macro.color}>
                    <Text className="text-xs font-semibold text-foreground">{macro.value}</Text>
                  </ProgressRing>
                  <Text className="text-xs text-muted-foreground mt-2">{macro.name}</Text>
                  <Text className="text-sm font-medium text-foreground">{macro.value}{macro.unit}</Text>
                </Card>
              ))}
            </View>
          </View>

          <Card>
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 bg-blue-500/10 rounded-full items-center justify-center">
                  <Droplet size={20} color="#3B82F6" />
                </View>
                <View>
                  <Text className="font-medium text-foreground">Water Intake</Text>
                  <Text className="text-sm text-muted-foreground">{waterIntake} / {waterTarget} glasses</Text>
                </View>
              </View>
              <Pressable className="w-10 h-10 bg-blue-500/10 rounded-full items-center justify-center">
                <Plus size={16} color="#3B82F6" />
              </Pressable>
            </View>
            <View className="flex-row gap-1">
              {Array.from({ length: waterTarget }).map((_, i) => (
                <View key={i} className={`flex-1 h-2 rounded-full ${i < waterIntake ? 'bg-blue-500' : 'bg-secondary'}`} />
              ))}
            </View>
          </Card>

          <View>
            <View className="flex-row items-center justify-between mb-4">
              <Text className="font-semibold text-foreground">Today&apos;s Meals</Text>
              <Pressable onPress={() => router.push('/diet-plan')}>
                <Text className="text-sm text-primary font-medium">View All</Text>
              </Pressable>
            </View>
            <View className="gap-3">
              {meals.map((meal) => (
                <Card
                  key={meal.id}
                  onPress={() => router.push('/(tabs)/meals')}
                  className={!meal.logged ? 'border border-dashed border-border' : ''}>
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-3">
                      <View className={`w-12 h-12 rounded-xl items-center justify-center ${meal.logged ? 'bg-primary/10' : 'bg-secondary'}`}>
                        {meal.logged ? <TrendingUp size={20} color="#1DB954" /> : <Plus size={20} color="#6B7280" />}
                      </View>
                      <View>
                        <Text className="font-medium text-foreground">{meal.name}</Text>
                        <Text className="text-sm text-muted-foreground">{meal.time}</Text>
                      </View>
                    </View>
                    {meal.logged ? (
                      <View className="items-end">
                        <Text className="font-semibold text-primary">{meal.calories}</Text>
                        <Text className="text-xs text-muted-foreground">kcal</Text>
                      </View>
                    ) : (
                      <Text className="text-sm text-muted-foreground">Not logged</Text>
                    )}
                  </View>
                </Card>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
