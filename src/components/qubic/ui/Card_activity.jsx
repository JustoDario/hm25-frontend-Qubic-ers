import { motion } from "framer-motion";

function CardActivity({ title, concept, wallet }) {
  return (
    <motion.div
      className="w-60 h-42 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm opacity-80">{concept}</p>
      </div>
      <div className="text-sm">
        <span className="opacity-70">Wallet:</span>
        <p className="font-mono truncate">{wallet}</p>
      </div>
    </motion.div>
  );
}

export default CardActivity;