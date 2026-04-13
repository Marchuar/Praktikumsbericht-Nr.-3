import { cn } from "@/lib/utils";
import { Building2, Briefcase } from "lucide-react";

interface PersonBadgeProps {
  name: string;
  company: string;
  role: string;
  project: string;
  period: string;
  variant: "blue" | "purple";
}

export function PersonBadge({
  name,
  company,
  role,
  project,
  period,
  variant,
}: PersonBadgeProps) {
  const colors = {
    blue: {
      bg: "bg-accent-blue/10",
      border: "border-accent-blue/30",
      text: "text-accent-blue",
      dot: "bg-accent-blue",
    },
    purple: {
      bg: "bg-accent-purple/10",
      border: "border-accent-purple/30",
      text: "text-accent-purple",
      dot: "bg-accent-purple",
    },
  };

  const c = colors[variant];

  return (
    <div className={cn("flex items-start gap-4 rounded-xl border p-5", c.bg, c.border)}>
      <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold", c.bg, c.text)}>
        {name[0]}
      </div>
      <div className="min-w-0 space-y-1.5">
        <div className="flex items-center gap-2">
          <span className={cn("font-heading text-lg font-semibold leading-tight", c.text)}>{name}</span>
          <span className={cn("h-2 w-2 shrink-0 rounded-full", c.dot)} />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-secondary">
          <span className="inline-flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 shrink-0" />
            {company}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5 shrink-0" />
            {role}
          </span>
        </div>
        <p className="text-xs text-text-muted">
          Projekt: {project} &middot; {period}
        </p>
      </div>
    </div>
  );
}
