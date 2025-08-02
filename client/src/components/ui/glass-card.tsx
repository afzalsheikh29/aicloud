import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function GlassCard({ children, className, hover = true, onClick }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-morphism rounded-2xl p-6 cursor-pointer",
        hover && "hover-tilt transition-all duration-300",
        className
      )}
      whileHover={hover ? { scale: 1.02 } : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
