import { Pressable, View } from 'react-native';
import { cn } from '@/lib/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

export function Card({ children, className, onPress }: CardProps) {
  const Wrapper = onPress ? Pressable : View;

  return (
    <Wrapper
      onPress={onPress}
      className={cn('bg-card rounded-3xl p-5 shadow-sm', className)}>
      {children}
    </Wrapper>
  );
}
