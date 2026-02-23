import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** 0 = fade-up (default) | 1 = zoom | 2 = letter blur | 3 = slide */
  variant?: number;
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  variant = 0,
}: ScrollRevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  /* Direction-based offset */
  const offset = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  /* Variant-based initial state tweaks */
  const variantConfig = [
    /* 0 – smooth fade-up (default) */
    {
      initial: { opacity: 0, y: offset.y, x: offset.x, filter: 'blur(2px)' },
      animate: { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' },
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
    /* 1 – elegant zoom in */
    {
      initial: { opacity: 0, scale: 0.93, y: offset.y * 0.5, filter: 'blur(3px)' },
      animate: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' },
      transition: { duration: 0.65, ease: [0.34, 1.2, 0.64, 1] as [number, number, number, number] },
    },
    /* 2 – letter / heading reveal */
    {
      initial: { opacity: 0, y: offset.y, letterSpacing: '0.18em', filter: 'blur(5px)' },
      animate: { opacity: 1, y: 0, letterSpacing: 'inherit', filter: 'blur(0px)' },
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
    /* 3 – slide with spring bounce */
    {
      initial: { opacity: 0, x: offset.x !== 0 ? offset.x : offset.y, y: offset.x !== 0 ? 0 : offset.y },
      animate: { opacity: 1, x: 0, y: 0 },
      transition: { type: 'spring' as const, stiffness: 120, damping: 16, delay },
    },
  ];

  const cfg = variantConfig[variant % variantConfig.length];

  return (
    <motion.div
      initial={cfg.initial}
      whileInView={cfg.animate}
      viewport={{ once: false, amount: 0.18, margin: '-5% 0px' }}
      transition={{ ...cfg.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
