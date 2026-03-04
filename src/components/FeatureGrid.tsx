import { LucideIcon } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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
  <div className={`grid grid-cols-1 gap-5 ${colsClass[columns]}`}>
    {features.map((f, i) => (
      <ScrollReveal key={i} delay={i * 0.07} direction="up">
        <div className="group flex flex-col gap-3 p-6 rounded-xl border border-border bg-card hover:border-amber-400/40 hover:bg-amber-400/3 transition-all duration-300">
          <div className="h-10 w-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-400/20 transition-colors">
            <f.icon className="h-5 w-5" />
          </div>
          <h4 className="text-sm font-bold text-foreground">{f.title}</h4>
          {f.description && (
            <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
          )}
        </div>
      </ScrollReveal>
    ))}
  </div>
);

export default FeatureGrid;
