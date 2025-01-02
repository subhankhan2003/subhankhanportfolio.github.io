import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: string[];
}

export const SkillCard = ({ icon, title, skills }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-surface rounded-lg p-6 border border-surface-light hover:border-primary transition-colors"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-primary">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-text-secondary">{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};