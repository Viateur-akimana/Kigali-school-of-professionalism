import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const generateTrendData = () => {
  return [...Array(6)].map((_, i) => ({
    month: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'][i],
    desktop: Math.floor(Math.random() * 1000) + 2000,
    mobile: Math.floor(Math.random() * 800) + 1500,
  }));
};

const generateWeeklyViewsData = () => {
  return [...Array(8)].map((_, i) => ({
    week: i + 17,
    desktop: Math.floor(Math.random() * 500) + 100,
    mobile: Math.floor(Math.random() * 300) + 50,
  }));
};

const SiteViewsChart = () => {
  const [trendData, setTrendData] = useState(generateTrendData());
  const [weeklyViewsData, setWeeklyViewsData] = useState(generateWeeklyViewsData());

  useEffect(() => {
    const interval = setInterval(() => {
      setTrendData(generateTrendData());
      setWeeklyViewsData(generateWeeklyViewsData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 flex space-x-4">
      <Card className="flex-1">
        <CardHeader>
          <h2 className="text-2xl font-bold">37.5K</h2>
          <p className="text-sm text-green-500">On track</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis hide={true} />
              <Line type="monotone" dataKey="desktop" stroke="#2563eb" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="mobile" stroke="#60a5fa" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="flex-1">
        <CardHeader>
          <h2 className="text-xl font-bold">Weekly Views</h2>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyViewsData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="week" axisLine={false} tickLine={false} />
              <YAxis hide={true} />
              <Bar dataKey="desktop" stackId="a" fill="#2563eb" />
              <Bar dataKey="mobile" stackId="a" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SiteViewsChart;