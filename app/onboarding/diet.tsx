import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ScreenHeader, ScreenLayout } from '@/components/ui/ScreenHeader';

const preferences = [
  { id: 'none', label: 'No Preference', desc: 'Eat everything', icon: '🍽️' },
  { id: 'vegetarian', label: 'Vegetarian', desc: 'No meat or fish', icon: '🥗' },
  { id: 'vegan', label: 'Vegan', desc: 'No animal products', icon: '🌱' },
  { id: 'keto', label: 'Keto', desc: 'Low carb, high fat', icon: '🥑' },
  { id: 'paleo', label: 'Paleo', desc: 'Whole foods only', icon: '🥩' },
  { id: 'halal', label: 'Halal', desc: 'Islamic dietary laws', icon: '🕌' },
  { id: 'kosher', label: 'Kosher', desc: 'Jewish dietary laws', icon: '✡️' },
  { id: 'gluten-free', label: 'Gluten-Free', desc: 'No gluten', icon: '🌾' },
];

export default function DietScreen() {
  const [selected, setSelected] = useState('');

  return (
    <ScreenLayout
      footer={
        <Button
          fullWidth
          size="lg"
          disabled={!selected}
          onPress={() => router.push('/onboarding/allergies')}>
          Continue
        </Button>
      }>
      <ScreenHeader
        title="Dietary Preference"
        subtitle="Choose your eating style"
        step="Step 5 of 6"
        onBack={() => router.back()}
      />
      <ScrollView className="flex-1 px-6" contentContainerClassName="pb-4">
        <View className="flex-row flex-wrap gap-3">
          {preferences.map((pref) => (
            <View key={pref.id} className="w-[47%]">
              <Card
                onPress={() => setSelected(pref.id)}
                className={selected === pref.id ? 'border-2 border-primary bg-primary/5' : ''}>
                <View className="items-center">
                  <Text className="text-4xl mb-2">{pref.icon}</Text>
                  <Text className="font-medium text-sm text-foreground mb-1 text-center">{pref.label}</Text>
                  <Text className="text-xs text-muted-foreground text-center">{pref.desc}</Text>
                </View>
              </Card>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
