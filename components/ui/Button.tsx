import { Pressable, Text, View } from 'react-native';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'premium';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  outline: 'border-2 border-border bg-transparent',
  ghost: 'bg-transparent',
  premium: 'bg-accent',
};

const textStyles: Record<ButtonVariant, string> = {
  primary: 'text-white',
  secondary: 'text-foreground',
  outline: 'text-foreground',
  ghost: 'text-foreground',
  premium: 'text-white',
};

const sizeStyles = {
  sm: 'px-4 py-2',
  md: 'px-6 py-3',
  lg: 'px-8 py-4',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onPress,
  disabled = false,
  icon,
  className,
  textClassName,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={cn(
        'flex-row items-center justify-center rounded-2xl',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        disabled && 'opacity-50',
        className,
      )}>
      {icon && <View className="mr-2">{icon}</View>}
      <Text className={cn('font-medium', textStyles[variant], textClassName)}>{children}</Text>
    </Pressable>
  );
}
