import { motion } from "framer-motion";
import Timeline from "@/components/sections/timeline";
import TeamCarousel from "@/components/sections/team-carousel";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Timeline />
        <TeamCarousel />
      </motion.div>
    </div>
  );
}
