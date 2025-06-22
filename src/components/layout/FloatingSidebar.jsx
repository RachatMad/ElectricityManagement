import { NavLink } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  LayoutDashboard, 
  Database, 
  Users, 
  Zap, 
  Receipt, 
  BarChart3, 
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  Power,
  Sparkles
} from 'lucide-react';

const FloatingSidebar = ({ collapsed, setCollapsed, scrollY }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard', color: 'from-blue-500 to-cyan-500' },
    { path: '/master-data', icon: Database, label: 'Master Data', color: 'from-purple-500 to-pink-500' },
    { path: '/users', icon: Users, label: 'User Management', color: 'from-green-500 to-emerald-500' },
    { path: '/power-grid', icon: Zap, label: 'Power Grid', color: 'from-yellow-500 to-orange-500' },
    { path: '/billing', icon: Receipt, label: 'Billing Control', color: 'from-red-500 to-pink-500' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics', color: 'from-indigo-500 to-purple-500' },
    { path: '/reports', icon: FileText, label: 'Reports', color: 'from-teal-500 to-cyan-500' },
    { path: '/settings', icon: Settings, label: 'Settings', color: 'from-gray-500 to-slate-500' },
  ];

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed left-4 top-4 bottom-4 z-50 transition-all duration-700 ease-out ${
        collapsed ? 'w-16' : 'w-72'
      }`}
    >
      {/* Glassmorphism Container */}
      <div className="h-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-emerald-500/20 p-[1px]">
          <div className="h-full w-full bg-slate-900/80 rounded-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Power className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-2 h-2 text-white" />
                  </motion.div>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    ElectriGrid
                  </h1>
                  <p className="text-xs text-gray-400">Admin Control</p>
                </div>
              </motion.div>
            )}
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              {collapsed ? (
                <ChevronRight className="w-5 h-5 text-white" />
              ) : (
                <ChevronLeft className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `group relative flex items-center space-x-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-white/20 to-white/10 shadow-lg'
                      : 'hover:bg-white/10'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        rotateY: 15,
                        rotateX: 5
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className={`relative w-10 h-10 rounded-xl flex items-center justify-center ${
                        isActive 
                          ? `bg-gradient-to-r ${item.color} shadow-lg` 
                          : 'bg-white/10 group-hover:bg-white/20'
                      }`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <item.icon 
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`} 
                      />
                      
                      {/* Glitch Effect */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-xl"
                          animate={{
                            boxShadow: [
                              '0 0 0 0 rgba(139, 92, 246, 0)',
                              '0 0 0 4px rgba(139, 92, 246, 0.3)',
                              '0 0 0 0 rgba(139, 92, 246, 0)',
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                    </motion.div>

                    {!collapsed && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex-1"
                      >
                        <span className={`font-medium transition-all duration-300 ${
                          isActive 
                            ? 'text-white' 
                            : 'text-gray-300 group-hover:text-white'
                        }`}>
                          {item.label}
                        </span>
                        
                        {/* Animated underline */}
                        <motion.div
                          className={`h-0.5 bg-gradient-to-r ${item.color} rounded-full mt-1 ${
                            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                          }`}
                          layoutId={`underline-${item.path}`}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      </motion.div>
                    )}

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute right-2 w-2 h-2 bg-white rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Footer */}
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-4 border-t border-white/10"
            >
              <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-lg flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">System Online</p>
                    <p className="text-xs text-gray-400">All systems operational</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingSidebar;