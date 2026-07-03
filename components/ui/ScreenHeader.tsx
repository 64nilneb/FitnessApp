import { Pressable, Text, View } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  step?: string;
  onBack?: () => void;
  showBack?: boolean;
}

export function ScreenHeader({
  title,
  subtitle,
  step,
  onBack,
  showBack = true,
}: ScreenHeaderProps) {
  const handleBack = onBack ?? (() => router.back());

  return (
    <View className="px-6 pt-4 pb-8">
      {showBack && (
        <Pressable onPress={handleBack} className="mb-6">
          <ArrowLeft size={24} color="#1C1C1E" />
        </Pressable>
      )}
      {step && (
        <Text className="text-sm text-muted-foreground mb-2">{step}</Text>
      )}
      <Text className="text-3xl font-semibold text-foreground mb-2">{title}</Text>
      {subtitle && (
        <Text className="text-muted-foreground">{subtitle}</Text>
      )}
    </View>
  );
}

interface ScreenLayoutProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function ScreenLayout({ children, footer }: ScreenLayoutProps) {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <View className="flex-1">{children}</View>
      {footer && <View className="px-6 pb-8">{footer}</View>}
    </SafeAreaView>
  );
}
