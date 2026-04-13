import { useState } from "react";
import { motion } from "framer-motion";
import { ShimmerText } from "@/components/ui/shimmer-text";
import { PersonTabs, type ViewMode } from "@/components/ui/person-tabs";
import { AccordionCard } from "@/components/ui/accordion-card";
import { StatCard } from "@/components/ui/stat-card";
import { PersonBadge } from "@/components/ui/person-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";
import { arseniSections, bohdanSections, type ContentBlock } from "@/data/sections";
import { arseniContent, bohdanContent, type PersonContent } from "@/data/content";
import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  LayoutDashboard,
  MessageSquare,
  Users,
  Database,
  Bell,
  Shield,
  Globe,
  Brain,
  Target,
  Lightbulb,
  CheckCircle,
  BarChart3,
  Code2,
  Layers,
} from "lucide-react";

type ContentKey = "einfuehrung" | "aufgaben" | "analyse" | "durchfuehrung" | "auswertung";

interface StatDef {
  icon: LucideIcon;
  label: string;
  value: string;
  accent: "blue" | "purple" | "indigo";
}

// Key stats per page per person
const pageStats: Record<ContentKey, { arseni: StatDef[]; bohdan: StatDef[] }> = {
  einfuehrung: {
    arseni: [
      { icon: Users, label: "Mitarbeiter", value: "18", accent: "blue" },
      { icon: Globe, label: "Gegr\u00fcndet", value: "2014", accent: "blue" },
      { icon: Code2, label: "Projekt", value: "Alphaverse", accent: "indigo" },
    ],
    bohdan: [
      { icon: Users, label: "Mitgliedsunternehmen", value: "50+", accent: "purple" },
      { icon: Globe, label: "Gegr\u00fcndet", value: "2017", accent: "purple" },
      { icon: Code2, label: "Projekt", value: "BarCamp-App", accent: "indigo" },
    ],
  },
  aufgaben: {
    arseni: [
      { icon: Calendar, label: "Kalender", value: "Fertigstellen", accent: "blue" },
      { icon: LayoutDashboard, label: "Dashboard", value: "Entwickeln", accent: "blue" },
      { icon: MessageSquare, label: "KI-Chat", value: "Eigene Idee", accent: "indigo" },
    ],
    bohdan: [
      { icon: Shield, label: "Benutzerrollen", value: "3 Rollen", accent: "purple" },
      { icon: Globe, label: "Echtzeit", value: "Live-Updates", accent: "purple" },
      { icon: Bell, label: "Benachrichtigungen", value: "Automatisch", accent: "indigo" },
    ],
  },
  analyse: {
    arseni: [
      { icon: Layers, label: "Kalenderansichten", value: "3 Ansichten", accent: "blue" },
      { icon: BarChart3, label: "Diagrammtypen", value: "Mehrere", accent: "blue" },
      { icon: Brain, label: "KI-API", value: "OpenAI", accent: "indigo" },
    ],
    bohdan: [
      { icon: Database, label: "Backend", value: "Firebase", accent: "purple" },
      { icon: Code2, label: "Frontend", value: "HTML/CSS/JS", accent: "purple" },
      { icon: Lightbulb, label: "Konzept", value: "\u00dcberarbeitet", accent: "indigo" },
    ],
  },
  durchfuehrung: {
    arseni: [
      { icon: Calendar, label: "Kalenderansichten", value: "3 Views", accent: "blue" },
      { icon: BarChart3, label: "Dashboard-Elemente", value: "6 Typen", accent: "blue" },
      { icon: MessageSquare, label: "KI-Chat", value: "OpenAI API", accent: "indigo" },
    ],
    bohdan: [
      { icon: Database, label: "Collections", value: "4 St\u00fcck", accent: "purple" },
      { icon: Shield, label: "Anmeldesystem", value: "E-Mail + PW", accent: "purple" },
      { icon: Bell, label: "Benachrichtigungen", value: "Echtzeit", accent: "indigo" },
    ],
  },
  auswertung: {
    arseni: [
      { icon: CheckCircle, label: "Ziele erreicht", value: "3 / 3", accent: "blue" },
      { icon: Target, label: "Gr\u00f6\u00dfte Challenge", value: "Medientypen", accent: "blue" },
      { icon: Lightbulb, label: "Highlight", value: "KI-Chat", accent: "indigo" },
    ],
    bohdan: [
      { icon: CheckCircle, label: "Funktionen", value: "Alle umgesetzt", accent: "purple" },
      { icon: Target, label: "Erkenntnis", value: "Planung zuerst", accent: "purple" },
      { icon: Lightbulb, label: "Gelernt", value: "Firebase & Rollen", accent: "indigo" },
    ],
  },
};

