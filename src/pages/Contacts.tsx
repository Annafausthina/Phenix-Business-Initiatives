import { MapPin, Phone, Mail, Globe, Printer } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';

const offices = [
  {
    country: 'India',
    title: 'Delivery Centre',
    address: [
      'Phoenix Business Initiatives Pvt. Ltd.',
      '3rd floor, Vijaya Towers,',
      'Kodambakkam High Road, Tirumurthy Nagar,',
      'Nungambakkam, Chennai 600034',
      'Next to capital towers',
    ],
    contact: '+91-99626 56400',
    type: 'Headquarters'
  },
  {
    country: 'USA',
    title: 'Cerritos Office',
    address: [
      '13405 Andy Street',
      'Cerritos CA 90703',
    ],
    contact: '866-418-9017',
    type: 'Administrative'
  },
  {
    country: 'UK',
    title: 'London Hub',
    address: [
      '#82 Greencroft Road,',
      'TW5 0BH, Heston,',
      'London, United Kingdom',
    ],
    contact: '7940 300403',
    type: 'Regional Support'
  },
];

const Contacts = () => (
  <div className="relative overflow-hidden">
    {/* Cinematic Hero Section */}
    <section className="relative pt-48 pb-24 px-4 overflow-hidden bg-[#149184]/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <ScrollReveal variant={2}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
            <Globe className="h-3 w-3 animate-spin-slow" />
            Global Connectivity
          </span>
          <h1 className="text-shimmer text-5xl md:text-7xl font-black mb-8">
            How to find us
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Connecting expertise with global opportunities through our strategic worldwide locations.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Offices Grid */}
    <Section className="relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offices.map((office, i) => (
          <ScrollReveal key={i} delay={i * 0.1} variant={3} direction="up">
            <div className="group relative h-full flex flex-col p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-500 hover:translate-y-[-10px] shadow-2xl overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

              <div className="mb-6 flex items-start justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-primary mb-1 block">
                    {office.country}
                  </span>
                  <h3 className="text-2xl font-black text-foreground">
                    {office.title}
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>

              <div className="space-y-2 mb-8 flex-grow">
                {office.address.map((line, idx) => (
                  <p key={idx} className="text-muted-foreground font-medium leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-foreground font-bold group-hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  {office.contact}
                </div>
                <div className="mt-2 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                  {office.type}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>

    {/* Contact Info & Support */}
    <Section className="bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant={3} direction="left">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Get in touch <span className="text-primary">with us</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
              We're here to answer your questions and help you optimize your business processes. Reach out to our team of experts today.
            </p>

            <div className="space-y-6">
              {[
                { label: 'USA Support', value: '866-418-9017', icon: Phone, type: 'tel' },
                { label: 'UK Support', value: '7940 300403', icon: Phone, type: 'tel' },
                { label: 'General Inquiries', value: 'info@pbisglobal.com', icon: Mail, type: 'email' },
                { label: 'Fax Line', value: '352-353-0923', icon: Printer, type: 'text' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-4 rounded-3xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors group">
                  <div className="h-14 w-14 rounded-2xl bg-[#149184]/10 flex items-center justify-center text-[#149184] group-hover:bg-[#149184] group-hover:text-white transition-all">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">
                      {item.label}
                    </span>
                    {item.type === 'email' ? (
                      <a href={`mailto:${item.value}`} className="text-xl font-black text-foreground hover:text-primary">
                        {item.value}
                      </a>
                    ) : item.type === 'tel' ? (
                      <a href={`tel:${item.value.replace(/-/g, '')}`} className="text-xl font-black text-foreground">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-xl font-black text-foreground">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} variant={3} direction="right">
            <div className="rounded-[3rem] bg-gradient-to-br from-[#149184] to-[#0d6b61] p-12 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />

              <h3 className="text-3xl font-black mb-6 relative z-10">Administrative Support</h3>
              <p className="text-white/80 mb-8 leading-relaxed font-medium relative z-10">
                Our administrative offices are located in Florida, providing seamless oversight for our global operations.
              </p>

              <div className="space-y-4 relative z-10">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="text-xs font-black uppercase tracking-widest block mb-2 opacity-60">Corporate HQ</span>
                  <p className="font-bold text-lg">Jacksonville & Tampa, Florida</p>
                  <p className="opacity-80">Overseeing Revenue Cycle Management & Global Logistics</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  </div>
);

export default Contacts;
