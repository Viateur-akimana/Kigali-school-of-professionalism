import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import AnalyticsChart from '../../components/analytics/AnalyticsChart';
import DashboardCard from '../../components/dashboard/DashboardCard';
import JobsTable from '../../components/jobs/JobsTable';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='hidden md:block h-[100vh] w-[300px]'>
          <Sidebar />
        </div>
        <div className='p-5 w-full md:max-w-[1140px]'>
          <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
            <DashboardCard
              title='Jobs'
              count={10}
              icon={<Newspaper className='text-slate-500' size={72} />}
            />
            <DashboardCard
              title='Users'
              count={500}
              icon={<User className='text-slate-500' size={72} />}
            />
            <DashboardCard
              title='Categories'
              count={12}
              icon={<Folder className='text-slate-500' size={72} />}
            />
            <DashboardCard
              title='Comments'
              count={1200}
              icon={<MessageCircle className='text-slate-500' size={72} />}
            />
          </div>
          <AnalyticsChart />
          <JobsTable title='Latest Jobs' limit={5} />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
