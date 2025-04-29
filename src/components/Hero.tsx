import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById("content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video className="w-full h-full object-cover blur-md" autoPlay loop muted>
          <source src="/mineworks.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 sm:px-12 max-w-5xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Next-Level Creativity
          </span>
          <span className="block mt-2">Revolutionizing Digital Design.</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-xl max-w-3xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Experience cutting-edge visuals and seamless interactions. This is design, redefined.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 0, 255, 0.6)" }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <motion.button
          onClick={scrollToContent}
          aria-label="Scroll down"
          className="text-white hover:text-blue-400 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <ArrowDown size={30} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;