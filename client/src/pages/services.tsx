import { motion } from "framer-motion";
import ServicesGrid from "@/components/sections/services-grid";

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ServicesGrid />
      </motion.div>
    </div>
  );
}
