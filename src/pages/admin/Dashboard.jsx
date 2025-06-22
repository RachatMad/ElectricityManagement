import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import { 
  Zap, 
  Users, 
  DollarSign, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Activity,
  Power,
  Database,
  Shield,
  Cpu,
  HardDrive
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const [ref, inView] = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Enhanced sample data
  const energyData = [
    { name: 'Jan', consumption: 4000, generation: 4400, efficiency: 92 },
    { name: 'Feb', consumption: 3000, generation: 3800, efficiency: 89 },
    { name: 'Mar', consumption: 2000, generation: 2800, efficiency: 95 },
    { name: 'Apr', consumption: 2780, generation: 3200, efficiency: 91 },
    { name: 'May', consumption: 1890, generation: 2400, efficiency: 88 },
    { name: 'Jun', consumption: 2390, generation: 2800, efficiency: 94 },
  ];

  const masterDataStats = [
    {
      title: 'Total Grid Capacity',
      value: '15,847 MW',
      change: '+5.2%',
      changeType: 'increase',
      icon: Zap,
      color: 'from-electric-500 to-blue-600',
      description: 'Maximum power generation capacity'
    },
    {
      title: 'Active Substations',
      value: '1,247',
      change: '+12',
      changeType: 'increase',
      icon: Database,
      color: 'from-emerald-500 to-green-600',
      description: 'Operational power substations'
    },
    {
      title: 'System Efficiency',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'increase',
      icon: Cpu,
      color: 'from-purple-500 to-pink-600',
      description: 'Overall grid efficiency rating'
    },
    {
      title: 'Critical Alerts',
      value: '3',
      change: '-67%',
      changeType: 'decrease',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-600',
      description: 'High priority system alerts'
    }
  ];

  const systemMetrics = [
    { name: 'Power Generation', value: 85, color: '#10b981', unit: '%' },
    { name: 'Grid Stability', value: 92, color: '#3b82f6', unit: '%' },
    { name: 'Load Distribution', value: 78, color: '#8b5cf6', unit: '%' },
    { name: 'Maintenance Status', value: 96, color: '#f59e0b', unit: '%' },
  ];

  const recentActivities = [
    { 
      id: 1, 
      action: 'Master data synchronization completed', 
      time: '2 min ago', 
      type: 'success',
      details: 'All substation data updated successfully',
      priority: 'high'
    },
    { 
      id: 2, 
      action: 'Grid load balancing optimization initiated', 
      time: '15 min ago', 
      type: 'info',
      details: 'Automatic load redistribution in progress',
      priority: 'medium'
    },
    { 
      id: 3, 
      action: 'Critical: Transformer T-247 requires immediate attention', 
      time: '32 min ago', 
      type: 'critical',
      details: 'Temperature threshold exceeded in Sector 12',
      priority: 'critical'
    },
    { 
      id: 4, 
      action: 'New admin user access granted', 
      time: '1 hour ago', 
      type: 'success',
      details: 'Regional manager permissions activated',
      priority: 'low'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-8"
    >
      {/* Header with Glitch Effect */}
      <motion.div
        variants={itemVariants}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">
          <div className="flex items-center justify-between">
            <div>
              <motion.h1 
                className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Master Control Dashboard
              </motion.h1>
              <p className="text-gray-300 mt-2 text-lg">
                Real-time grid monitoring and system administration
              </p>
            </div>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Export Analytics
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                System Override
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Stats Cards */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {masterDataStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              rotateX: 5,
              z: 50
            }}
            className="group relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className={`text-right ${
                  stat.changeType === 'increase' ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {stat.changeType === 'increase' ? (
                    <TrendingUp className="w-5 h-5 inline" />
                  ) : (
                    <TrendingDown className="w-5 h-5 inline" />
                  )}
                  <span className="ml-1 font-semibold">{stat.change}</span>
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm font-medium mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-500 text-xs">{stat.description}</p>
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                animate={{
                  borderImage: [
                    'linear-gradient(0deg, transparent, transparent)',
                    'linear-gradient(180deg, rgba(139, 92, 246, 0.5), transparent)',
                    'linear-gradient(360deg, transparent, transparent)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* System Metrics */}
      <motion.div
        variants={itemVariants}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-7 h-7 mr-3 text-emerald-400" />
            System Performance Metrics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemMetrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke={metric.color}
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: metric.value / 100 }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                      style={{
                        pathLength: metric.value / 100,
                        strokeDasharray: "251.2",
                        strokeDashoffset: 251.2 * (1 - metric.value / 100),
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {metric.value}{metric.unit}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">{metric.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Energy Overview Chart */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02, rotateY: 2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Activity className="w-6 h-6 mr-3 text-blue-400" />
                  Grid Performance Analytics
                </h3>
                <p className="text-gray-400 text-sm">Real-time consumption vs generation</p>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-300">Consumption</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-300">Generation</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={energyData}>
                <defs>
                  <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorGeneration" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    color: 'white'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="consumption" 
                  stroke="#3b82f6" 
                  fillOpacity={1}
                  fill="url(#colorConsumption)"
                />
                <Area 
                  type="monotone" 
                  dataKey="generation" 
                  stroke="#10b981" 
                  fillOpacity={1}
                  fill="url(#colorGeneration)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* System Activities */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02, rotateY: -2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <HardDrive className="w-6 h-6 mr-3 text-purple-400" />
                System Activities
              </h3>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                View All Logs
              </button>
            </div>
            
            <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-3 h-3 rounded-full mt-2 ${
                    activity.type === 'critical' ? 'bg-red-500 animate-pulse' :
                    activity.type === 'success' ? 'bg-emerald-500' :
                    activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-white font-medium">{activity.action}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activity.priority === 'critical' ? 'bg-red-500/20 text-red-300' :
                        activity.priority === 'high' ? 'bg-orange-500/20 text-orange-300' :
                        activity.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {activity.priority}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{activity.details}</p>
                    <p className="text-gray-500 text-xs mt-2">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;