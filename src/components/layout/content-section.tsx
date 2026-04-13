import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { PersonBadge } from "@/components/ui/person-badge";
import type { PersonContent } from "@/data/content";

interface ContentSectionProps {
  person: PersonContent;
  contentKey: keyof Pick<
    PersonContent,
    "einfuehrung" | "aufgaben" | "analyse" | "durchfuehrung" | "auswertung"
  >;
  index: number;
}

export function ContentSection({ person, contentKey, index }: ContentSectionProps) {
  const variant = person.color === "blue" ? "blue" : "purple";
  const paragraphs = person[contentKey];

  return (
    <GlassCard accent={variant} delay={index * 0.15}>
      <div className="p-7 lg:p-9">
        <PersonBadge
          name={person.name}
          company={person.company}
          role={person.role}
          project={person.project}
          period={person.period}
          variant={variant}
        />

        <div className="mt-7 space-y-5">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="text-[15px] leading-7 text-text-secondary"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Placeholder for screenshots */}
        <div id={`screenshots-${person.name.toLowerCase()}-${contentKey}`} />
      </div>
    </GlassCard>
  );
}
