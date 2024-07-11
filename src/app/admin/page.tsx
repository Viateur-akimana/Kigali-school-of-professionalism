import Dashboard from './Dashboard'
import Navbar from "./components/Navbar"
export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
        <Navbar />
      <Dashboard />
    </div>
  )
}