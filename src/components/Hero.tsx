import ScrollReveal from './ScrollReveal';

interface HeroProps {
  title: string;
  subtitle?: string;
}

const Hero = ({ title, subtitle }: HeroProps) => (
  <div className="relative overflow-hidden bg-transparent py-28 md:py-40 px-4 sm:px-6 lg:px-8 mt-20">
    {/* Decorative background orbits */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
      <div className="w-[600px] h-[600px] rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/5 animate-[spin_15s_linear_infinite_reverse]" />
    </div>

    <div className="mx-auto max-w-7xl text-center">
      <ScrollReveal>
        <h1 className="text-shimmer text-4xl font-black tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-600/80 md:text-xl">
            {subtitle}
          </p>
        )}
      </ScrollReveal>
    </div>
  </div>
);

export default Hero;
