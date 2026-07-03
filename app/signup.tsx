import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Mail, Lock, User, Apple, ArrowLeft } from 'lucide-react-native';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView className="flex-1" contentContainerClassName="pb-8">
        <View className="px-6 pt-4 pb-8">
          <Pressable onPress={() => router.back()} className="mb-6">
            <ArrowLeft size={24} color="#1C1C1E" />
          </Pressable>
          <Text className="text-3xl font-semibold text-foreground mb-2">Create Account</Text>
          <Text className="text-muted-foreground">Join us and start your healthy journey</Text>
        </View>

        <View className="px-6">
          <View className="gap-4 mb-8">
            <Input
              label="Full Name"
              placeholder="John Doe"
              value={name}
              onChangeText={setName}
              icon={<User size={20} color="#6B7280" />}
            />
            <Input
              label="Email"
              placeholder="john@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              icon={<Mail size={20} color="#6B7280" />}
            />
            <Input
              label="Password"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              icon={<Lock size={20} color="#6B7280" />}
            />
          </View>

          <Button
            fullWidth
            size="lg"
            onPress={() => router.push('/onboarding/gender')}
            className="mb-6">
            Continue
          </Button>

          <View className="flex-row items-center gap-4 mb-6">
            <View className="flex-1 h-px bg-border" />
            <Text className="text-sm text-muted-foreground">or</Text>
            <View className="flex-1 h-px bg-border" />
          </View>

          <View className="gap-3 mb-8">
            <Button fullWidth variant="outline" icon={<Mail size={20} color="#1C1C1E" />}>
              Continue with Google
            </Button>
            <Button fullWidth variant="outline" icon={<Apple size={20} color="#1C1C1E" />}>
              Continue with Apple
            </Button>
          </View>

          <Text className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Text className="text-primary font-medium" onPress={() => router.replace('/')}>
              Log In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
