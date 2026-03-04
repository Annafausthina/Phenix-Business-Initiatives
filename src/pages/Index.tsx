import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DollarSign, FileCode, ClipboardList, Database,
  Award, BarChart3, TrendingUp, Eye, Gem, Search, BadgeCheck,
  Workflow, MessageCircle, Users, HeadphonesIcon, LineChart, Banknote,
  ArrowRight, Quote, CheckCircle, ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';
import FeatureGrid from '@/components/FeatureGrid';

const heroSlides = [
  { tagline: 'Focus.', subtitle: 'Our work is dedicated to the prosperity of our clients' },
  { tagline: 'Assurance.', subtitle: 'We can dramatically improve your profit margin' },
  { tagline: 'Teamwork.', subtitle: 'Experience our quick and efficient implementation process' },
];

const services = [
  {
    icon: DollarSign,
    title: 'Revenue Cycle Management',
    description: 'We deliver a full range of RCM services to streamline your billing processes and achieve fast and predictable collections.',
    to: '/services',
  },
  {
    icon: FileCode,
    title: 'Medical Coding',
    description: 'Top-notch medical coders who keep on the most current coding regulations with 24-48 hour turnaround time.',
    to: '/services/medical-coding',
  },
  {
    icon: ClipboardList,
    title: 'Claims Management',
    description: 'A systematic workflow to quickly prepare healthcare claims for payment with accuracy and speed.',
    to: '/services/claims-management',
  },
  {
    icon: Database,
    title: 'Data Entry / Conversion',
    description: 'Cost-effective data entry & conversion services at unsurpassed quality at your desired turnaround time.',
    to: '/services/data-entry-conversion',
  },
];

const whyChooseUs = [
  { icon: Award, title: 'Experience & Expertise' },
  { icon: BarChart3, title: 'Measurable Results' },
  { icon: TrendingUp, title: 'Proof of Performance' },
  { icon: Eye, title: 'Transparency & Integrity' },
  { icon: Gem, title: 'Bespoke Service' },
  { icon: Search, title: 'Attention to Detail' },
  { icon: BadgeCheck, title: 'High Quality, Low Pricing' },
];

const segmentedApproach = [
  { icon: Workflow, title: 'Process', description: 'Standardized end-to-end processes to meet agreed SLAs consistently. Our process framework is designed to provide continuous improvements.' },
  { icon: MessageCircle, title: 'Communication', description: 'Our expert team is always available when you need us. No matter what you need help with, you can always reach us.' },
  { icon: Users, title: 'People', description: 'A scalable pool of dedicated people with deep revenue cycle expertise. They are our most valuable resource.' },
  { icon: HeadphonesIcon, title: 'Support', description: 'Outstanding customer support on all our services. Our team is dedicated to providing excellent support in a timely manner.' },
  { icon: LineChart, title: 'Analytics', description: 'Expert analytics empowers you to track and improve business performance. We bring high-impact business intelligence.' },
  { icon: Banknote, title: 'Cash Flow', description: 'Our business model saves you time, cuts operating costs and increases your cash flow. We want you to practice profitability.' },
];

const testimonials = [
  {
    quote: "I have been working with PBI for quite awhile now and I am extremely impressed with their professional attitude. Healthcare is complex, but PBI have consistently understood my needs. They've always got it right the first time — and on time.",
    author: "CEO of a Billing Company in NJ",
  },
  {
    quote: "PBI came highly recommended to us. Great businesses prove their worth to customers and I now recommend PBI myself! Due to their excellent service, competitive pricing and outstanding customer care.",
    author: "Data Entry Company in London",
  },
  {
    quote: "Having PBI on board is always reassuring because Billing is where our business risk is. You can trust them to repeatedly deliver with a no-nonsense approach. Their staff is responsive and easy to communicate with.",
    author: "Physician practicing in NJ",
  },
];

