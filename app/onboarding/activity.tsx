import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ScreenHeader, ScreenLayout } from '@/components/ui/ScreenHeader';

const levels = [
  { id: 'sedentary', label: 'Sedentary', desc: 'Little or no exercise', icon: '🪑' },
  { id: 'light', label: 'Lightly Active', desc: 'Exercise 1-3 days/week', icon: '🚶' },
  { id: 'moderate', label: 'Moderately Active', desc: 'Exercise 3-5 days/week', icon: '🏃' },
  { id: 'very', label: 'Very Active', desc: 'Exercise 6-7 days/week', icon: '💪' },
  { id: 'extra', label: 'Extra Active', desc: 'Physical job + exercise', icon: '🔥' },
];

export default function ActivityScreen() {
  const [selected, setSelected] = useState('');

  return (
    <ScreenLayout
      footer={
        <Button
          fullWidth
          size="lg"
          disabled={!selected}
          onPress={() => router.push('/onboarding/goal')}>
          Continue
        </Button>
      }>
      <ScreenHeader
        title="Activity Level"
        subtitle="How active are you?"
        step="Step 3 of 6"
        onBack={() => router.back()}
      />
      <ScrollView className="flex-1 px-6" contentContainerClassName="gap-3 pb-4">
        {levels.map((level) => (
          <Card
            key={level.id}
            onPress={() => setSelected(level.id)}
            className={selected === level.id ? 'border-2 border-primary bg-primary/5' : ''}>
            <View className="flex-row items-start gap-4">
              <Text className="text-3xl">{level.icon}</Text>
              <View className="flex-1">
                <Text className="font-medium text-foreground mb-1">{level.label}</Text>
                <Text className="text-sm text-muted-foreground">{level.desc}</Text>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </ScreenLayout>
  );
}
