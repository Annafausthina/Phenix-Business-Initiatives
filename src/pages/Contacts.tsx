import { MapPin, Phone, Mail, Globe, Printer } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';

const offices = [
  {
    flag: '🇮🇳',
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
    type: 'Headquarters',
  },
  {
    flag: '🇺🇸',
    country: 'USA',
    title: 'Cerritos Office',
    address: [
      '13405 Andy Street',
      'Cerritos CA 90703',
    ],
    contact: '866-418-9017',
    type: 'Administrative',
  },
  {
    flag: '🇬🇧',
    country: 'UK',
    title: 'London Hub',
    address: [
      '#82 Greencroft Road,',
      'TW5 0BH, Heston,',
      'London, United Kingdom',
    ],
    contact: '+44 7940 300403',
    type: 'Regional Support',
  },
];

const contactItems = [
  { label: 'USA Support', value: '866-418-9017', icon: Phone, href: 'tel:8664189017' },
  { label: 'UK Support', value: '+44 7940 300403', icon: Phone, href: 'tel:+447940300403' },
  { label: 'General Inquiries', value: 'info@pbisglobal.com', icon: Mail, href: 'mailto:info@pbisglobal.com' },
  { label: 'Fax Line', value: '352-353-0923', icon: Printer, href: undefined },
];

const Contacts = () => (
  <div className="relative overflow-hidden">

    {/* ── Hero ── */}
    <section className="relative pt-36 pb-24 px-4 bg-[hsl(222,47%,7%)]">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <span className="tag mb-6 inline-flex">
            <Globe className="h-3 w-3" /> Global Presence
          </span>
          <h1 className="text-white font-['Syne'] font-extrabold mb-6">
            How to <span className="text-gold-shimmer">find us</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
            Connecting expertise with global opportunities through our strategic worldwide locations.
          </p>
        </ScrollReveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* ── Offices Grid ── */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-flex">Our Offices</span>
            <h2 className="text-foreground">Global Locations</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {offices.map((office, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="group relative h-full flex flex-col p-8 rounded-2xl border border-border bg-card hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 h-20 w-20 bg-amber-400/6 rounded-bl-[3rem] group-hover:bg-amber-400/12 transition-colors pointer-events-none" />

                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <div className="text-2xl mb-2">{office.flag}</div>
                    <span className="text-xs font-black uppercase tracking-widest text-amber-600 mb-1 block">
                      {office.country}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{office.title}</h3>
                  </div>
                  <div className="h-11 w-11 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-1 mb-6 flex-grow">
                  {office.address.map((line, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                  ))}
                </div>

                <div className="pt-5 border-t border-border">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-amber-600 transition-colors">
                    <Phone className="h-3.5 w-3.5 text-amber-500" />
                    {office.contact}
                  </div>
                  <div className="mt-1 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                    {office.type}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Contact Info ── */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(222,47%,8%)]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <ScrollReveal direction="left">
            <div className="line-accent" style={{ '--tw-border-color': '#f59e0b' } as React.CSSProperties} />
            <h2 className="text-white font-['Syne'] mb-4">
              Get in touch <span className="text-amber-400">with us</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              We're here to answer your questions and help you optimize your business processes. Reach out to our team of experts today.
            </p>

            <div className="space-y-4">
              {contactItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-[hsl(222,47%,10%)] hover:border-amber-400/25 transition-all group"
                >
                  <div className="h-12 w-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 transition-colors shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white/30 uppercase tracking-widest block mb-0.5">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="text-base font-bold text-white hover:text-amber-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-base font-bold text-white">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — Admin Support Card */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="relative rounded-2xl overflow-hidden border border-amber-400/20 p-10 bg-gradient-to-br from-amber-400 to-amber-500">
              {/* Texture */}
              <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-[hsl(222,47%,8%)]/20 flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-[hsl(222,47%,8%)]" />
                </div>
                <h3 className="text-2xl font-['Syne'] font-bold text-[hsl(222,47%,8%)] mb-3">
                  Administrative Support
                </h3>
                <p className="text-[hsl(222,47%,8%)]/70 mb-8 leading-relaxed font-medium">
                  Our administrative offices provide seamless oversight for our global operations.
                </p>

                <div className="p-6 rounded-xl bg-[hsl(222,47%,8%)]/15 border border-[hsl(222,47%,8%)]/10">
                  <span className="text-xs font-black uppercase tracking-widest text-[hsl(222,47%,8%)]/50 block mb-2">
                    Corporate HQ
                  </span>
                  <p className="font-bold text-lg text-[hsl(222,47%,8%)]">Jacksonville &amp; Tampa, Florida</p>
                  <p className="text-[hsl(222,47%,8%)]/60 mt-1 text-sm">Overseeing Revenue Cycle Management &amp; Global Logistics</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
);

export default Contacts;
