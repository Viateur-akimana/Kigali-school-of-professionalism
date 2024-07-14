import Dashboard from './Dashboard'
import JobsTable from './jobs/JobsPage'
export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Dashboard />
      <JobsTable/>
    </div>
  )
}