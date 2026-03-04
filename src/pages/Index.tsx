import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  DollarSign, FileCode, ClipboardList, Database,
  Award, BarChart3, TrendingUp, Eye, Gem, Search, BadgeCheck,
  Workflow, MessageCircle, Users, HeadphonesIcon, LineChart, Banknote,
  ArrowRight, Quote
} from 'lucide-react';
import { cn } from '@/lib/utils';
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
    quote: "I have been working with PBI for quite awhile now and I am extremely impressed with their professional attitude and approachable manner. Healthcare is a complex industry, but PBI have consistently understood my needs. They've always got it right the first time - and on time. I simply wouldn't recommend anyone else!",
    author: "- CEO of a Billing Company in NJ",
  },
  {
    quote: "PBI came highly recommended to us. Great businesses prove their worth to customers and I now recommend PBI myself! This is due to their excellent service, competitive pricing and outstanding customer care. In a world that's becoming so distant and digital, it's thoroughly refreshing to get such a personal touch.",
    author: "- Data Entry Company in London",
  },
  {
    quote: "Having PBI on board is always reassuring because Billing is where our business risk is. You can trust them to repeatedly deliver with a no-nonsense approach.” We always find their staff responsive and easy to communicate with and they understand the need for error-free billing and ensure we achieve our objectives.”",
    author: "- Physician practicing in NJ",
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
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.9]);

  return (
    <div className="relative overflow-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-40 pb-12 px-4 overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">

          {/* Futuristic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />

          {/* Animated Scanning Line */}
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-1 bg-primary/20 backdrop-blur-sm z-10 shadow-[0_0_20px_rgba(14,165,233,0.3)] pointer-events-none"
          />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Evolution 2030: Next-Gen Healthcare Ops
              </span>

              <h1 className="text-shimmer text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
                {heroSlides[currentSlide].tagline}
              </h1>

              <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link
                  to="/services"
                  className="group relative px-8 py-4 rounded-2xl bg-primary text-white font-bold text-lg overflow-hidden shadow-2xl shadow-primary/30 transition-all hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore AI Solutions <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>

                <Link
                  to="/contacts"
                  className="px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-md border-2 border-primary/20 text-primary font-bold text-lg transition-all hover:bg-primary/5 hover:border-primary/40 shadow-xl shadow-primary/5"
                >
                  Partner With Us
                </Link>

                <div className="flex -space-x-3 ml-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden flex items-center justify-center text-[10px] font-bold">
                      AI-{i}
                    </div>
                  ))}
                  <div className="pl-6 text-sm font-semibold text-foreground/60 flex items-center">
                    AI-Enhanced Resource Management
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="relative aspect-square flex flex-col justify-center gap-12">
              {/* Fake UI Data Visualization */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <h4 className="font-bold text-primary">Operational Efficiency</h4>
                  <span className="text-xs font-mono text-primary animate-pulse">LIVE ANALYTICS</span>
                </div>
                <div className="h-32 flex items-end gap-2">
                  {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">RCM Accuracy</span>
                  <div className="text-3xl font-black text-foreground">99.8%</div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Scaling Rate</span>
                  <div className="text-3xl font-black text-primary">12.5x</div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-bold text-foreground">Future-Proof Certified</div>
                  <div className="text-sm text-muted-foreground">Certified ISO 2030 Healthcare Compliance</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={cn(
                'h-1.5 transition-all duration-500 rounded-full',
                i === currentSlide ? 'w-12 bg-primary' : 'w-4 bg-primary/20 hover:bg-primary/40'
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services */}
      <Section>
        <ScrollReveal variant={2}>
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            We are experienced BPO professionals
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              direction="up"
              variant={1}
            >
              <div className="flex flex-col group">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground/80">
                  {s.description}
                </p>
                <div className="mt-auto">
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
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
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <ScrollReveal variant={3} direction="left">
            <div className="flex flex-col">
              <h3 className="mb-4 text-2xl font-bold text-foreground">Who we are?</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Phoenix Business Initiatives (PBI) is a young and vibrant company that aims to provide high quality services. At PBI, we strive to achieve the highest level of "Customer Satisfaction" possible. With offices in Tampa & Jacksonville, Florida the PBI's team of dedicated professionals operates from their offshore location in India to ensure services...
              </p>
              <Link to="/about" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15} variant={1}>
            <div className="flex flex-col">
              <h3 className="mb-4 text-2xl font-bold text-foreground">What we do?</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our services are designed to deliver value to the organizations that we serve and hence are motivated by the success we share with our clients. We offer the following healthcare services:
              </p>
              <ul className="mt-6 space-y-2 text-base text-muted-foreground">
                <li>• Revenue Cycle Management</li>
                <li>• Medical Coding</li>
                <li>• Data Entry / Conversion</li>
              </ul>
              <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3} variant={3} direction="right">
            <div className="flex flex-col">
              <h3 className="mb-4 text-2xl font-bold text-foreground">Security & HIPAA</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Security is of utmost importance at PBI that is why we protect all patient data with the highest form of security possible. Our servers use the highest quality firewalls, providing greater security than a typical office server. All paper documents (if any are printed) are properly shredded, file transfer done through secure FTP, we have the technology to work...
              </p>
              <Link to="/security" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto rounded-[1.5rem] bg-primary p-6 md:p-8 text-center text-white shadow-2xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/60 dark:bg-white/5 rounded-full blur-3xl group-hover:bg-white/80 dark:bg-white/10 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />

            <h2 className="text-2xl md:text-4xl font-black mb-3 relative z-10">
              We are interested in hearing from you.
            </h2>
            <p className="text-white/90 text-base md:text-lg font-medium mb-8 relative z-10">
              Write about your primary interest right now!
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-sm font-bold text-primary transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-white/20 relative z-10"
            >
              Submit the form! <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* Testimonials */}
      <Section className="bg-transparent mt-10">
        <ScrollReveal variant={2}>
          <h2 className="mb-16 text-center text-3xl md:text-5xl lg:text-6xl font-black text-primary">
            What people say about us
          </h2>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1} variant={1}>
              <div className="h-full flex gap-4 group">
                <Quote className="h-10 w-10 text-foreground shrink-0 mt-0" />
                <div className="flex flex-col h-full">
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-semibold mb-6">
                    {t.quote}
                  </p>
                  <div className="mt-auto text-right">
                    <p className="font-black text-foreground text-sm md:text-base tracking-tighter">
                      {t.author}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Index;