interface ContentPageProps {
  title: string;
  subtitle: string;
  contentKey: ContentKey;
  pageNumber: number;
}

function PersonColumn({
  person,
  blocks,
  stats,
  accent,
  index,
}: {
  person: PersonContent;
  blocks: ContentBlock[];
  stats: StatDef[];
  accent: "blue" | "purple";
  index: number;
}) {
  return (
    <div className="space-y-6">
      <GlassCard accent={accent} delay={index * 0.15}>
        <div className="p-7 lg:p-9">
          <PersonBadge
            name={person.name}
            company={person.company}
            role={person.role}
            project={person.project}
            period={person.period}
            variant={accent}
          />
        </div>
      </GlassCard>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <StatCard
            key={stat.label}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            accent={stat.accent}
            delay={0.2 + i * 0.08}
          />
        ))}
      </div>

      {/* Accordion content */}
      <div className="space-y-3">
        {blocks.map((block, i) => (
          <AccordionCard
            key={block.title}
            title={block.title}
            defaultOpen={i === 0}
            accent={accent}
            index={i}
          >
            {block.text}
            {block.images && block.images.length > 0 && (
              <ScreenshotGallery images={block.images} accent={accent} />
            )}
          </AccordionCard>
        ))}
      </div>
    </div>
  );
}

export function ContentPage({
  title,
  subtitle,
  contentKey,
  pageNumber,
}: ContentPageProps) {
  const [view, setView] = useState<ViewMode>("both");

  const arseniBlocks = arseniSections[contentKey];
  const bohdanBlocks = bohdanSections[contentKey];
  const stats = pageStats[contentKey];

  return (
    <>
      {/* Page Header */}
      <section className="w-full pt-16 pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-glass-border bg-glass-bg px-5 py-2 text-sm text-text-muted"
        >
          <span className="h-2 w-2 rounded-full bg-accent-indigo" />
          Abschnitt {pageNumber}
        </motion.div>

        <ShimmerText
          className="text-3xl md:text-5xl font-heading font-bold tracking-tight"
          variant="indigo"
          duration={2}
          delay={0.3}
        >
          {title}
        </ShimmerText>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-5 text-lg text-text-muted"
        >
          {subtitle}
        </motion.p>

        <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-accent-indigo/40 to-transparent" />

        {/* Person tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <PersonTabs active={view} onChange={setView} />
        </motion.div>
      </section>

      {/* Content */}
      <section className="w-full pb-24">
        {view === "both" && (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <PersonColumn
              person={arseniContent}
              blocks={arseniBlocks}
              stats={stats.arseni}
              accent="blue"
              index={0}
            />
            <PersonColumn
              person={bohdanContent}
              blocks={bohdanBlocks}
              stats={stats.bohdan}
              accent="purple"
              index={1}
            />
          </div>
        )}

        {view === "arseni" && (
          <div className="mx-auto max-w-2xl">
            <PersonColumn
              person={arseniContent}
              blocks={arseniBlocks}
              stats={stats.arseni}
              accent="blue"
              index={0}
            />
          </div>
        )}

        {view === "bohdan" && (
          <div className="mx-auto max-w-2xl">
            <PersonColumn
              person={bohdanContent}
              blocks={bohdanBlocks}
              stats={stats.bohdan}
              accent="purple"
              index={0}
            />
          </div>
        )}
      </section>
    </>
  );
}
