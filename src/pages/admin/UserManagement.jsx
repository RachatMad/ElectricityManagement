import { motion } from 'framer-motion';

const UserManagement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-20"
    >
      <h1 className="text-3xl font-bold text-white mb-4">User Management</h1>
      <p className="text-gray-400">Advanced user management system coming soon...</p>
    </motion.div>
  );
};

export default UserManagement;