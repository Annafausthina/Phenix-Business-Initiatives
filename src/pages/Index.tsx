import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  DollarSign, FileCode, ClipboardList, Database,
  Award, BarChart3, TrendingUp, Eye, Gem, Search, BadgeCheck,
  Workflow, MessageCircle, Users, HeadphonesIcon, LineChart, Banknote,
  ArrowRight,
} from 'lucide-react';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';
import FeatureGrid from '@/components/FeatureGrid';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const heroSlides = [
  { tagline: 'Focus!', subtitle: 'Our work is dedicated to the prosperity of our clients!' },
  { tagline: 'Assurance!', subtitle: 'We can dramatically improve your profit margin' },
  { tagline: 'Teamwork!', subtitle: 'Experience our quick and efficient implementation process' },
];

const services = [
  {
    icon: DollarSign,
    title: 'Revenue Cycle Management',
    description: 'We deliver a full range of RCM services to streamline your billing processes and achieve fast and predictable collections. We provide a broad spectrum of billing services including, but not limited to the following...',
  },
  {
    icon: FileCode,
    title: 'Medical Coding',
    description: 'We have top notch medical coders who keep themselves on the most current coding regulations. We promise our customers 24 to 48 hour turnaround time on audit and delivery. We are fully compliant with all of the Correct Coding Initiatives (CCI) and Local Medical Review Policies...',
  },
  {
    icon: ClipboardList,
    title: 'Claims Management',
    description: 'Recognizing that the accurate and timely processing and payment of claims is a critical customer satisfaction measure for TPAs and health plans alike, PBI follows a systematic workflow to quickly prepare healthcare claims for payment...',
  },
  {
    icon: Database,
    title: 'Data Entry/Conversion Services',
    description: 'We provide cost-effective data entry & conversion services at unsurpassed quality at desired turnaround time of our clients. Our data services are designed to simplify and streamline...',
  },
];

const whyChooseUs = [
  { icon: Award, title: 'Experience & expertise' },
  { icon: BarChart3, title: 'Measurable results' },
  { icon: TrendingUp, title: 'Proof of performance' },
  { icon: Eye, title: 'Transparency & integrity' },
  { icon: Gem, title: 'Bespoke service' },
  { icon: Search, title: 'Attention to detail' },
  { icon: BadgeCheck, title: 'High quality at low pricing' },
];

const segmentedApproach = [
  { icon: Workflow, title: 'Process', description: 'We have standardized end-to-end processes to meet agreed SLAs consistently. Our process framework is designed to provide continuous improvements.' },
  { icon: MessageCircle, title: 'Communication', description: 'We ensure our expert team is always available when you need us. No matter what you need help with, no matter where you are, you can always give us a call / send us a mail.' },
  { icon: Users, title: 'People', description: 'We have a scalable pool of dedicated people with deep revenue cycle expertise. They are our most valuable resource reflecting the spirit of the company at all times.' },
  { icon: HeadphonesIcon, title: 'Support', description: 'We deliver outstanding customer support on all our services. Our team is dedicated to providing you with an excellent customer support experience in a timely manner.' },
  { icon: LineChart, title: 'Analytics', description: 'Our expert analytics empowers you to track and improve the performance of your business. We bring in high impact business intelligence that will bridge the gaps.' },
  { icon: Banknote, title: 'Cash flow', description: 'We have designed our business model in such a way that it saves you time, cuts operating costs and increases your cash flow. We want you to practice profitability.' },
];

