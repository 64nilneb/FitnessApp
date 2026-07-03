import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TrendingUp, Calendar, Download, FileText } from 'lucide-react-native';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const weightData = [
  { date: 'Mon', weight: 75.2 },
  { date: 'Tue', weight: 75.0 },
  { date: 'Wed', weight: 74.8 },
  { date: 'Thu', weight: 74.7 },
  { date: 'Fri', weight: 74.5 },
  { date: 'Sat', weight: 74.6 },
  { date: 'Sun', weight: 74.3 },
];

const calorieData = [
  { day: 'Mon', calories: 2050 },
  { day: 'Tue', calories: 2120 },
  { day: 'Wed', calories: 1980 },
  { day: 'Thu', calories: 2200 },
  { day: 'Fri', calories: 2100 },
  { day: 'Sat', calories: 2300 },
  { day: 'Sun', calories: 1950 },
];

const macroDistribution = [
  { name: 'Protein', value: 30, color: '#1DB954' },
  { name: 'Carbs', value: 45, color: '#3B82F6' },
  { name: 'Fat', value: 25, color: '#F59E0B' },
];

const measurements = [
  { label: 'Weight', current: '74.3 kg', change: '-0.9 kg', trend: 'down' },
  { label: 'BMI', current: '22.4', change: '-0.3', trend: 'down' },
  { label: 'Body Fat', current: '18.2%', change: '-1.1%', trend: 'down' },
  { label: 'Muscle Mass', current: '60.8 kg', change: '+0.4 kg', trend: 'up' },
];

function SimpleBarChart({ data, maxVal, color }: { data: { label: string; value: number }[]; maxVal: number; color: string }) {
  return (
    <View className="flex-row items-end justify-between h-40 px-2">
      {data.map((d) => (
        <View key={d.label} className="items-center flex-1">
          <View
            className="w-6 rounded-t-md"
            style={{ height: `${(d.value / maxVal) * 100}%`, backgroundColor: color, minHeight: 8 }}
          />
          <Text className="text-xs text-muted-foreground mt-2">{d.label}</Text>
        </View>
      ))}
    </View>
  );
}

export default function ProgressScreen() {
  const [timeRange, setTimeRange] = useState('week');

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <View className="bg-white px-6 pt-4 pb-6 border-b border-border">
        <Text className="text-2xl font-semibold text-foreground mb-4">Progress</Text>
        <View className="flex-row gap-2">
          {[
            { id: 'week', label: 'Week' },
            { id: 'month', label: 'Month' },
            { id: '3month', label: '3 Months' },
          ].map((range) => (
            <Pressable
              key={range.id}
              onPress={() => setTimeRange(range.id)}
              className={`px-4 py-2 rounded-xl ${timeRange === range.id ? 'bg-primary' : 'bg-secondary'}`}>
              <Text className={`text-sm ${timeRange === range.id ? 'text-white' : 'text-foreground'}`}>
                {range.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <ScrollView className="flex-1" contentContainerClassName="px-6 pt-6 pb-24 gap-6">
        <Card className="bg-accent/10 border border-accent/20">
          <View className="flex-row items-start gap-3 mb-4">
            <View className="w-10 h-10 bg-accent/20 rounded-full items-center justify-center">
              <FileText size={20} color="#D4AF37" />
            </View>
            <View className="flex-1">
              <View className="flex-row items-center gap-2 mb-1">
                <Text className="font-semibold text-foreground">AI Weekly Report</Text>
                <Text className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full">Premium</Text>
              </View>
              <Text className="text-sm text-muted-foreground">
                Outstanding week! You lost 0.9 kg and stayed within your calorie target 85% of the time.
              </Text>
            </View>
          </View>
          <Button size="sm" variant="premium" icon={<Download size={16} color="#ffffff" />}>
            Download Full Report
          </Button>
        </Card>

        <Card>
          <View className="flex-row items-center justify-between mb-4">
            <View>
              <Text className="font-semibold text-foreground mb-1">Weight Tracking</Text>
              <View className="flex-row items-center gap-2">
                <Text className="text-2xl font-semibold text-primary">74.3 kg</Text>
                <View className="flex-row items-center gap-1">
                  <TrendingUp size={16} color="#16a34a" />
                  <Text className="font-medium text-green-600">-0.9 kg</Text>
                </View>
              </View>
            </View>
            <Calendar size={20} color="#6B7280" />
          </View>
          <SimpleBarChart
            data={weightData.map((d) => ({ label: d.date, value: d.weight - 74 }))}
            maxVal={2}
            color="#1DB954"
          />
        </Card>

        <Card>
          <Text className="font-semibold text-foreground mb-4">Calorie Intake</Text>
          <SimpleBarChart
            data={calorieData.map((d) => ({ label: d.day, value: d.calories }))}
            maxVal={2500}
            color="#3B82F6"
          />
        </Card>

        <Card>
          <Text className="font-semibold text-foreground mb-4">Macro Distribution</Text>
          <View className="gap-3">
            {macroDistribution.map((macro) => (
              <View key={macro.name}>
                <View className="flex-row justify-between mb-1">
                  <Text className="text-sm text-foreground">{macro.name}</Text>
                  <Text className="text-sm text-muted-foreground">{macro.value}%</Text>
                </View>
                <View className="h-3 bg-secondary rounded-full overflow-hidden">
                  <View className="h-full rounded-full" style={{ width: `${macro.value}%`, backgroundColor: macro.color }} />
                </View>
              </View>
            ))}
          </View>
        </Card>

        <View>
          <Text className="font-semibold text-foreground mb-4">Body Measurements</Text>
          <View className="flex-row flex-wrap gap-3">
            {measurements.map((m) => (
              <View key={m.label} className="w-[47%]">
                <Card>
                  <Text className="text-xs text-muted-foreground mb-1">{m.label}</Text>
                  <Text className="text-lg font-semibold text-foreground">{m.current}</Text>
                  <Text className={`text-xs ${m.trend === 'down' ? 'text-green-600' : 'text-orange-500'}`}>{m.change}</Text>
                </Card>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
