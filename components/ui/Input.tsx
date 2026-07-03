import { Text, TextInput, View } from 'react-native';
import { cn } from '@/lib/cn';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  icon?: React.ReactNode;
  label?: string;
  error?: string;
  className?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric';
}

export function Input({
  placeholder,
  value,
  onChangeText,
  icon,
  label,
  error,
  className,
  secureTextEntry,
  keyboardType = 'default',
}: InputProps) {
  return (
    <View className="w-full">
      {label && (
        <Text className="text-sm mb-2 text-foreground/80">{label}</Text>
      )}
      <View className="relative">
        {icon && (
          <View className="absolute left-4 top-0 bottom-0 justify-center z-10">
            {icon}
          </View>
        )}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          placeholderTextColor="#6B7280"
          className={cn(
            'w-full px-4 py-3 bg-white border border-border rounded-2xl text-foreground',
            icon ? 'pl-12' : undefined,
            className,
          )}
        />
      </View>
      {error && <Text className="text-sm text-red-500 mt-1">{error}</Text>}
    </View>
  );
}
