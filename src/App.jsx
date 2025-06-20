import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import AdminLayout from './components/layout/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import CustomerManagement from './pages/admin/CustomerManagement';
import BillingManagement from './pages/admin/BillingManagement';
import AssetManagement from './pages/admin/AssetManagement';
import OutageManagement from './pages/admin/OutageManagement';
import Reports from './pages/admin/Reports';
import Settings from './pages/admin/Settings';

function App() {
  return (
    <Router>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="customers" element={<CustomerManagement />} />
            <Route path="billing" element={<BillingManagement />} />
            <Route path="assets" element={<AssetManagement />} />
            <Route path="outages" element={<OutageManagement />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </motion.div>
    </Router>
  );
}

export default App;