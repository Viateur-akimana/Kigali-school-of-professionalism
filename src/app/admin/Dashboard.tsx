import React from 'react';
import DashboardCard from './dashboard/DashboardCard';
import { Folders, Newspaper, User } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className='flex flex-wrap md:flex-row gap-5 justify-between m-5'>
      <DashboardCard title='Jobs' count={100} icon={<Newspaper size={62} />} />
      <DashboardCard title='Categories' count={200} icon={<Folders size={62} />} />
      <DashboardCard title='Users' count={900} icon={<User size={62} />} />
    </div>
  );
}

export default Dashboard;