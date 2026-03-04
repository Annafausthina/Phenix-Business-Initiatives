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
    <Hero title="Switch all your back office processes to us and we'll guarantee you'll save money!" />

    <Section>
      <div className="mx-auto max-w-4xl space-y-6">
        <ScrollReveal>
          <p className="text-muted-foreground leading-relaxed">
            Our services are designed to deliver value to the organizations that we serve and hence are motivated by the Success we share with our Clients.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <p className="text-muted-foreground leading-relaxed">
            PBI offers a portfolio of services designed to maximize the value for partners and clients in their business. We match our services to your precise needs to create the outcomes you want. We help our clients to optimize their organizational, managerial and production processes.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground leading-relaxed">
            As delivery experts, we value agility and so do our customers. We never stop evolving to create brilliantly simple solutions. Our services bring together our local and international expertise – all designed with our customers, and their customers in mind.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-muted-foreground leading-relaxed">
            Our talented team of professionals operates under an effective system of internal quality management and communication that corresponds to ISO level quality. Our deliverables satisfy the highest international standards. To enhance your experience at PBI, we want to make you feel comfortable and well-prepared when accessing our services.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground leading-relaxed">
            Our services are designed to support the continued expansion of our Clients and Alliance Partners, particularly in the difficult healthcare market. With organizations becoming increasingly diverse and globally competitive, our mission is to deliver the exceptional service levels using highly qualified professionals they need.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <p className="text-muted-foreground leading-relaxed">
            As a professional services firm, we know that value and trust are the main ingredients of a quality relationship — and that they are earned over more than a single engagement. No matter how big, medium or small you are, we can help you work smarter and reach your goals. PBI's wide ranging experience across healthcare/non-healthcare BPO services is grouped into the following services. Have a look at them and let's talk.
          </p>
        </ScrollReveal>
      </div>
    </Section>

    {/* Service cards */}
    <Section className="bg-card">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {serviceCards.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <ServiceCard icon={s.icon} title={s.title} description={s.description} className="h-full" />
          </ScrollReveal>
        ))}
      </div>
    </Section>

    {/* Key Differentiators */}
    <Section>
      <ScrollReveal>
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
          Key Differentiators
        </h2>
      </ScrollReveal>
      <div className="mx-auto max-w-3xl">
        <div className="grid grid-cols-1 gap-3">
          {differentiators.map((d, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  </>
);

export default Services;
