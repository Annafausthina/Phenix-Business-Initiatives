import { DollarSign, FileCode, Database, CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';

const serviceCards = [
  {
    icon: DollarSign,
    title: 'Revenue Cycle Management',
    description: 'We deliver a full range of RCM services to streamline your billing processes and achieve fast and predictable collections. Our services cover the entire lifecycle from patient intake to final payment.',
    to: '/services',
  },
  {
    icon: FileCode,
    title: 'Medical Coding',
    description: 'Our top-notch medical coders maintain current knowledge of all coding regulations. We guarantee 24-48 hour turnaround on audit and delivery, ensuring full CCI and policy compliance.',
    to: '/services/medical-coding',
  },
  {
    icon: CheckCircle,
    title: 'Claims Management',
    description: 'Accurate and timely processing is critical for customer satisfaction. PBI follows a systematic workflow to quickly prepare healthcare claims for payment with unsurpassed precision.',
    to: '/services/claims-management',
  },
  {
    icon: Database,
    title: 'Data Entry/Conversion Services',
    description: 'We provide cost-effective data entry and conversion services at unsurpassed quality. Our solutions are designed to simplify and streamline your legacy data management.',
    to: '/services/data-entry-conversion',
  },
];

const differentiators = [
  'We are genuinely focused on delivering outcomes for our clients, not outputs.',
  'A successful delivery solution – proven to be delivering "right the first time".',
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
  <div className="relative overflow-hidden">

    {/* ── Hero ── */}
    <section className="relative pt-36 pb-24 px-4 bg-[hsl(222,47%,7%)]">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <span className="tag mb-6 inline-flex">Our Services</span>
          <h1 className="text-white font-['Syne'] font-extrabold mb-6 max-w-4xl mx-auto">
            Switch all your back office processes<br className="hidden md:block" /> to us and{' '}
            <span className="text-gold-shimmer">save money!</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            Premium BPO solutions designed to reduce costs, improve accuracy, and drive measurable results.
          </p>
        </ScrollReveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* ── Intro Text ── */}
    <Section>
      <div className="max-w-4xl mx-auto space-y-5">
        {[
          'Our services are designed to deliver value to the organizations that we serve and hence are motivated by the Success we share with our Clients.',
          'PBI offers a portfolio of services designed to maximize the value for partners and clients in their business. We match our services to your precise needs to create the outcomes you want. We help our clients to optimize their organizational, managerial and production processes.',
          'As delivery experts, we value agility and so do our customers. We never stop evolving to create brilliantly simple solutions. Our services bring together our local and international expertise – all designed with our customers, and their customers in mind.',
          'Our talented team of professionals operates under an effective system of internal quality management and communication that corresponds to ISO level quality.',
          'As a professional services firm, we know that value and trust are the main ingredients of a quality relationship — and that they are earned over more than a single engagement.',
        ].map((text, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <p className="text-muted-foreground leading-relaxed">{text}</p>
          </ScrollReveal>
        ))}
      </div>
    </Section>

    {/* ── Service Cards ── */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(222,47%,8%)]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-flex">What We Offer</span>
            <h2 className="text-white">Our Core Services</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.09} direction="up">
              <div className="group h-full flex flex-col p-7 rounded-2xl border border-white/8 bg-[hsl(222,47%,10%)] hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-5 h-12 w-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-['Syne'] font-bold text-white">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed flex-grow">{s.description}</p>
                {s.to && (
                  <Link
                    to={s.to}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:gap-2.5 transition-all"
                  >
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Key Differentiators ── */}
    <Section>
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="tag mb-4 inline-flex">Why PBI</span>
          <h2 className="text-foreground">Key Differentiators</h2>
        </div>
      </ScrollReveal>
      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-3">
        {differentiators.map((d, i) => (
          <ScrollReveal key={i} delay={i * 0.035}>
            <div className="check-row">
              <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  </div>
);

export default Services;
