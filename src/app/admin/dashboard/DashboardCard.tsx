import React from 'react';
import { CardHeader, CardContent, Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count, icon }) => {
  return (
    <Card className='bg-slate-200 dark:bg-slate-800 p-4'>
      <CardContent className='text-slate-500 dark:text-slate-200'>
        <h3 className="text-3xl mb-4 text-center font-bold">{title}</h3>
        <div className="flex justify-center items-center gap-5" aria-setsize={72}>
          {icon}
          <h3 className="text-5xl font-semibold">{count}</h3>
        </div>
      </CardContent>
    </Card>
  );
}

export default DashboardCard