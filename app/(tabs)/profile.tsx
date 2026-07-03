import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import {
  ChevronRight, User, Target, Bell, Lock, HelpCircle, FileText, Crown, LogOut, Settings,
} from 'lucide-react-native';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const userStats = [
  { label: 'Current Weight', value: '74.3 kg', change: '-0.9 kg' },
  { label: 'Goal Weight', value: '72.0 kg', change: '2.3 kg to go' },
  { label: 'Days Active', value: '42', change: 'Great streak!' },
];

const menuSections = [
  {
    title: 'Account',
    items: [
      { icon: User, label: 'Personal Information' },
      { icon: Target, label: 'Goals & Preferences' },
      { icon: Bell, label: 'Notifications' },
    ],
  },
  {
    title: 'App',
    items: [
      { icon: Settings, label: 'Settings', route: '/settings' as const },
      { icon: Lock, label: 'Privacy & Security' },
      { icon: HelpCircle, label: 'Help & Support' },
      { icon: FileText, label: 'Terms & Privacy Policy' },
    ],
  },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView className="flex-1" contentContainerClassName="pb-24">
        <View className="bg-primary px-6 pt-4 pb-12">
          <View className="flex-row items-center gap-4 mb-6">
            <View className="w-20 h-20 bg-white/20 rounded-full items-center justify-center">
              <Text className="text-white text-2xl font-semibold">JD</Text>
            </View>
            <View>
              <Text className="text-2xl font-semibold text-white mb-1">John Doe</Text>
              <Text className="text-white/80">john.doe@email.com</Text>
            </View>
          </View>
          <View className="flex-row gap-3">
            {userStats.map((stat) => (
              <Card key={stat.label} className="flex-1 bg-white/10 border border-white/20 items-center">
                <Text className="text-white/80 text-xs mb-1">{stat.label}</Text>
                <Text className="text-white font-semibold">{stat.value}</Text>
                <Text className="text-white/60 text-xs">{stat.change}</Text>
              </Card>
            ))}
          </View>
        </View>

        <View className="px-6 -mt-6 gap-6">
          <Card className="bg-accent overflow-hidden">
            <View className="flex-row items-start justify-between mb-3">
              <View className="flex-row items-center gap-2">
                <Crown size={24} color="#ffffff" />
                <Text className="font-semibold text-lg text-white">Upgrade to Premium</Text>
              </View>
            </View>
            <Text className="text-white/90 text-sm mb-4 leading-relaxed">
              Unlock AI-powered insights, personalized meal plans, and advanced analytics
            </Text>
            <Button variant="secondary" size="sm" onPress={() => router.push('/premium')} className="bg-white self-start">
              Learn More
            </Button>
          </Card>

          {menuSections.map((section) => (
            <View key={section.title}>
              <Text className="text-sm font-semibold text-muted-foreground mb-3 px-1">{section.title}</Text>
              <Card>
                {section.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Pressable
                      key={item.label}
                      onPress={() => 'route' in item && item.route && router.push(item.route)}
                      className={`flex-row items-center justify-between py-3 ${index < section.items.length - 1 ? 'border-b border-border' : ''}`}>
                      <View className="flex-row items-center gap-3">
                        <Icon size={20} color="#6B7280" />
                        <Text className="font-medium text-foreground">{item.label}</Text>
                      </View>
                      <ChevronRight size={20} color="#6B7280" />
                    </Pressable>
                  );
                })}
              </Card>
            </View>
          ))}

          <Text className="text-center text-sm text-muted-foreground py-4">NutriAI Version 1.0.0</Text>

          <Button
            fullWidth
            variant="outline"
            icon={<LogOut size={20} color="#EF4444" />}
            onPress={() => router.replace('/')}
            className="border-red-500 mb-4"
            textClassName="text-red-500">
            Log Out
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
