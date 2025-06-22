import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  Search, 
  Bell, 
  User, 
  Settings, 
  LogOut,
  Sun,
  Moon,
  Zap,
  Activity
} from 'lucide-react';

const FloatingNavbar = ({ sidebarCollapsed, scrollY }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [2, -2]);
  const rotateY = useTransform(mouseX, [-100, 100], [-2, 2]);

  const notifications = [
    { id: 1, message: 'Critical: Power grid anomaly detected in Sector 7', time: '2 min ago', type: 'critical', priority: 'high' },
    { id: 2, message: 'Master data sync completed successfully', time: '15 min ago', type: 'success', priority: 'medium' },
    { id: 3, message: 'New admin user registration pending approval', time: '1 hour ago', type: 'info', priority: 'low' },
    { id: 4, message: 'Scheduled maintenance window starting in 2 hours', time: '2 hours ago', type: 'warning', priority: 'medium' },
  ];

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  return (
    <motion.header
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-4 right-4 z-40 transition-all duration-700 ease-out ${
        sidebarCollapsed ? 'left-24' : 'left-80'
      }`}
    >
      {/* Glassmorphism Container */}
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 p-[1px]">
          <div className="h-full w-full bg-slate-900/80 rounded-2xl"></div>
        </div>

        <div className="relative px-6 py-4">
          <div className="flex items-center justify-between space-x-6">
            {/* Search Bar */}
            <motion.div 
              className="flex-1 max-w-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="relative group">
                <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-300 ${
                  searchFocused ? 'text-blue-400' : 'text-gray-400'
                }`} />
                <motion.input
                  type="text"
                  placeholder="Search master data, users, grid status..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                  whileFocus={{ scale: 1.02 }}
                />
                
                {/* Search suggestions */}
                {searchFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-slate-800/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-2">
                      {['Power Grid Status', 'User Permissions', 'Billing Configuration', 'System Logs'].map((suggestion, index) => (
                        <motion.div
                          key={suggestion}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-all duration-200"
                        >
                          {suggestion}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* System Status */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="flex items-center space-x-2 px-3 py-2 bg-emerald-500/20 rounded-xl border border-emerald-500/30"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-emerald-400 rounded-full"
                />
                <span className="text-emerald-300 text-sm font-medium">Online</span>
              </motion.div>

              {/* Notifications */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.1, rotateZ: 15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  <Bell className="w-6 h-6" />
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold"
                  >
                    {notifications.length}
                  </motion.span>
                </motion.button>

                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="absolute right-0 mt-2 w-96 bg-slate-800/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 overflow-hidden"
                  >
                    <div className="p-4 border-b border-white/10">
                      <h3 className="font-semibold text-white flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-blue-400" />
                        System Notifications
                      </h3>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notification, index) => (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 border-b border-white/5 hover:bg-white/5 transition-all duration-200"
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-3 h-3 rounded-full mt-2 ${
                              notification.type === 'critical' ? 'bg-red-500 animate-pulse' :
                              notification.type === 'warning' ? 'bg-yellow-500' :
                              notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                            }`}></div>
                            <div className="flex-1">
                              <p className="text-sm text-white">{notification.message}</p>
                              <div className="flex items-center justify-between mt-2">
                                <p className="text-xs text-gray-400">{notification.time}</p>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  notification.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                                  notification.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                                  'bg-blue-500/20 text-blue-300'
                                }`}>
                                  {notification.priority}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Profile Menu */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-3 p-2 hover:bg-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900"
                    />
                  </div>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-semibold text-white">Master Admin</div>
                    <div className="text-xs text-gray-400">System Controller</div>
                  </div>
                </motion.button>

                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="absolute right-0 mt-2 w-64 bg-slate-800/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 overflow-hidden"
                  >
                    <div className="p-4 border-b border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Master Admin</div>
                          <div className="text-sm text-gray-400">admin@electrigrid.com</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      {[
                        { icon: User, label: 'Profile Settings', color: 'text-blue-400' },
                        { icon: Settings, label: 'System Config', color: 'text-purple-400' },
                        { icon: Zap, label: 'Power Controls', color: 'text-yellow-400' },
                        { icon: LogOut, label: 'Sign Out', color: 'text-red-400' }
                      ].map((item, index) => (
                        <motion.button
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                          className="flex items-center space-x-3 w-full px-3 py-3 text-left rounded-xl transition-all duration-200"
                        >
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                          <span className="text-gray-300">{item.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default FloatingNavbar;