import React, { useState } from 'react';
import { TrendingUp, Calendar, Download, FileText } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

export function ProgressScreen() {
  const [timeRange, setTimeRange] = useState('week');
  
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
  
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-16 pb-6 sticky top-0 z-10 border-b border-border">
        <h1 className="text-2xl font-semibold mb-4">Progress</h1>
        
        {/* Time Range Selector */}
        <div className="flex gap-2">
          {['week', 'month', '3month'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-xl text-sm transition-all ${
                timeRange === range
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground'
              }`}
            >
              {range === 'week' ? 'Week' : range === 'month' ? 'Month' : '3 Months'}
            </button>
          ))}
        </div>
      </div>
      
      <div className="px-6 pt-6 space-y-6">
        {/* AI Weekly Report */}
        <Card className="bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText size={20} className="text-accent" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">AI Weekly Report</h3>
                <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full">Premium</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Outstanding week! You lost 0.9 kg and stayed within your calorie target 85% of the time. Your protein intake improved significantly.
              </p>
            </div>
          </div>
          <Button size="sm" variant="premium" icon={<Download size={16} />}>
            Download Full Report
          </Button>
        </Card>
        
        {/* Weight Progress Chart */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-semibold mb-1">Weight Tracking</h2>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-2xl font-semibold text-primary">74.3 kg</span>
                <div className="flex items-center gap-1 text-green-600">
                  <TrendingUp size={16} />
                  <span className="font-medium">-0.9 kg</span>
                </div>
              </div>
            </div>
            <button>
              <Calendar size={20} className="text-muted-foreground" />
            </button>
          </div>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="date"
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis
                  domain={[74, 76]}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#1DB954"
                  strokeWidth={3}
                  dot={{ fill: '#1DB954', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        {/* Body Measurements */}
        <div>
          <h2 className="font-semibold mb-4">Body Measurements</h2>
          <div className="grid grid-cols-2 gap-3">
            {measurements.map((measurement) => (
              <Card key={measurement.label}>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">{measurement.label}</p>
                  <p className="text-xl font-semibold mb-1">{measurement.current}</p>
                  <p className={`text-xs font-medium ${
                    measurement.trend === 'down' ? 'text-green-600' : 'text-primary'
                  }`}>
                    {measurement.change}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Calorie Intake Chart */}
        <Card>
          <h2 className="font-semibold mb-4">Weekly Calorie Intake</h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={calorieData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="day"
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <Tooltip />
                <Bar dataKey="calories" fill="#1DB954" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        {/* Macro Distribution */}
        <Card>
          <h2 className="font-semibold mb-4">Average Macro Distribution</h2>
          <div className="flex items-center justify-center gap-8">
            <div className="w-40 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={macroDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {macroDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {macroDistribution.map((macro) => (
                <div key={macro.name} className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: macro.color }}
                  />
                  <span className="text-sm">{macro.name}</span>
                  <span className="text-sm font-semibold ml-auto">{macro.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
