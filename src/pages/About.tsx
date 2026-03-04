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
    quote: "I have been working with PBI for quite awhile now and I am extremely impressed with their professional attitude and approachable manner. Healthcare is a complex industry, but PBI have consistently understood my needs. They've always got it right the first time - and on time.",
    author: 'CEO of a Billing Company in NJ',
  },
  {
    quote: "PBI came highly recommended to us. Great businesses prove their worth to customers and I now recommend PBI myself! This is due to their excellent service, competitive pricing and outstanding customer care.",
    author: 'Data Entry Company in London',
  },
  {
    quote: "Having PBI on board is always reassuring because Billing is where our business risk is. You can trust them to repeatedly deliver with a no-nonsense approach. Their staff is responsive and easy to communicate with.",
    author: 'Physician practicing in NJ',
  },
];

const About = () => (
  <div className="relative overflow-hidden">

    {/* ── Hero ── */}
    <section className="relative pt-36 pb-24 px-4 overflow-hidden bg-[hsl(222,47%,7%)]">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <span className="tag mb-6 inline-flex">Excellence &amp; Experience</span>
          <h1 className="text-white font-['Syne'] font-extrabold mb-6">
            About our company &amp;<br />
            <span className="text-gold-shimmer">experienced staff</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
            Seasoned BPO professionals delivering premium healthcare and data services worldwide.
          </p>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* ── About Content ── */}
    <Section className="relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Image Panel */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800"
                  alt="Medical Professionals"
                  className="w-full h-[500px] object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,8%)] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[hsl(222,47%,8%)/90] backdrop-blur-md border border-white/10">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">Our Philosophy</p>
                  <h3 className="text-xl font-['Syne'] font-bold text-white">Innovation Meets Integrity</h3>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal direction="right">
              <div className="line-accent" />
              <p className="text-lg text-foreground font-medium leading-relaxed">
                <span className="text-amber-600 font-bold">Phoenix Business Initiatives (PBI)</span> is a young and vibrant company that aims to provide high quality services. At PBI, we strive to achieve the highest level of{' '}
                <span className="font-bold border-b-2 border-amber-400/40">"Customer Satisfaction"</span> possible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                PBI was founded by seasoned business professionals with strong business and technology expertise in the BPO industry. With offices in Dallas, Texas (USA) and Hounslow, London (United Kingdom), the PBI's delivery team of dedicated professionals operates from their offshore Delivery Centre in India to ensure services are delivered on time at the premier level of quality.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="right">
              <div className="p-7 rounded-xl border border-border bg-card hover:border-amber-400/30 transition-all group">
                <Rocket className="h-7 w-7 text-amber-500 mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  The most valuable asset PBI has to offer is our core team of professionals who are customer-driven, innovative and continuously updated to ensure that we keep pace with the rapid change that characterizes the healthcare industry.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25} direction="right">
              <div className="p-7 rounded-xl border border-amber-400/15 bg-amber-400/4">
                <Users className="h-7 w-7 text-amber-500 mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Our flexible outsourcing models are designed to meet clients' financial objectives so our prices are highly competitive. Our business model is effectively designed to allow you more time to focus on your core areas as we handle your business operations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Section>

    {/* ── Integrated Services Quote ── */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(222,47%,8%)]">
      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollReveal>
          <div className="relative p-10 rounded-2xl border border-white/8 bg-[hsl(222,47%,10%)] text-center">
            <Quote className="h-10 w-10 text-amber-400/40 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed italic">
              "Our integrated services offer value for our customers by helping them in improving their business processes with minimum hassles and capital outlays. The perfect blend of technical excellence, business performance monitoring, business intelligence and customer experience management is what makes us endearing to our clients."
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="p-8 rounded-2xl border border-amber-400/15 bg-amber-400/5">
            <p className="text-white/60 leading-relaxed">
              We follow a customer centered approach and hence we focus on knowing what you want to achieve and then align the right approach and methodologies to help you fulfill them. We back our services by elaborate assessments, detailed discussions, data analysis and recurrent observation.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* ── Benefits Grid ── */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-flex">Benefits</span>
            <h2 className="text-foreground mb-3">
              Client <span className="text-amber-500">Benefits</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the tangible advantages our strategic solutions bring to your business operations and long-term growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {benefits.map((b, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="group h-full flex flex-col p-8 rounded-2xl border border-border bg-card hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 h-12 w-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-400/20 transition-colors">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-5 text-xl font-bold text-foreground">{b.title}</h3>
                <ul className="space-y-3 flex-grow">
                  {b.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Testimonials ── */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(222,47%,8%)]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-flex">Testimonials</span>
            <h2 className="text-white">What people say about us</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="h-full flex flex-col p-7 rounded-2xl border border-white/8 bg-[hsl(222,47%,10%)] hover:border-amber-400/25 transition-all duration-300">
                <Quote className="h-7 w-7 text-amber-400/60 mb-5 shrink-0" />
                <p className="text-sm text-white/60 leading-relaxed italic flex-grow mb-6">"{t.quote}"</p>
                <div className="pt-4 border-t border-white/8 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-amber-400/15 flex items-center justify-center text-amber-500 text-xs font-black">
                    {t.author[0]}
                  </div>
                  <p className="text-sm font-bold text-white">— {t.author}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
