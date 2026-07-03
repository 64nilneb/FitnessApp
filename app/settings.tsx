import { useState } from 'react';
import { Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ArrowLeft, Moon, Globe, Bell, Ruler } from 'lucide-react-native';
import { Card } from '@/components/ui/Card';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric');
  const [language, setLanguage] = useState('english');

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <View className="bg-white px-6 pt-4 pb-6 border-b border-border">
        <Pressable onPress={() => router.back()} className="mb-4">
          <ArrowLeft size={24} color="#1C1C1E" />
        </Pressable>
        <Text className="text-2xl font-semibold text-foreground">Settings</Text>
      </View>

      <ScrollView className="flex-1" contentContainerClassName="px-6 pt-6 pb-24 gap-6">
        <View>
          <Text className="text-sm font-semibold text-muted-foreground mb-3 px-1">Appearance</Text>
          <Card>
            <View className="flex-row items-center justify-between py-3">
              <View className="flex-row items-center gap-3">
                <Moon size={20} color="#6B7280" />
                <Text className="font-medium text-foreground">Dark Mode</Text>
              </View>
              <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ true: '#1DB954' }} />
            </View>
          </Card>
        </View>

        <View>
          <Text className="text-sm font-semibold text-muted-foreground mb-3 px-1">Units</Text>
          <Card>
            <View className="flex-row items-center gap-3 py-3 border-b border-border">
              <Ruler size={20} color="#6B7280" />
              <Text className="font-medium text-foreground">Measurement System</Text>
            </View>
            <View className="pt-3 gap-2">
              {[
                { id: 'metric' as const, label: 'Metric', desc: 'kg, cm, liters' },
                { id: 'imperial' as const, label: 'Imperial', desc: 'lbs, ft, oz' },
              ].map((u) => (
                <Pressable
                  key={u.id}
                  onPress={() => setUnits(u.id)}
                  className={`px-4 py-3 rounded-xl ${units === u.id ? 'bg-primary/10 border-2 border-primary' : 'bg-secondary/50'}`}>
                  <Text className="font-medium text-foreground">{u.label}</Text>
                  <Text className="text-sm text-muted-foreground">{u.desc}</Text>
                </Pressable>
              ))}
            </View>
          </Card>
        </View>

        <View>
          <Text className="text-sm font-semibold text-muted-foreground mb-3 px-1">Language</Text>
          <Card>
            <View className="flex-row items-center gap-3 py-3 border-b border-border">
              <Globe size={20} color="#6B7280" />
              <Text className="font-medium text-foreground">App Language</Text>
            </View>
            <View className="pt-3 gap-2">
              {['English', 'Spanish', 'French', 'German'].map((lang) => (
                <Pressable
                  key={lang}
                  onPress={() => setLanguage(lang.toLowerCase())}
                  className={`px-4 py-3 rounded-xl ${language === lang.toLowerCase() ? 'bg-primary/10 border-2 border-primary' : 'bg-secondary/50'}`}>
                  <Text className="font-medium text-foreground">{lang}</Text>
                </Pressable>
              ))}
            </View>
          </Card>
        </View>

        <View>
          <Text className="text-sm font-semibold text-muted-foreground mb-3 px-1">Notifications</Text>
          <Card>
            <View className="flex-row items-center justify-between py-3 border-b border-border">
              <View className="flex-row items-center gap-3">
                <Bell size={20} color="#6B7280" />
                <Text className="font-medium text-foreground">Push Notifications</Text>
              </View>
              <Switch value={notifications} onValueChange={setNotifications} trackColor={{ true: '#1DB954' }} />
            </View>
            {notifications && (
              <View className="pt-3 gap-3">
                {['Meal Reminders', 'Water Reminders', 'AI Insights', 'Weekly Reports'].map((item) => (
                  <View key={item} className="flex-row items-center justify-between py-2">
                    <Text className="text-sm text-foreground">{item}</Text>
                    <Switch value trackColor={{ true: '#1DB954' }} />
                  </View>
                ))}
              </View>
            )}
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