const testimonials = [
  {
    quote: 'Having PBI on board is always reassuring because Billing is where our business risk is. You can trust them to do the job and they repeatedly deliver with a down-to-earth, no-nonsense approach." We always find their staff responsive and easy to communicate with and they understand the need for error-free billing and ensure we achieve our objectives.',
    author: '- Physician practicing in NJ',
  },
  {
    quote: 'PBI came highly recommended to us. Great businesses prove their worth to customers and I now recommend PBI myself! This is due to their excellent service, competitive pricing and outstanding customer care. In a world that\'s becoming so distant and digital, it\'s thoroughly refreshing to get such a personal touch.',
    author: '- Data Entry Company in London',
  },
  {
    quote: 'I have been working with PBI for quite awhile now and I am extremely impressed with their professional attitude and approachable manner. Healthcare is a complex industry, but PBI have consistently understood my needs. They\'ve always got it right the first time - and on time. I simply wouldn\'t recommend anyone else!',
    author: '- CEO of a Billing Company in NJ',
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 400], [0, -30]);

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden px-4 py-8 md:py-16 pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative z-10 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                Next-Gen Healthcare Operations
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? {} : { opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                >
                  <h1 className="text-shimmer mb-6 text-5xl font-black leading-tight tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl">
                    {heroSlides[currentSlide].tagline}
                  </h1>
                  <p className="max-w-xl text-lg font-medium leading-relaxed text-slate-600/90 md:text-xl">
                    {heroSlides[currentSlide].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="rounded-2xl bg-primary px-8 py-4 font-bold text-white shadow-[0_20px_40px_-10px_rgba(176,78,36,0.3)] transition-all hover:scale-105 hover:bg-primary/90 active:scale-95"
                >
                  Explore AI Solutions
                </Link>
                <Link
                  to="/contacts"
                  className="rounded-2xl border border-primary/20 bg-white/40 px-8 py-4 font-bold text-primary backdrop-blur-md transition-all hover:bg-white/60 active:scale-95"
                >
                  Partner With Us
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-primary' : 'w-4 bg-primary/20'}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative perspective-1000 lg:h-[600px]">
              <motion.div
                style={prefersReducedMotion ? undefined : { y: heroParallax }}
                className="relative z-10 grid h-full w-full grid-cols-2 grid-rows-2 gap-4"
              >
                {/* Visual Dashboard Elements */}
                <div className="glass-card flex flex-col justify-between rounded-[2.5rem] p-8 hover:ai-glow transition-all duration-500">
                  <div className="h-12 w-12 rounded-2xl bg-primary/20 p-2.5">
                    <TrendingUp className="h-full w-full text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-slate-800">98.5%</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Accuracy Rate</div>
                  </div>
                </div>
                <div className="glass-card col-start-2 row-span-2 flex flex-col justify-end rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent p-8 shadow-2xl transition-all duration-500 hover:ai-glow">
                  <div className="mb-auto h-20 w-20 rounded-[2rem] bg-white/60 p-5 shadow-inner">
                    <Workflow className="h-full w-full text-primary" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-1 w-full rounded-full bg-slate-200">
                      <motion.div animate={{ width: ['20%', '80%', '60%'] }} transition={{ duration: 4, repeat: Infinity }} className="h-full rounded-full bg-primary" />
                    </div>
                    <div className="h-1 w-[80%] rounded-full bg-slate-200">
                      <motion.div animate={{ width: ['40%', '90%', '70%'] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="h-full rounded-full bg-primary/60" />
                    </div>
                    <div className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500">Processing Node Alpha</div>
                  </div>
                </div>
                <div className="glass-card flex flex-col justify-center gap-4 rounded-[2.5rem] border-primary/20 p-8 hover:ai-glow transition-all duration-500">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-10 w-10 rounded-full border-4 border-white bg-slate-200" />
                    ))}
                  </div>
                  <div className="text-sm font-bold text-slate-700">Join 4,000+ experts</div>
                </div>
              </motion.div>

              {/* Decorative AI Ring */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 bg-gradient-to-tr from-primary/5 to-transparent blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <Section>
        <ScrollReveal variant={2}>
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            We are experienced BPO professionals
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              direction={i % 2 === 0 ? 'up' : 'up'}
              variant={1}
            >
              <ServiceCard icon={s.icon} title={s.title} description={s.description}>
                <div className="flex justify-end">
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </ServiceCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section className="bg-card">
        <ScrollReveal variant={2}>
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Why clients choose us?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
            We have the expertise, enthusiasm, flexibility and commitment to deliver results time after time and to deadline. It is a combination of all of the following characteristics that make us unique.
          </p>
        </ScrollReveal>
        <div className="mt-12">
          <FeatureGrid features={whyChooseUs} columns={4} />
        </div>
      </Section>

      {/* Segmented approach */}
      <Section>
        <ScrollReveal variant={2}>
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Have a look through our segmented approach
          </h2>
        </ScrollReveal>
        <div className="mt-12">
          <FeatureGrid features={segmentedApproach} columns={3} />
        </div>
      </Section>

      {/* Who/What/Security */}
      <Section className="bg-card">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <ScrollReveal variant={3} direction="left">
            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Who we are?</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Phoenix Business Initiatives (PBI) is a young and vibrant company that aims to provide high quality services. At PBI, we strive to achieve the highest level of "Customer Satisfaction" possible. With offices in Tampa & Jacksonville, Florida the PBI's team of dedicated professionals operates from their offshore location in India to ensure services...
              </p>
              <Link to="/about" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15} variant={1}>
            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">What we do?</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our services are designed to deliver value to the organizations that we serve and hence are motivated by the success we share with our clients. We offer the following healthcare services:
              </p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>• Revenue Cycle Management</li>
                <li>• Medical Coding</li>
                <li>• Data Entry / Conversion</li>
              </ul>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3} variant={3} direction="right">
            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Security & HIPAA</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Security is of utmost importance at PBI that is why we protect all patient data with the highest form of security possible. Our servers use the highest quality firewalls, providing greater security than a typical office server. All paper documents (if any are printed) are properly shredded, file transfer done through secure FTP, we have the technology to work...
              </p>
              <Link to="/security" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <ScrollReveal>
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-10 md:p-14 text-center text-primary-foreground">
            <h2 className="text-2xl font-bold sm:text-3xl">We are interested in hearing from you.</h2>
            <p className="mt-3 text-primary-foreground/80">Write about your primary interest right now!</p>
            <Link
              to="/contacts"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.02] shadow-lg"
            >
              Submit the form! <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* Testimonials */}
      <Section className="bg-card">
        <ScrollReveal variant={2}>
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
            What people say about us
          </h2>
        </ScrollReveal>
        <TestimonialCarousel testimonials={testimonials} />
      </Section>
    </>
  );
};

export default Index;
