import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ArrowLeft, Crown, Check, Sparkles, TrendingUp, FileText, Camera, Download, X } from 'lucide-react-native';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const features = [
  { icon: Sparkles, title: 'AI-Powered Insights', desc: 'Get personalized nutrition recommendations' },
  { icon: TrendingUp, title: 'Advanced Analytics', desc: 'Detailed progress tracking and forecasting' },
  { icon: FileText, title: 'Weekly AI Reports', desc: 'Comprehensive health and nutrition analysis' },
  { icon: Camera, title: 'Food Recognition', desc: 'Snap a photo to log meals instantly' },
  { icon: Download, title: 'Export Reports', desc: 'Download and share your progress (PDF)' },
  { icon: Crown, title: 'Priority Support', desc: '24/7 premium customer support' },
];

const plans = [
  { id: 'monthly' as const, name: 'Monthly', price: '$9.99', period: '/month', badge: null, savings: null },
  { id: 'yearly' as const, name: 'Yearly', price: '$79.99', period: '/year', badge: 'Save 33%', savings: '$39.89/year' },
];

const comparison = [
  { feature: 'Basic meal tracking', free: true, premium: true },
  { feature: 'AI-powered insights', free: false, premium: true },
  { feature: 'Food photo recognition', free: false, premium: true },
  { feature: 'Weekly AI reports', free: false, premium: true },
  { feature: 'Export & share reports', free: false, premium: true },
];

export default function PremiumScreen() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView className="flex-1" contentContainerClassName="pb-24">
        <View className="bg-accent px-6 pt-4 pb-12">
          <Pressable onPress={() => router.back()} className="mb-6">
            <ArrowLeft size={24} color="#ffffff" />
          </Pressable>
          <View className="flex-row items-center gap-3 mb-4">
            <View className="w-16 h-16 bg-white/20 rounded-2xl items-center justify-center">
              <Crown size={32} color="#ffffff" />
            </View>
            <View>
              <Text className="text-3xl font-semibold text-white">Premium</Text>
              <Text className="text-white/80">Unlock your full potential</Text>
            </View>
          </View>
        </View>

        <View className="px-6 -mt-6 gap-6">
          <Card className="border-2 border-accent/30">
            <Text className="font-semibold text-foreground mb-4">Choose Your Plan</Text>
            <View className="gap-3">
              {plans.map((plan) => (
                <Pressable
                  key={plan.id}
                  onPress={() => setSelectedPlan(plan.id)}
                  className={`p-4 rounded-2xl border-2 ${selectedPlan === plan.id ? 'border-primary bg-primary/5' : 'border-border bg-white'}`}>
                  {plan.badge && (
                    <Text className="absolute -top-3 right-4 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full self-end">
                      {plan.badge}
                    </Text>
                  )}
                  <View className="flex-row items-center justify-between">
                    <View className="flex-1">
                      <Text className="font-semibold text-foreground">{plan.name}</Text>
                      {plan.savings && <Text className="text-xs text-primary font-medium">Save {plan.savings}</Text>}
                    </View>
                    <View className="items-end">
                      <Text className="text-2xl font-semibold text-foreground">{plan.price}</Text>
                      <Text className="text-sm text-muted-foreground">{plan.period}</Text>
                    </View>
                  </View>
                </Pressable>
              ))}
            </View>
          </Card>

          <View>
            <Text className="font-semibold text-foreground mb-4">Premium Features</Text>
            <Card>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <View key={feature.title} className={`flex-row items-start gap-3 ${index < features.length - 1 ? 'pb-4 mb-4 border-b border-border' : ''}`}>
                    <View className="w-10 h-10 bg-primary/10 rounded-xl items-center justify-center">
                      <Icon size={20} color="#1DB954" />
                    </View>
                    <View className="flex-1">
                      <Text className="font-medium text-foreground mb-1">{feature.title}</Text>
                      <Text className="text-sm text-muted-foreground">{feature.desc}</Text>
                    </View>
                    <Check size={20} color="#1DB954" />
                  </View>
                );
              })}
            </Card>
          </View>

          <View>
            <Text className="font-semibold text-foreground mb-4">Free vs Premium</Text>
            <Card>
              {comparison.map((row) => (
                <View key={row.feature} className="flex-row items-center justify-between py-2">
                  <Text className="text-sm text-foreground flex-1">{row.feature}</Text>
                  <View className="flex-row gap-8">
                    {row.free ? <Check size={18} color="#1DB954" /> : <X size={18} color="#6B7280" />}
                    <Check size={18} color="#1DB954" />
                  </View>
                </View>
              ))}
            </Card>
          </View>

          <Button fullWidth variant="premium" size="lg">Start 7-Day Free Trial</Button>
          <Text className="text-xs text-center text-muted-foreground">Cancel anytime. No commitment required.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
