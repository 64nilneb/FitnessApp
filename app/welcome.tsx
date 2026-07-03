import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Leaf, Sparkles, TrendingUp, Apple } from 'lucide-react-native';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const features = [
  { icon: Sparkles, title: 'AI-Powered Insights', desc: 'Get personalized nutrition advice' },
  { icon: TrendingUp, title: 'Track Your Progress', desc: 'See your health journey unfold' },
  { icon: Apple, title: 'Smart Meal Plans', desc: 'Customized to your goals' },
];

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView contentContainerClassName="flex-grow pb-12">
        <View className="flex-1 items-center px-6 pt-12">
          <View className="w-32 h-32 bg-primary rounded-3xl items-center justify-center mb-8">
            <Leaf size={64} color="#ffffff" />
          </View>

          <Text className="text-4xl font-semibold text-center text-foreground mb-3">
            Welcome to NutriAI
          </Text>
          <Text className="text-lg text-muted-foreground text-center mb-12 max-w-sm">
            Your journey to a healthier lifestyle starts here
          </Text>

          <View className="w-full gap-4 mb-12">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="flex-row items-start gap-4">
                  <View className="w-12 h-12 bg-primary/10 rounded-xl items-center justify-center">
                    <Icon size={24} color="#1DB954" />
                  </View>
                  <View className="flex-1">
                    <Text className="font-medium text-foreground mb-1">{feature.title}</Text>
                    <Text className="text-sm text-muted-foreground">{feature.desc}</Text>
                  </View>
                </Card>
              );
            })}
          </View>
        </View>

        <View className="px-6 gap-3">
          <Button fullWidth size="lg" onPress={() => router.push('/signup')}>
            Get Started
          </Button>
          <Button fullWidth size="lg" variant="outline" onPress={() => router.replace('/')}>
            I Already Have an Account
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
