import ScrollReveal from './ScrollReveal';

interface HeroProps {
  title: string;
  subtitle?: string;
}

const Hero = ({ title, subtitle }: HeroProps) => (
  <div className="relative overflow-hidden bg-[hsl(222,47%,7%)] pt-36 pb-24 px-4 sm:px-6 lg:px-8">
    <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />

    <div className="relative z-10 mx-auto max-w-7xl text-center">
      <ScrollReveal>
        <h1 className="text-white font-['Syne'] font-bold max-w-4xl mx-auto">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50 leading-relaxed">{subtitle}</p>
        )}
      </ScrollReveal>
    </div>
  </div>
);

export default Hero;