const stats = [
  { value: '99.8%', label: 'Coding Accuracy' },
  { value: '24h', label: 'Avg. Turnaround' },
  { value: '15+', label: 'Years Experience' },
  { value: '3', label: 'Global Offices' },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO SECTION — Dark, Cinematic, Bold
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(222,47%,7%)] pt-20">

        {/* Background grid dots */}
        <div className="absolute inset-0 bg-dots opacity-40" />

        {/* Diagonal amber accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Animated gold line */}
        <motion.div
          animate={{ scaleX: [0, 1, 0], x: ['-50%', '150%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
          className="absolute top-1/2 left-0 h-px w-48 bg-gradient-to-r from-transparent via-amber-400 to-transparent pointer-events-none"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Tag */}
              <div className="tag mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                Premium Healthcare BPO Services
              </div>

              {/* Headline with slide */}
              <div className="relative h-[1.2em] overflow-hidden mb-4">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentSlide}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-white font-['Syne'] font-extrabold leading-tight"
                  >
                    {heroSlides[currentSlide].tagline}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl md:text-2xl text-white/60 mb-10 leading-relaxed font-light"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
              </AnimatePresence>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-amber-400 text-[hsl(222,47%,8%)] text-sm font-bold transition-all hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] active:scale-95"
                >
                  Explore Services <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contacts"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/15 text-white/80 text-sm font-medium hover:border-amber-400/50 hover:text-white transition-all"
                >
                  Partner With Us
                </Link>
              </div>

              {/* Slide dots */}
              <div className="flex gap-2 mt-10">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={cn(
                      'h-1 rounded-full transition-all duration-500',
                      i === currentSlide ? 'w-8 bg-amber-400' : 'w-3 bg-white/20 hover:bg-white/40'
                    )}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right — Stats Panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl border border-white/8 bg-[hsl(222,47%,9%)] p-8 overflow-hidden">
                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-bl-[5rem] pointer-events-none" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-400/20 rounded-bl-[3rem] pointer-events-none" />

                <div className="relative z-10 mb-8 flex items-center justify-between">
                  <h3 className="text-white font-['Syne'] font-bold text-lg">Operational Performance</h3>
                  <span className="text-xs font-bold text-amber-400 tracking-widest uppercase animate-pulse">Live</span>
                </div>

                {/* Bar chart */}
                <div className="flex items-end gap-2 h-28 mb-8">
                  {[55, 78, 62, 95, 71, 88, 58, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
                      className={cn(
                        'flex-1 rounded-sm',
                        h === 100
                          ? 'bg-amber-400'
                          : 'bg-gradient-to-t from-amber-400/30 to-amber-400/70'
                      )}
                    />
                  ))}
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/4 border border-white/8">
                      <div className="text-2xl font-['Syne'] font-extrabold text-amber-400">{s.value}</div>
                      <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-amber-400/8 border border-amber-400/15">
                  <div className="h-9 w-9 rounded-lg bg-amber-400/20 flex items-center justify-center">
                    <Award className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">HIPAA Certified Operations</div>
                    <div className="text-xs text-white/40">Full compliance across all offices</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-4 text-center">
              <span className="tag">What We Do</span>
            </div>
            <h2 className="text-center text-foreground mb-4">
              We are experienced BPO professionals
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Delivering premium healthcare and business process outsourcing services to clients across the globe.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.09} direction="up">
                <div className="group relative h-full flex flex-col p-7 rounded-2xl border border-border bg-card hover:border-amber-400/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                  {/* Icon */}
                  <div className="mb-5 h-12 w-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-400/20 transition-colors">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {s.description}
                  </p>
                  <Link
                    to={s.to}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:gap-2.5 transition-all"
                  >
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Link>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-[2.5rem] bg-amber-400/5 group-hover:bg-amber-400/10 transition-colors pointer-events-none" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BANNER
      ══════════════════════════════════════════ */}
      <section className="py-14 bg-[hsl(222,47%,8%)] border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-gold-shimmer stat-number">{s.value}</div>
                  <div className="mt-2 text-xs text-white/40 uppercase tracking-widest font-medium">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-4 text-center"><span className="tag">Why Us</span></div>
            <h2 className="text-center text-foreground mb-4">Why clients choose us?</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              We have the expertise, enthusiasm, flexibility and commitment to deliver results time after time and to deadline.
            </p>
          </ScrollReveal>
          <div className="mt-14">
            <FeatureGrid features={whyChooseUs} columns={4} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEGMENTED APPROACH — Dark Panel
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(222,47%,8%)]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-4 text-center"><span className="tag">Our Approach</span></div>
            <h2 className="text-center text-white mb-4">Our segmented approach</h2>
            <p className="text-center text-white/50 max-w-2xl mx-auto">
              A structured methodology that ensures consistent, measurable results every time.
            </p>
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segmentedApproach.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08} direction="up">
                <div className="group p-7 rounded-2xl border border-white/8 hover:border-amber-400/30 bg-[hsl(222,47%,10%)] hover:bg-[hsl(222,47%,11%)] transition-all duration-300">
                  <div className="mb-4 h-11 w-11 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-2 text-base font-bold text-white">{item.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHO / WHAT / SECURITY
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Who we are',
                text: 'Phoenix Business Initiatives (PBI) is a young and vibrant company that aims to provide high quality services. At PBI, we strive to achieve the highest level of "Customer Satisfaction" possible. With offices in Dallas and London, our team operates from India to ensure services at the premier level of quality.',
                to: '/about',
              },
              {
                title: 'What we do',
                text: 'Our services are designed to deliver value to the organizations we serve. We offer Revenue Cycle Management, Medical Coding, Claims Management, and Data Entry / Conversion services.',
                to: '/services',
                list: ['Revenue Cycle Management', 'Medical Coding', 'Data Entry / Conversion', 'Claims Management'],
              },
              {
                title: 'Security & HIPAA',
                text: 'Security is of utmost importance at PBI. We protect all patient data with the highest form of security. Our servers use top-quality firewalls, file transfer done through secure FTP, and we maintain full HIPAA compliance.',
                to: '/security',
              },
            ].map((block, i) => (
              <ScrollReveal key={i} delay={i * 0.12} direction="up">
                <div className="h-full p-8 rounded-2xl border border-border bg-card hover:border-amber-400/30 transition-all duration-300 hover:shadow-md group">
                  <div className="line-accent" />
                  <h3 className="mb-4 text-xl font-bold text-foreground">{block.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{block.text}</p>
                  {block.list && (
                    <ul className="mb-4 space-y-2">
                      {block.list.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    to={block.to}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:gap-2.5 transition-all"
                  >
                    Read More <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(222,47%,8%)]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden border border-amber-400/20 p-10 md:p-16 text-center bg-gradient-to-br from-[hsl(222,47%,11%)] to-[hsl(222,47%,8%)]">
              {/* amber glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] h-[200px] bg-amber-400/8 rounded-full blur-[80px]" />
              </div>

              <span className="tag mb-6 inline-flex">Let's Talk</span>
              <h2 className="text-3xl md:text-5xl font-['Syne'] font-extrabold text-white mb-4">
                We're interested in <br className="hidden md:block" />
                hearing from you.
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Write about your primary interest — our experts will get back to you within 24 hours.
              </p>
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-400 text-[hsl(222,47%,8%)] font-bold text-base hover:bg-amber-300 transition-all hover:shadow-[0_0_40px_rgba(251,191,36,0.35)] active:scale-95"
              >
                Submit the Form <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-4 text-center"><span className="tag">Testimonials</span></div>
            <h2 className="text-center text-foreground mb-12">What people say about us</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="h-full flex flex-col p-8 rounded-2xl border border-border bg-card hover:border-amber-400/30 hover:shadow-md transition-all duration-300 group">
                  <Quote className="h-8 w-8 text-amber-400/70 mb-5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow italic mb-6">
                    "{t.quote}"
                  </p>
                  <div className="pt-4 border-t border-border flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-amber-400/15 flex items-center justify-center text-amber-600 text-xs font-black">
                      {t.author[0]}
                    </div>
                    <p className="text-sm font-bold text-foreground">— {t.author}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
