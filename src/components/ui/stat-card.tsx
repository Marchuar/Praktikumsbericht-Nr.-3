import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  accent?: "blue" | "purple" | "indigo";
  delay?: number;
}

export function StatCard({ icon: Icon, label, value, accent = "indigo", delay = 0 }: StatCardProps) {
  const colors = {
    blue: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    purple: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
    indigo: "text-accent-indigo bg-accent-indigo/10 border-accent-indigo/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "flex items-center gap-3 rounded-xl border p-4",
        colors[accent]
      )}
    >
      <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", colors[accent])}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-heading font-bold text-text-primary break-words">{value}</p>
        <p className="text-xs text-text-muted break-words">{label}</p>
      </div>
    </motion.div>
  );
}
