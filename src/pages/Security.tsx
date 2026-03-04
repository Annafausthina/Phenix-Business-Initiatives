import { Shield, CheckCircle, Quote, Lock } from 'lucide-react';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';

const safeguards = [
  'Procedures for restricting use and disclosure of Protected Health Information (PHI) to the minimum amount necessary',
  'All personnel are bound by PHI confidentiality and non-disclosure agreements',
  'The antecedents of the employees are verified through background checks',
  'Termination Procedure is in place to prevent continued access to PHI by a terminated employee',
  'Periodic information and security training conducted',
  'Round the clock manned security desk and digital smart card authenticated entry',
  'Duplicating facilities are disabled to ensure that no PHI is taken out of office',
  'Employees are trained on policies regarding use and disclosure of PHI',
];

const testimonials = [
  {
    quote: "I have been working with PBI for quite awhile now and I am extremely impressed with their professional attitude and approachable manner. Healthcare is a complex industry, but PBI have consistently understood my needs.",
    author: 'CEO of a Billing Company in NJ',
  },
  {
    quote: "PBI came highly recommended to us. Great businesses prove their worth to customers and I now recommend PBI myself! This is due to their excellent service, competitive pricing and outstanding customer care.",
    author: 'Physician practicing in TX',
  },
  {
    quote: "Having PBI on board is always reassuring because Billing is where our business risk is. You can trust them to repeatedly deliver with a no-nonsense approach. Their staff is responsive and easy to communicate with.",
    author: 'Physician practicing in NJ',
  },
];

const Security = () => (
  <div className="relative overflow-hidden">

    {/* ── Hero ── */}
    <section className="relative pt-36 pb-24 px-4 bg-[hsl(222,47%,7%)]">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <span className="tag mb-6 inline-flex">
            <Lock className="h-3 w-3" /> Enterprise Security
          </span>
          <h1 className="text-white font-['Syne'] font-extrabold mb-6">
            Security &amp; HIPAA
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
            Protecting patient data with the highest form of security. HIPAA-compliant across all operations.
          </p>
        </ScrollReveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* ── Main Content ── */}
    <Section>
      <div className="max-w-4xl mx-auto space-y-5">
        <ScrollReveal>
          <p className="text-muted-foreground leading-relaxed">
            Security is of utmost importance at PBI that is why we protect all patient data with the highest form of security possible. Our servers use the highest quality firewalls, providing greater security than a typical office server. All paper documents (if any are printed) are properly shredded, file transfer done through secure FTP, we have the technology to work through VPN if our clients prefer that, no devices like CD, pen drives or removable disks are allowed to be brought inside the office by the employees.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground leading-relaxed">
            We ensure appropriate physical safeguards are in place to reasonably safeguard protected health information from any intentional or unintentional use or disclosure that is in violation of the HIPAA Privacy Rule. These safeguards will include physical protection of premises and technical protection of PHI maintained electronically and administrative protection.
          </p>
        </ScrollReveal>
      </div>
    </Section>

    {/* ── HIPAA Safeguards ── */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(222,47%,8%)]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="h-12 w-12 rounded-xl bg-amber-400/15 flex items-center justify-center text-amber-400">
              <Shield className="h-6 w-6" />
            </div>
            <h2 className="text-white font-['Syne']">HIPAA Administrative Safeguards</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-3">
          {safeguards.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-white/8 bg-[hsl(222,47%,10%)] hover:border-amber-400/25 transition-all">
                <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
                <p className="text-sm text-white/60 leading-relaxed">{s}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Retention ── */}
    <Section>
      <ScrollReveal>
        <div className="max-w-4xl mx-auto">
          <div className="line-accent" />
          <h2 className="text-foreground mb-4">Retention of Records</h2>
          <p className="text-muted-foreground leading-relaxed">
            We strictly adhere to the HIPAA Privacy Rule records retention requirement. All records designated by HIPAA in this retention requirement are maintained in a manner that allows for access within a reasonable period of time. After the records retention time it will be destroyed as per the data destruction policy.
          </p>
        </div>
      </ScrollReveal>
    </Section>

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
              <div className="h-full flex flex-col p-7 rounded-2xl border border-white/8 bg-[hsl(222,47%,10%)] hover:border-amber-400/25 transition-all">
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

export default Security;
