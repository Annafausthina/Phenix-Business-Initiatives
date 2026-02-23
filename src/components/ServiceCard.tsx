import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

const ServiceCard = ({ icon: Icon, title, description, className, children }: ServiceCardProps) => (
  <motion.div
    className={cn(
      'group flex h-full flex-col p-8 glass-card rounded-3xl transition-all duration-500',
      'hover:ai-glow hover:-translate-y-2',
      className
    )}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03 }}
  >
    <div className="relative mb-6 inline-flex">
      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 p-3 bg-white/40 rounded-2xl border border-white/40 shadow-inner group-hover:text-primary transition-colors">
        <Icon className="h-7 w-7" />
      </div>
    </div>
    <h3 className="mb-3 text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-sm leading-relaxed text-muted-foreground/90 font-medium">
      {description}
    </p>
    {children && <div className="mt-auto pt-6">{children}</div>}
  </motion.div>
);

export default ServiceCard;
