import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { TrendingDown, TrendingUp, Target } from 'lucide-react-native';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ScreenHeader, ScreenLayout } from '@/components/ui/ScreenHeader';

const goals = [
  { id: 'lose', label: 'Lose Weight', desc: 'Reduce body fat and achieve a healthy weight', icon: TrendingDown, color: '#3B82F6' },
  { id: 'maintain', label: 'Maintain Weight', desc: 'Keep your current weight and improve health', icon: Target, color: '#1DB954' },
  { id: 'gain', label: 'Gain Weight', desc: 'Build muscle and increase body mass', icon: TrendingUp, color: '#F59E0B' },
];

export default function GoalScreen() {
  const [selected, setSelected] = useState('');

  return (
    <ScreenLayout
      footer={
        <Button
          fullWidth
          size="lg"
          disabled={!selected}
          onPress={() => router.push('/onboarding/diet')}>
          Continue
        </Button>
      }>
      <ScreenHeader
        title="Your Health Goal"
        subtitle="What would you like to achieve?"
        step="Step 4 of 6"
        onBack={() => router.back()}
      />
      <ScrollView className="flex-1 px-6" contentContainerClassName="gap-3 pb-4">
        {goals.map((goal) => {
          const Icon = goal.icon;
          return (
            <Card
              key={goal.id}
              onPress={() => setSelected(goal.id)}
              className={selected === goal.id ? 'border-2 border-primary bg-primary/5' : ''}>
              <View className="flex-row items-start gap-4">
                <View className="w-12 h-12 rounded-xl bg-primary/10 items-center justify-center">
                  <Icon size={24} color={goal.color} />
                </View>
                <View className="flex-1">
                  <Text className="font-medium text-foreground mb-1">{goal.label}</Text>
                  <Text className="text-sm text-muted-foreground">{goal.desc}</Text>
                </View>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </ScreenLayout>
  );
}
