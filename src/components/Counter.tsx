import { useState, useEffect } from "react";
import { Plus, Minus, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      setHighlight(true);
      setTimeout(() => setHighlight(false), 800); // Efek blink sementara
    }
  }, [count]);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(prev - 1, 0)); // Tidak turun di bawah 0
  const reset = () => setCount(0);

  return (
    <section id="counter" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
            Smart Counter
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 opacity-80 leading-relaxed">
            A minimal yet dynamic counter with smooth animations and interactive feedback.
          </p>
        </div>

        {/* Counter UI */}
        <div className="flex flex-col items-center justify-center">
          {/* Animated Number */}
          <motion.div
            className={`text-7xl font-bold ${highlight ? "text-blue-600 scale-110" : "text-gray-900 dark:text-gray-100"} mb-8`}
            animate={{ scale: highlight ? 1.2 : 1 }}
            transition={{ duration: 0.4 }}
          >
            {count}
          </motion.div>

          {/* Buttons */}
          <div className="flex space-x-6">
            <motion.button
              onClick={decrement}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.1 }}
              aria-label="Decrement counter"
            >
              <Minus size={24} />   
            </motion.button>

            <motion.button
              onClick={reset}
              className="flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.1 }}
              aria-label="Reset counter"
            >
              <RefreshCw size={20} className="mr-2" />
              Reset
            </motion.button>

            <motion.button
              onClick={increment}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.1 }}
              aria-label="Increment counter"
            >
              <Plus size={24} />
            </motion.button>
          </div>

          {/* Interactive Hint */}
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
            Every multiple of <span className="font-bold text-blue-600">10</span> will be highlighted!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Counter;