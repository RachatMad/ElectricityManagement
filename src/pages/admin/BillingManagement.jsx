import { motion } from 'framer-motion';
import { 
  Receipt, 
  Calendar, 
  DollarSign, 
  AlertCircle,
  CheckCircle,
  Clock,
  Download,
  Send
} from 'lucide-react';

const BillingManagement = () => {
  const billingStats = [
    {
      title: 'Total Revenue',
      value: '$1,247,580',
      change: '+15.3%',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Pending Payments',
      value: '$85,420',
      change: '-5.2%',
      icon: Clock,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Overdue Bills',
      value: '$23,150',
      change: '+2.1%',
      icon: AlertCircle,
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Collected This Month',
      value: '$956,780',
      change: '+18.7%',
      icon: CheckCircle,
      color: 'from-blue-500 to-purple-600'
    }
  ];

  const recentBills = [
    {
      id: 'BILL-2024-001',
      customerName: 'John Smith',
      customerId: 'CUST001',
      amount: '$125.50',
      dueDate: '2024-01-15',
      status: 'Paid',
      billingPeriod: 'Dec 2023'
    },
    {
      id: 'BILL-2024-002',
      customerName: 'ABC Manufacturing Co.',
      customerId: 'CUST002',
      amount: '$2,850.00',
      dueDate: '2024-01-20',
      status: 'Pending',
      billingPeriod: 'Dec 2023'
    },
    {
      id: 'BILL-2024-003',
      customerName: 'Sarah Johnson',
      customerId: 'CUST003',
      amount: '$875.25',
      dueDate: '2024-01-10',
      status: 'Overdue',
      billingPeriod: 'Dec 2023'
    },
    {
      id: 'BILL-2024-004',
      customerName: 'Green Energy Hospital',
      customerId: 'CUST004',
      amount: '$5,200.00',
      dueDate: '2024-01-25',
      status: 'Pending',
      billingPeriod: 'Dec 2023'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Paid': return CheckCircle;
      case 'Pending': return Clock;
      case 'Overdue': return AlertCircle;
      default: return Clock;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Billing Management</h1>
          <p className="text-gray-600 mt-1">Manage customer bills and payment collections</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-electric-500 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all">
            <Receipt className="w-4 h-4" />
            <span>Generate Bills</span>
          </button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {billingStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-sm text-green-500 font-medium mt-2">{stat.change} vs last month</p>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all">
            <Receipt className="w-6 h-6 text-blue-600" />
            <div className="text-left">
              <div className="font-semibold text-blue-900">Generate Monthly Bills</div>
              <div className="text-sm text-blue-600">Create bills for all customers</div>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all">
            <Send className="w-6 h-6 text-green-600" />
            <div className="text-left">
              <div className="font-semibold text-green-900">Send Reminders</div>
              <div className="text-sm text-green-600">Notify overdue payments</div>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all">
            <Calendar className="w-6 h-6 text-purple-600" />
            <div className="text-left">
              <div className="font-semibold text-purple-900">Schedule Auto-Pay</div>
              <div className="text-sm text-purple-600">Set up recurring payments</div>
            </div>
          </button>
        </div>
      </motion.div>

      {/* Recent Bills Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Bills</h3>
            <button className="text-electric-500 hover:text-electric-600 text-sm font-medium">
              View All Bills
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Bill ID</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Customer</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Amount</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Due Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Period</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentBills.map((bill, index) => {
                const StatusIcon = getStatusIcon(bill.status);
                return (
                  <motion.tr
                    key={bill.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="py-4 px-6">
                      <div className="text-sm font-medium text-gray-900">{bill.id}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm font-medium text-gray-900">{bill.customerName}</div>
                      <div className="text-sm text-gray-500">{bill.customerId}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm font-semibold text-gray-900">{bill.amount}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900">{bill.dueDate}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-900">{bill.billingPeriod}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(bill.status)}`}>
                        <StatusIcon className="w-4 h-4 mr-1" />
                        {bill.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View
                        </button>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          Download
                        </button>
                        {bill.status === 'Pending' && (
                          <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                            Send
                          </button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default BillingManagement;