import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ScreenHeader, ScreenLayout } from '@/components/ui/ScreenHeader';

const genders = [
  { id: 'male', label: 'Male', icon: '👨' },
  { id: 'female', label: 'Female', icon: '👩' },
  { id: 'other', label: 'Other', icon: '🧑' },
];

export default function GenderScreen() {
  const [selected, setSelected] = useState('');

  return (
    <ScreenLayout
      footer={
        <Button
          fullWidth
          size="lg"
          disabled={!selected}
          onPress={() => router.push('/onboarding/stats')}>
          Continue
        </Button>
      }>
      <ScreenHeader
        title="What's your gender?"
        subtitle="This helps us personalize your experience"
        step="Step 1 of 6"
        onBack={() => router.back()}
      />
      <ScrollView className="flex-1 px-6" contentContainerClassName="gap-3 pb-4">
        {genders.map((gender) => (
          <Card
            key={gender.id}
            onPress={() => setSelected(gender.id)}
            className={selected === gender.id ? 'border-2 border-primary bg-primary/5' : ''}>
            <View className="flex-row items-center gap-4">
              <Text className="text-4xl">{gender.icon}</Text>
              <Text className="text-lg text-foreground">{gender.label}</Text>
            </View>
          </Card>
        ))}
      </ScrollView>
    </ScreenLayout>
  );
}
