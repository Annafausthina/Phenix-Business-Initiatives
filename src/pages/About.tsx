import { DollarSign, ShieldAlert, Target, CheckCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const benefits = [
  {
    icon: DollarSign,
    title: 'Manage Cost',
    items: ['Reduce Cost', 'Improved Cost Effectiveness', 'Predictability of cost', 'Economy of Scale', 'Apply money to core Business'],
  },
  {
    icon: ShieldAlert,
    title: 'Manage Risk',
    items: ['Identify threats & opportunities', 'Transfer, mitigate Risk', 'Access to new Skill set through Technology', 'Spreading of initial investment cost', 'Avoid non-core capital'],
  },
  {
    icon: Target,
    title: 'Strategy Management',
    items: ['Align Strategy and Business Goals', 'Enable Business Transformation', 'Build World Class Capability', 'Monitor risks of shortfall', 'Continuous plan and monitoring'],
  },
];

const testimonials = [
  {
    quote: 'I have been working with PBI for quite awhile now and I am extremely impressed with their professional attitude and approachable manner. Healthcare is a complex industry, but PBI have consistently understood my needs. They\'ve always got it right the first time - and on time. I simply wouldn\'t recommend anyone else!',
    author: '- CEO of a Billing Company in NJ',
  },
  {
    quote: 'PBI came highly recommended to us. Great businesses prove their worth to customers and I now recommend PBI myself! This is due to their excellent service, competitive pricing and outstanding customer care. In a world that\'s becoming so distant and digital, it\'s thoroughly refreshing to get such a personal touch.',
    author: '- Data Entry Company in London',
  },
  {
    quote: '"Having PBI on board is always reassuring because Billing is where our business risk is. You can trust them to repeatedly deliver with a no-nonsense approach." We always find their staff responsive and easy to communicate with and they understand the need for error-free billing and ensure we achieve our objectives.',
    author: '- Physician practicing in NJ',
  },
];

const About = () => (
  <>
    <Hero title="About our company & experienced staff" />

    <Section>
      <div className="mx-auto max-w-4xl space-y-6">
        <ScrollReveal>
          <p className="text-muted-foreground leading-relaxed">
            Phoenix Business Initiatives (PBI) is a young and vibrant company that aims to provide high quality services. At PBI, we strive to achieve the highest level of "Customer Satisfaction" possible. PBI was founded by seasoned business professionals with strong business and technology expertise in the BPO industry. With offices in Dallas, Texas (USA) and Hounslow, London (United Kingdom), the PBI's delivery team of dedicated professionals operates from their offshore Delivery Centre in India to ensure services are delivered on time at the premier level of quality.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground leading-relaxed">
            The most valuable asset PBI has to offer is our core team of professionals who are customer-driven, innovative and continuously updated to ensure that we keep pace with the rapid change that characterizes the healthcare industry.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-muted-foreground leading-relaxed">
            Our flexible outsourcing models are designed to meet clients' financial objectives so our prices are highly competitive. Our business model is effectively designed to allow you more time to focus on your core areas as we handle your business operations. PBI helps businesses operate more efficiently while creating closer relationships with customers. One size never fits all so we deliver services and solutions without limits.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground leading-relaxed">
            Our integrated services offer value for our customers by helping them in improving their business processes with minimum hassles and capital outlays. The perfect blend of technical excellence, business performance monitoring, business intelligence and customer experience management is what makes us endearing to our clients.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <p className="text-muted-foreground leading-relaxed">
            We follow a customer centered approach and hence we focus on knowing what you want to achieve and then align the right approach and methodologies to help you fulfill them. We back our services by elaborate assessments, detailed discussions, data analysis and recurrent observation.
          </p>
        </ScrollReveal>
      </div>
    </Section>

    {/* Benefits */}
    <Section className="bg-card">
      <ScrollReveal>
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
          Some highlights of benefits our clients enjoy
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {benefits.map((b, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="rounded-2xl border border-border bg-background p-6 h-full">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">{b.title}</h3>
              <ul className="space-y-2">
                {b.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>

    {/* Testimonials */}
    <Section>
      <ScrollReveal>
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
          What people say about us
        </h2>
      </ScrollReveal>
      <TestimonialCarousel testimonials={testimonials} />
    </Section>
  </>
);

export default About;
