import { useState } from "react";
import { motion } from "framer-motion";
import { ShimmerText } from "@/components/ui/shimmer-text";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { PersonTabs, type ViewMode } from "@/components/ui/person-tabs";
import { AccordionCard } from "@/components/ui/accordion-card";
import { StatCard } from "@/components/ui/stat-card";
import { PersonBadge } from "@/components/ui/person-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { arseniSections, bohdanSections, type ContentBlock } from "@/data/sections";
import { arseniContent, bohdanContent, type PersonContent } from "@/data/content";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";
import { ArrowDown, Users, Globe, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatDef {
  icon: LucideIcon;
  label: string;
  value: string;
  accent: "blue" | "purple" | "indigo";
}

const arseniStats: StatDef[] = [
  { icon: Users, label: "Mitarbeiter", value: "18", accent: "blue" },
  { icon: Globe, label: "Gegr\u00fcndet", value: "2014", accent: "blue" },
  { icon: Code2, label: "Projekt", value: "Alphaverse", accent: "indigo" },
];

const bohdanStats: StatDef[] = [
  { icon: Users, label: "Mitgliedsunternehmen", value: "50+", accent: "purple" },
  { icon: Globe, label: "Gegr\u00fcndet", value: "2017", accent: "purple" },
  { icon: Code2, label: "Projekt", value: "BarCamp-App", accent: "indigo" },
];

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

export function EinfuehrungPage() {
  const [view, setView] = useState<ViewMode>("both");

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center">

        {/* Hero content */}
        <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 rounded-full border border-accent-indigo/30 bg-accent-indigo/10 px-6 py-2.5 text-sm font-medium text-accent-indigo"
          >
            3. Quartal &mdash; 2025/2026
          </motion.div>

          <ShimmerText
            className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold tracking-tight"
            variant="default"
            duration={2}
            delay={0.5}
          >
            Praktikumsbericht
          </ShimmerText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-4 text-2xl md:text-3xl font-heading font-light text-text-secondary"
          >
            Nr. 3
          </motion.p>

          {/* Gooey morphing text */}
          <div className="mt-12 h-20 w-full">
            <GooeyText
              texts={["Kalender", "Dashboard", "KI-Chat", "BarCamp", "Firebase", "Analytics"]}
              morphTime={1.5}
              cooldownTime={0.5}
              className="h-full font-bold"
              textClassName="text-accent-indigo"
            />
          </div>

          {/* Authors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-accent-blue" />
              <span className="text-text-primary font-medium">Arseni</span>
              <span className="text-text-muted text-sm">&mdash; alphanauten</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-glass-border" />
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-accent-purple" />
              <span className="text-text-primary font-medium">Bohdan</span>
              <span className="text-text-muted text-sm">&mdash; visibleRuhr</span>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-5 w-5 text-text-muted" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-24">
        <div className="mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold text-text-primary"
          >
            Einf&uuml;hrung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-text-muted"
          >
            Vorstellung des Praktikumsplatzes und Projekt&uuml;bersicht
          </motion.p>
          <div className="mx-auto mt-8 h-px w-24 bg-linear-to-r from-transparent via-accent-indigo/40 to-transparent" />

          {/* Person tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <PersonTabs active={view} onChange={setView} />
          </motion.div>
        </div>

        {view === "both" && (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <PersonColumn
              person={arseniContent}
              blocks={arseniSections.einfuehrung}
              stats={arseniStats}
              accent="blue"
              index={0}
            />
            <PersonColumn
              person={bohdanContent}
              blocks={bohdanSections.einfuehrung}
              stats={bohdanStats}
              accent="purple"
              index={1}
            />
          </div>
        )}

        {view === "arseni" && (
          <div className="mx-auto max-w-2xl">
            <PersonColumn
              person={arseniContent}
              blocks={arseniSections.einfuehrung}
              stats={arseniStats}
              accent="blue"
              index={0}
            />
          </div>
        )}

        {view === "bohdan" && (
          <div className="mx-auto max-w-2xl">
            <PersonColumn
              person={bohdanContent}
              blocks={bohdanSections.einfuehrung}
              stats={bohdanStats}
              accent="purple"
              index={0}
            />
          </div>
        )}
      </section>
    </>
  );
}
