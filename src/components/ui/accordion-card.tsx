import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface AccordionCardProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  accent?: "blue" | "purple";
  index?: number;
}

export function AccordionCard({
  title,
  children,
  defaultOpen = false,
  accent = "blue",
  index = 0,
}: AccordionCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  const accentColors = {
    blue: {
      dot: "bg-accent-blue",
      hover: "hover:border-accent-blue/20",
      title: open ? "text-accent-blue" : "text-text-primary",
    },
    purple: {
      dot: "bg-accent-purple",
      hover: "hover:border-accent-purple/20",
      title: open ? "text-accent-purple" : "text-text-primary",
    },
  };

  const c = accentColors[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className={cn(
        "rounded-xl border border-glass-border bg-dark-800/40 transition-all duration-200",
        c.hover,
        open && "bg-dark-800/70"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center gap-3 p-5 text-left"
      >
        <span className={cn("h-2 w-2 shrink-0 rounded-full transition-colors", c.dot)} />
        <span className={cn("flex-1 text-[15px] font-medium transition-colors", c.title)}>
          {title}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 shrink-0 text-text-muted" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 text-[15px] leading-7 text-text-secondary break-words overflow-hidden">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
