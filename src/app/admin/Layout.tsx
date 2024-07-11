import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Navbar />
      <div className="admin-content">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  )
}