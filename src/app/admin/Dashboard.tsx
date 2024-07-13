import React from 'react'
import DashBoardCard from './dashboard/DashboardCard'
import { Folders, Newspaper, User } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className='flex  justify-between gap-5 m-5 '>
      <DashBoardCard title='Jobs' count={100} icon={<Newspaper size={62}/> } />
      <DashBoardCard title='Categories' count={200} icon={<Folders size={62}/> } />
      <DashBoardCard title='Users' count={900} icon={<User size={62}/> } />
    </div>
  )
}

export default Dashboard