import { LucideIcon } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

interface Feature {
  icon: LucideIcon;
  title: string;
  description?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

const colsClass = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

const FeatureGrid = ({ features, columns = 3 }: FeatureGridProps) => (
  <div className={`grid grid-cols-1 gap-6 ${colsClass[columns]}`}>
    {features.map((f, i) => (
      <ScrollReveal
        key={i}
        delay={i * 0.1}
        direction={i % 3 === 0 ? 'left' : i % 3 === 1 ? 'up' : 'right'}
        variant={i}
      >
        <div
          className="group flex flex-col items-start"
        >
          <div className="mb-4 inline-flex text-primary">
            <f.icon className="h-6 w-6" />
          </div>
          <h4 className="mb-2 text-xl font-bold text-foreground">{f.title}</h4>
          {f.description && (
            <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
          )}
        </div>
      </ScrollReveal>
    ))}
  </div>
);

export default FeatureGrid;
