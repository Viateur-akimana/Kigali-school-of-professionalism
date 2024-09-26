"use client"
import SiteViewsChart  from './components/SiteViewsChart';
import Dashboard from './Dashboard'
import JobsTable from './jobs/page'
export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Dashboard />
      <SiteViewsChart/>
      <JobsTable/>
    </div>
  )
}