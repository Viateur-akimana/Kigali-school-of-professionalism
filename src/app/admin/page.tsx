import Dashboard from './Dashboard'
import JobsTable from './jobs/page'
export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Dashboard />
      <JobsTable/>
    </div>
  )
}