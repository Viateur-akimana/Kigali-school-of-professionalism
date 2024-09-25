import React from 'react';
import { CardContent, Card } from '@/components/ui/card';
import { Briefcase, CircleCheck, Folders, Newspaper, User } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactElement<{ size?: number; className?: string }>;
  subtext?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, subtext }) => {
  return (
    <Card className='bg-white dark:bg-slate-800 shadow-sm'>
      <CardContent className='p-6'>
        <div className="flex items-center justify-center space-x-4">
        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
            {React.cloneElement(icon, { size: 24, className: "text-[#4318FF] dark:text-blue-400" })}
          </div>
          <div>
            <p className="text-sm font-medium text-[#A3AED0] dark:text-slate-400">{title}</p>
            <h3 className="text-2xl font-semibold text-[#2B3674] mt-1">{value}</h3>
            {subtext && <p className="text-xs text-green-500 mt-1">{subtext}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const Dashboard: React.FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 p-6'>
      <DashboardCard title="Jobs" value="100" icon={<Briefcase />} />
      <DashboardCard title="Categories" value="200" icon={<Folders />} />
      <DashboardCard title="Users" value="900" icon={<User />} />
      <DashboardCard title="Courses" value="900" icon={<Newspaper />} />
      <DashboardCard title="New Tasks" value="154" icon={<CircleCheck />} />
      <DashboardCard title="Total Projects" value="2935" icon={<Folders />} />
    </div>
  );
}

export default Dashboard;
