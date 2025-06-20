import { motion } from 'framer-motion';

const AssetManagement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-20"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Asset Management</h1>
      <p className="text-gray-600">Coming soon...</p>
    </motion.div>
  );
};

export default AssetManagement;