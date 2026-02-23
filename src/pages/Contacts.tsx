import { MapPin, Phone, Mail } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';
import ContactCard from '@/components/ContactCard';

const offices = [
  {
    icon: MapPin,
    title: 'India - Delivery Centre',
    lines: [
      'Phoenix Business Initiatives Pvt. Ltd.',
      '3rd floor, Vijaya Towers,',
      'Kodambakkam High Road, Tirumurthy Nagar,',
      'Nungambakkam, Chennai 600034',
      'Next to capital towers',
    ],
  },
  {
    icon: MapPin,
    title: 'United States of America',
    lines: [
      '13405 Andy Street',
      'Cerritos CA 90703',
    ],
  },
  {
    icon: MapPin,
    title: 'United Kingdom',
    lines: [
      '#82 Greencroft Road,',
      'TW5 0BH, Heston,',
      'London, United Kingdom',
    ],
  },
];

const Contacts = () => (
  <>
    <Hero title="How to find us" />

    <Section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {offices.map((o, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <ContactCard icon={o.icon} title={o.title} lines={o.lines} />
          </ScrollReveal>
        ))}
      </div>
    </Section>

    <Section className="bg-card">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-background p-8">
          <h2 className="mb-6 text-xl font-bold text-foreground text-center">Get in touch</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">India</p>
                <p className="text-sm font-medium text-foreground">+91-99626 56400</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">USA</p>
                <p className="text-sm font-medium text-foreground">866-418-9017</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">UK</p>
                <p className="text-sm font-medium text-foreground">+44 7940 300403</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Fax</p>
                <p className="text-sm font-medium text-foreground">352-353-0923</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 border-t border-border pt-6">
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:info@pbisglobal.com" className="text-sm font-medium text-primary hover:underline">
              info@pbisglobal.com
            </a>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  </>
);

export default Contacts;
