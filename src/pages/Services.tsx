import { DollarSign, FileCode, Database, CheckCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';

const serviceCards = [
  {
    icon: DollarSign,
    title: 'Revenue Cycle Management',
    description: 'PBI delivers a full range of Revenue Cycle Management proven medical billing services to streamline your billing processes and achieve fast and predictable collections...',
  },
  {
    icon: FileCode,
    title: 'Medical Coding',
    description: 'PBI has top notch medical coders who keep themselves on the most current coding regulations. We promise our customers 24 to 48 hour turnaround time on audit and delivery...',
  },
  {
    icon: Database,
    title: 'Data Entry/Conversion Services',
    description: 'PBI provides cost-effective data entry/conversion services at unsurpassed quality at desired turnaround time of our clients. Our medical data services are designed to simplify and streamline...',
  },
];

const differentiators = [
  'We are genuinely focused on delivering outcomes for our clients, not outputs.',
  'A successful delivery solution – proven to be delivering \'right the first time\'.',
  'Genuine end to end subject matter expertise – we understand process better.',
  'World-class communication facilities for seamless control.',
  'Flexible outsourcing models that boosts cash flow.',
  'Quality management driven by statistics that improves processes and profit margins in real time.',
  'Standardized end-to-end processes to meet agreed SLAs consistently.',
  'Comprehensive reports to track performance.',
  'State-of-the-art IT infrastructure with inbuilt diversity and redundancy.',
  'Scalability and continuity of resources.',
  'Guaranteed real-time help to resolve all your urgent issues.',
  'We follow industry best HR practices.',
  'Add highest quality expertise without increasing headcount.',
];

const Services = () => (
  <>
    <Hero
      title="Advanced AI Solutions"
      subtitle="Autonomous workflows and intelligent optimization for the modern enterprise. We don't just process data; we engineer outcomes."
    />

    <Section className="bg-transparent overflow-hidden">
      <div className="mx-auto max-w-5xl space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="glass-card rounded-[2.5rem] p-10 h-full flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-800">Intelligent Operations</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                As delivery experts, we value agility and so do our customers. We never stop evolving to create brilliantly simple solutions. Our services bring together our local and international expertise – all designed with our customers, and their customers in mind.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative aspect-square">
              {/* Abstract High-Tech Visual */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              <div className="relative glass-card h-full w-full rounded-[3rem] border-white/50 shadow-inner flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <Database className="w-32 h-32 text-primary opacity-40 group-hover:scale-110 transition-transform duration-700" />
                {/* Decorative lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute bottom-10 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[shimmer_2s_infinite]" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {serviceCards.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <ServiceCard icon={s.icon} title={s.title} description={s.description} className="h-full" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>

    {/* Key Differentiators */}
    <Section className="relative">
      <div className="absolute inset-0 -z-10 bg-primary/5 blur-[120px]" />
      <ScrollReveal>
        <h2 className="text-shimmer mb-16 text-center text-4xl font-black tracking-tighter sm:text-5xl">
          Core Differentiators
        </h2>
      </ScrollReveal>
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {differentiators.map((d, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="group flex items-center gap-4 glass-card rounded-2xl p-6 transition-all duration-300 hover:ai-glow hover:-translate-y-1">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <p className="text-sm font-bold text-slate-700 tracking-tight">{d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  </>
);

export default Services;
