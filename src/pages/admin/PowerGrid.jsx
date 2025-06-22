import { motion } from 'framer-motion';

const PowerGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-20"
    >
      <h1 className="text-3xl font-bold text-white mb-4">Power Grid Control</h1>
      <p className="text-gray-400">Real-time grid monitoring and control coming soon...</p>
    </motion.div>
  );
};

export default PowerGrid;