import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import AnalyticsChart from '../../components/AnalyticsChart';
import DashboardCard from '../../components/DashboardCard';
import JobsTable from '../../components/JobsTable';
import PostsPagination from '../../components/PostsPagination';
import { Code, LayoutDashboard, Newspaper, User } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="flex flex-col p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <DashboardCard
              title="Jobs"
              count={10}
              icon={<LayoutDashboard className='h-10 w-10 text-slate-500' />}
            />
            <DashboardCard
              title="Users"
              count={500}
              icon={<User className='h-10 w-10 text-slate-500' />}
            />
            <DashboardCard
              title="Posts"
              count={30}
              icon={<Newspaper className='h-10 w-10 text-slate-500' />}
            />
          </div>
          <AnalyticsChart />
          <JobsTable limit={5} title="Recent Jobs" />
          <PostsPagination />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
