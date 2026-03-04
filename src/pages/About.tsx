import { DollarSign, ShieldAlert, Target, CheckCircle, Award, Users, Rocket, Quote } from 'lucide-react';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';

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
    quote: 'Having PBI on board is always reassuring because Billing is where our business risk is. You can trust them to repeatedly deliver with a no-nonsense approach." We always find their staff responsive and easy to communicate with and they understand the need for error-free billing and ensure we achieve our objectives.',
    author: '- Physician practicing in NJ',
  },
];

const About = () => (
  <div className="relative overflow-hidden">
    {/* Cinematic Hero */}
    <section className="relative pt-48 pb-24 px-4 overflow-hidden bg-primary/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <ScrollReveal variant={2}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
            <Award className="h-3.5 w-3.5" />
            Excellence & Experience
          </span>
          <h1 className="text-shimmer text-5xl md:text-7xl font-black mb-8 leading-tight">
            About our company & <br /><span className="text-primary">experienced staff</span>
          </h1>
        </ScrollReveal>
      </div>
    </section>

    {/* Main Content Sections */}
    <Section className="relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Decorative Side */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant={3} direction="left">
              <div className="relative rounded-[3rem] overflow-hidden border border-white/80 dark:border-white/20 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800"
                  alt="Medical Professionals"
                  className="w-full h-[600px] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-8 rounded-3xl bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-white/80 dark:border-white/20 text-white">
                  <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">Our Philosophy</p>
                  <h3 className="text-2xl font-black">Innovation Meets Integrity</h3>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content Side */}
          <div className="lg:col-span-7 space-y-10">
            <ScrollReveal variant={3} direction="right">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                  <span className="text-primary font-black italic">Phoenix Business Initiatives (PBI)</span> is a young and vibrant company that aims to provide high quality services. At PBI, we strive to achieve the highest level of <span className="font-bold border-b-2 border-primary/30">"Customer Satisfaction"</span> possible.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  PBI was founded by seasoned business professionals with strong business and technology expertise in the BPO industry. With offices in Dallas, Texas (USA) and Hounslow, London (United Kingdom), the PBI's delivery team of dedicated professionals operates from their offshore Delivery Centre in India to ensure services are delivered on time at the premier level of quality.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} variant={3} direction="right">
              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl hover:translate-y-[-5px] transition-transform">
                <Rocket className="h-8 w-8 text-primary mb-6" />
                <p className="text-muted-foreground leading-relaxed">
                  The most valuable asset PBI has to offer is our core team of professionals who are customer-driven, innovative and continuously updated to ensure that we keep pace with the rapid change that characterizes the healthcare industry.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} variant={3} direction="right">
              <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/20 shadow-xl">
                <Users className="h-8 w-8 text-primary mb-6" />
                <p className="text-muted-foreground leading-relaxed">
                  Our flexible outsourcing models are designed to meet clients' financial objectives so our prices are highly competitive. Our business model is effectively designed to allow you more time to focus on your core areas as we handle your business operations. PBI helps businesses operate more efficiently while creating closer relationships with customers. One size never fits all so we deliver services and solutions without limits.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Section>

    {/* Integrated Services Feature Section */}
    <Section className="bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        <ScrollReveal variant={2}>
          <div className="p-10 rounded-[3rem] bg-white/60 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-sm">
            <p className="text-lg md:text-xl text-foreground font-semibold leading-relaxed text-center italic">
              "Our integrated services offer value for our customers by helping them in improving their business processes with minimum hassles and capital outlays. The perfect blend of technical excellence, business performance monitoring, business intelligence and customer experience management is what makes us endearing to our clients."
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} variant={2}>
          <div className="p-10 rounded-[3rem] bg-primary/10 border border-primary/20">
            <p className="text-lg text-foreground font-medium leading-relaxed">
              We follow a customer centered approach and hence we focus on knowing what you want to achieve and then align the right approach and methodologies to help you fulfill them. We back our services by elaborate assessments, detailed discussions, data analysis and recurrent observation.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>

    {/* Benefits Highlight Grid */}
    <Section className="relative z-10">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Client <span className="text-primary">Benefits</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            Discover the tangible advantages our strategic solutions bring to your business operations and long-term growth.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {benefits.map((b, i) => (
          <ScrollReveal key={i} delay={i * 0.1} variant={3} direction="up">
            <div className="group h-full flex flex-col p-8 rounded-[2.5rem] bg-white/60 dark:bg-white/5 border border-white/60 dark:border-white/10 hover:border-primary/40 transition-all duration-500 hover:translate-y-[-10px] shadow-2xl relative overflow-hidden">
              <div className="mb-6 h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-6 text-2xl font-black text-foreground">{b.title}</h3>
              <ul className="space-y-4 flex-grow">
                {b.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
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
    <Section className="bg-primary/5">
      <ScrollReveal>
        <h2 className="mb-16 text-center text-4xl md:text-5xl font-black text-primary">
          What people say about us
        </h2>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-4">
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

export default About;
