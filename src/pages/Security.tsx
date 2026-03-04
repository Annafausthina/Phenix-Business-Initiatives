import { Shield, CheckCircle, Quote } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';
import TestimonialCarousel from '@/components/TestimonialCarousel';

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
    quote: 'I have been working with PBI for quite awhile now and I am extremely impressed with their professional attitude and approachable manner. Healthcare is a complex industry, but PBI have consistently understood my needs. They\'ve always got it right the first time - and on time. I simply wouldn\'t recommend anyone else!',
    author: '- CEO of a Billing Company in NJ',
  },
  {
    quote: 'PBI came highly recommended to us. Great businesses prove their worth to customers and I now recommend PBI myself! This is due to their excellent service, competitive pricing and outstanding customer care. In a world that\'s becoming so distant and digital, it\'s thoroughly refreshing to get such a personal touch.',
    author: '- Physician practicing in TX',
  },
  {
    quote: '"Having PBI on board is always reassuring because Billing is where our business risk is. You can trust them to repeatedly deliver with a no-nonsense approach." We always find their staff responsive and easy to communicate with and they understand the need for error-free billing and ensure we achieve our objectives.',
    author: '- Physician practicing in NJ',
  },
];

const Security = () => (
  <>
    <Hero title="Security & HIPAA" />

    <Section>
      <div className="mx-auto max-w-4xl space-y-6">
        <ScrollReveal>
          <p className="text-muted-foreground leading-relaxed">
            Security is of utmost importance at PBI that is why we protect all patient data with the highest form of security possible. Our servers use the highest quality firewalls, providing greater security than a typical office server. All paper documents (if any are printed) are properly shredded, file transfer done through secure FTP, we have the technology to work through VPN if our clients prefer that, no devices like CD, pen drives or removable disks are allowed to be brought inside the office by the employees.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground leading-relaxed">
            We ensure appropriate physical safeguards are in place to reasonably safeguard protected health information from any intentional or unintentional use or disclosure that is in violation of the HIPAA Privacy Rule. These safeguards will include physical protection of premises and technical protection of PHI maintained electronically and administrative protection. These safeguards will extend to the oral communication of PHI. These safeguards will extend to PHI that is removed from this organization.
          </p>
        </ScrollReveal>
      </div>
    </Section>

    {/* HIPAA Safeguards */}
    <Section className="bg-card">
      <ScrollReveal>
        <div className="mb-8 flex items-center justify-center gap-3">
          <Shield className="h-7 w-7 text-primary" />
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            HIPAA Administrative Safeguards at PBI
          </h2>
        </div>
      </ScrollReveal>
      <div className="mx-auto max-w-3xl grid grid-cols-1 gap-3">
        {safeguards.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
              <CheckCircle className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">{s}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>

    {/* Retention */}
    <Section>
      <ScrollReveal>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Retention of Records</h2>
          <p className="text-muted-foreground leading-relaxed">
            We strictly adhere to the HIPAA Privacy Rule records retention requirement. All records designated by HIPAA in this retention requirement are maintained in a manner that allows for access within a reasonable period of time. After the records retention time it will be destroyed as per the data destruction policy.
          </p>
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
  </>
);

export default Security;
