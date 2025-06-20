import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  Receipt, 
  Zap, 
  AlertTriangle, 
  FileBarChart, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Power
} from 'lucide-react';

const Sidebar = ({ collapsed, setCollapsed }) => {
  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/customers', icon: Users, label: 'Customers' },
    { path: '/billing', icon: Receipt, label: 'Billing' },
    { path: '/assets', icon: Zap, label: 'Assets' },
    { path: '/outages', icon: AlertTriangle, label: 'Outages' },
    { path: '/reports', icon: FileBarChart, label: 'Reports' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className={`fixed left-0 top-0 h-full bg-white/90 backdrop-blur-xl border-r border-gray-200/50 shadow-xl z-30 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200/50">
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-electric-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Power className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">ElectriGrid</span>
          </motion.div>
        )}
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-8 px-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-3 mb-2 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-electric-500 to-emerald-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'
                  } ${!collapsed && 'group-hover:scale-110'}`} 
                />
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-4 left-4 right-4 p-4 bg-gradient-to-r from-electric-50 to-emerald-50 rounded-xl border border-electric-200/30"
        >
          <div className="text-sm text-gray-600">
            <div className="font-semibold text-gray-800">Admin Panel</div>
            <div>System Status: Online</div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Sidebar;