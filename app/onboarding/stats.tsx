import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ScreenHeader, ScreenLayout } from '@/components/ui/ScreenHeader';

export default function StatsScreen() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const isValid = age && height && weight;

  return (
    <ScreenLayout
      footer={
        <Button
          fullWidth
          size="lg"
          disabled={!isValid}
          onPress={() => router.push('/onboarding/activity')}>
          Continue
        </Button>
      }>
      <ScreenHeader
        title="Your Physical Stats"
        subtitle="Help us calculate your needs accurately"
        step="Step 2 of 6"
        onBack={() => router.back()}
      />
      <ScrollView className="flex-1 px-6" contentContainerClassName="gap-6 pb-4">
        <View>
          <Input label="Age" placeholder="25" value={age} onChangeText={setAge} keyboardType="numeric" />
          <Text className="text-xs text-muted-foreground mt-2 ml-1">Years</Text>
        </View>
        <View>
          <Input label="Height" placeholder="170" value={height} onChangeText={setHeight} keyboardType="numeric" />
          <Text className="text-xs text-muted-foreground mt-2 ml-1">Centimeters (cm)</Text>
        </View>
        <View>
          <Input label="Current Weight" placeholder="70" value={weight} onChangeText={setWeight} keyboardType="numeric" />
          <Text className="text-xs text-muted-foreground mt-2 ml-1">Kilograms (kg)</Text>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
