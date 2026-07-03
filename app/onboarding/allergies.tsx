import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Check } from 'lucide-react-native';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ScreenHeader, ScreenLayout } from '@/components/ui/ScreenHeader';

const allergies = [
  { id: 'none', label: 'No Allergies', icon: '✅' },
  { id: 'dairy', label: 'Dairy', icon: '🥛' },
  { id: 'eggs', label: 'Eggs', icon: '🥚' },
  { id: 'nuts', label: 'Tree Nuts', icon: '🥜' },
  { id: 'peanuts', label: 'Peanuts', icon: '🥜' },
  { id: 'shellfish', label: 'Shellfish', icon: '🦐' },
  { id: 'fish', label: 'Fish', icon: '🐟' },
  { id: 'soy', label: 'Soy', icon: '🫘' },
  { id: 'wheat', label: 'Wheat', icon: '🌾' },
];

export default function AllergiesScreen() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleAllergy = (id: string) => {
    if (id === 'none') {
      setSelected(['none']);
    } else {
      const filtered = selected.filter((s) => s !== 'none');
      if (filtered.includes(id)) {
        setSelected(filtered.filter((s) => s !== id));
      } else {
        setSelected([...filtered, id]);
      }
    }
  };

  return (
    <ScreenLayout
      footer={
        <Button fullWidth size="lg" onPress={() => router.replace('/(tabs)')}>
          Complete Setup
        </Button>
      }>
      <ScreenHeader
        title="Food Allergies"
        subtitle="Select all that apply (optional)"
        step="Step 6 of 6"
        onBack={() => router.back()}
      />
      <ScrollView className="flex-1 px-6" contentContainerClassName="pb-4">
        <View className="flex-row flex-wrap gap-3">
          {allergies.map((allergy) => {
            const isSelected = selected.includes(allergy.id);
            return (
              <View key={allergy.id} className="w-[47%]">
                <Card
                  onPress={() => toggleAllergy(allergy.id)}
                  className={isSelected ? 'border-2 border-primary bg-primary/5' : ''}>
                  {isSelected && (
                    <View className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full items-center justify-center z-10">
                      <Check size={14} color="#ffffff" />
                    </View>
                  )}
                  <View className="items-center pt-2">
                    <Text className="text-4xl mb-2">{allergy.icon}</Text>
                    <Text className="font-medium text-sm text-foreground text-center">{allergy.label}</Text>
                  </View>
                </Card>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
