'use client';
import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from 'recharts';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { CiCalendar } from 'react-icons/ci';
import { GoTriangleUp } from 'react-icons/go';
import { MdBarChart } from 'react-icons/md';
import { TiTick } from "react-icons/ti";

interface TrendData {
  month: string;
  desktop: number;
  mobile: number;
}

interface WeeklyViewsData {
  week: number;
  desktop: number;
  mobile: number; 
}

const generateTrendData = (): TrendData[] => {
  return [...Array(6)].map((_, i) => ({
    month: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'][i],
    desktop: Math.floor(Math.random() * 500) + 100,
    mobile: Math.floor(Math.random() * 300) + 50,
  }));
};

const generateWeeklyViewsData = (): WeeklyViewsData[] => {
  return [...Array(9)].map((_, i) => ({
    week: i + 17,
    desktop: Math.floor(Math.random() * 300) + 50,
    mobile: Math.floor(Math.random() * 200) + 30,
  }));
};

const SiteViewsChart: React.FC = () => {
  const [trendData, setTrendData] = useState<TrendData[]>(generateTrendData());
  const [weeklyViewsData, setWeeklyViewsData] = useState<WeeklyViewsData[]>(generateWeeklyViewsData());

  useEffect(() => {
    const interval = setInterval(() => {
      setTrendData(generateTrendData());
      setWeeklyViewsData(generateWeeklyViewsData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex space-x-4 rounded-lg  p-6">
      <Card className="flex-1 rounded-lg shadow-lg p-2 space-y-4">
        <CardHeader>
        <div className="flex justify-between items-center">
            <div className='flex bg-[#F4F7FE] font-dm text-[#A3AED0] rounded p-2 pr-4'>
            <CiCalendar className="w-6 h-5  ml-2  font-bold" />
            <h2 className="text-2xm text-[#A3AED0] font-medium">This month</h2>
            </div>
            <div className="bg-blue-100 rounded-full p-2">
              <MdBarChart className="w-6 h-6 text-[#4318FF]" />
            </div>
          </div>
        
        </CardHeader>
        <CardContent className='flex space-x-4'>
        <div className="mt-2">
            <p className="text-3xm text-[#A3AED0] flex items-center">
              <span>Total Views</span> <GoTriangleUp className="w-4 h-4 text-[#05CD99] mr-1" /> <span className="text-[#05CD99] text-xs">+2.45%</span>
            </p>
            <p className="text-md text-[#A3AED0] mt-1 flex items-center">
              <TiTick className="w-4 h-4 text-white bg-[#05CD99] rounded-full mr-1" /> <span className="text-[#05CD99] font-bold">On track </span>
            </p>
          </div>
          <ResponsiveContainer width="100%" height={180} className="text-xs text-[#A3AED0] font-san font-light space-y-2" >
            <LineChart data={trendData} className="text-[#A3AED0]" >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis hide={true} />
              <Tooltip />
              <Line type="monotone" dataKey="desktop" stroke="#4318FF" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="mobile" stroke="#6AD2FF" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="flex-1 bg-white rounded-lg shadow-lg p-2">
          <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-[#1B2559] font-san font-bold">Weekly Views</h2>
            <div className="bg-blue-100 rounded-full p-2">
              <MdBarChart className="w-6 h-6 text-[#4318FF]" /> 
            </div>
          </div>
          </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={180} className="text-[#A3AED0]">
            <BarChart data={weeklyViewsData} barCategoryGap={20}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="week" axisLine={false} tickLine={false} />
              <YAxis hide={true} />
              <Tooltip />
              <Bar dataKey="desktop" stackId="a" fill="url(#colorDesktop)" radius={[10, 10, 0, 0]} barSize={10} />
              <Bar dataKey="mobile" stackId="a" fill="url(#colorMobile)" radius={[10, 10, 0, 0]} barSize={10} />
              <defs>
                <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4318FF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4318FF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1AA7EC" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#1AA7EC" stopOpacity={0} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SiteViewsChart;
