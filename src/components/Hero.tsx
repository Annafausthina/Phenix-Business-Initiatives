import ScrollReveal from './ScrollReveal';

interface HeroProps {
  title: string;
  subtitle?: string;
}

const Hero = ({ title, subtitle }: HeroProps) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-32 pb-20 md:pt-48 md:pb-28 px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl text-center">
      <ScrollReveal>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
        )}
      </ScrollReveal>
    </div>
  </div>
);

export default Hero;
