import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  accent?: "blue" | "purple";
  delay?: number;
}

export function GlassCard({
  children,
  className,
  accent = "blue",
  delay = 0,
}: GlassCardProps) {
  const accentStyles = {
    blue: "hover:border-accent-blue/30 hover:shadow-lg hover:shadow-accent-blue/5",
    purple: "hover:border-accent-purple/30 hover:shadow-lg hover:shadow-accent-purple/5",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(
        "rounded-2xl border border-glass-border bg-dark-800/60 backdrop-blur-xl overflow-hidden",
        "transition-all duration-300 hover:bg-dark-800/80",
        accentStyles[accent],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
