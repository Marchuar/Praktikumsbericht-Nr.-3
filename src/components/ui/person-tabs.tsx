import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Users } from "lucide-react";

type ViewMode = "both" | "arseni" | "bohdan";

interface PersonTabsProps {
  active: ViewMode;
  onChange: (mode: ViewMode) => void;
}

const tabs: { value: ViewMode; label: string; color: string; bgColor: string }[] = [
  { value: "both", label: "Beide", color: "bg-accent-indigo", bgColor: "bg-accent-indigo/15" },
  { value: "arseni", label: "Arseni", color: "bg-accent-blue", bgColor: "bg-accent-blue/15" },
  { value: "bohdan", label: "Bohdan", color: "bg-accent-purple", bgColor: "bg-accent-purple/15" },
];

export function PersonTabs({ active, onChange }: PersonTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const updateIndicator = useCallback((el: HTMLButtonElement | null) => {
    if (!el || !indicatorRef.current) return;
    indicatorRef.current.style.left = `${el.offsetLeft}px`;
    indicatorRef.current.style.width = `${el.offsetWidth}px`;
  }, []);

  const activeIndex = tabs.findIndex((t) => t.value === active);
  const activeTab = tabs[activeIndex];

  return (
    <div className="flex items-center justify-center gap-2">
      <Users className="mr-1 h-4 w-4 text-text-muted" />
      <div ref={containerRef} className="relative inline-flex rounded-xl border border-glass-border bg-dark-800/60 p-1.5">
        {/* Sliding indicator */}
        <div
          ref={indicatorRef}
          className={cn(
            "absolute top-1.5 bottom-1.5 rounded-lg transition-all duration-300 ease-out",
            activeTab.bgColor
          )}
        />
        {tabs.map((tab) => (
          <button
            key={tab.value}
            ref={active === tab.value ? updateIndicator : undefined}
            onClick={() => onChange(tab.value)}
            className={cn(
              "relative z-[1] cursor-pointer rounded-lg px-5 py-2 text-sm font-medium transition-colors duration-200",
              active === tab.value
                ? "text-text-primary"
                : "text-text-muted hover:text-text-secondary"
            )}
          >
            <span className="flex items-center gap-2">
              <span
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  active === tab.value ? tab.color : "bg-dark-500"
                )}
              />
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export type { ViewMode };
