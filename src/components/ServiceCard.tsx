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
      'group relative flex h-full flex-col rounded-[2.5rem] border border-white/20 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 overflow-hidden',
      'hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] hover:border-primary/40',
      className
    )}
    whileHover={{ scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
  >
    {/* Animated Background Glow */}
    <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,rgba(14,165,233,0.1)_180deg,transparent_210deg)] group-hover:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    <div className="relative z-10">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mb-4 text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
        {description}
      </p>

      {children && <div className="mt-auto pt-6">{children}</div>}
    </div>

    {/* Bottom Accent Line */}
    <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
  </motion.div>
);

export default ServiceCard;
