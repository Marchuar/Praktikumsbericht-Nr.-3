import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { pageConfig } from "@/data/content";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

const navLabels: Record<string, string> = {
  "/": "Einf\u00fchrung",
  "/aufgaben": "Aufgaben & Ziele",
  "/analyse": "Analyse & Planung",
  "/durchfuehrung": "Durchf\u00fchrung",
  "/auswertung": "Auswertung",
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-glass-border bg-dark-900/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-8">
        <NavLink to="/" className="flex items-center gap-2.5 cursor-pointer shrink-0 mr-10">
          <FileText className="h-5 w-5 text-accent-indigo" />
          <span className="font-heading font-semibold text-sm sm:text-base text-text-primary whitespace-nowrap">
            Praktikumsbericht
            <span className="text-accent-indigo ml-1">Nr. 3</span>
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-3">
          {pageConfig.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              end
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap",
                  isActive
                    ? "bg-accent-indigo/15 text-accent-indigo"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                )
              }
            >
              {navLabels[page.path] || page.title}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden rounded-lg p-2.5 text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-glass-border bg-dark-900/95 backdrop-blur-xl px-8 py-4 space-y-1">
          {pageConfig.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              end
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 cursor-pointer",
                  isActive
                    ? "bg-accent-indigo/15 text-accent-indigo"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                )
              }
            >
              {page.title}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
