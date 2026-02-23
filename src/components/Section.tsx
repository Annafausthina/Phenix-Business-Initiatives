import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn('py-16 md:py-20 px-4 sm:px-6 lg:px-8', className)}>
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);

export default Section;
