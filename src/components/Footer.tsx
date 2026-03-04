import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[hsl(222,47%,6%)] text-white">
    {/* Gold top border */}
    <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-5">
            <img src="/pbi-logo.png" alt="PBI Global" className="h-10 w-auto brightness-[1.1]" />
          </div>
          <p className="text-sm text-white/50 leading-relaxed mb-6">
            Phoenix Business Initiatives — Experienced BPO professionals delivering premium healthcare and data services worldwide.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            {[
              { label: 'FB', href: '#', d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
              { label: 'LI', href: '#', paths: true },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="h-8 w-8 rounded-md border border-white/10 flex items-center justify-center text-white/40 hover:border-amber-400/50 hover:text-amber-400 transition-all"
                aria-label={s.label}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  {i === 0
                    ? <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    : <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  }
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-amber-400 mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'Security', to: '/security' },
              { label: 'Contacts', to: '/contacts' },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
                >
                  <ArrowRight className="h-3 w-3 text-amber-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-amber-400 mb-5">Services</h4>
          <ul className="space-y-3">
            {[
              { label: 'Revenue Cycle Management', to: '/services' },
              { label: 'Medical Coding', to: '/services/medical-coding' },
              { label: 'Claims Management', to: '/services/claims-management' },
              { label: 'Data Entry/Conversion', to: '/services/data-entry-conversion' },
            ].map((s) => (
              <li key={s.label}>
                <Link
                  to={s.to}
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
                >
                  <ArrowRight className="h-3 w-3 text-amber-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-amber-400 mb-5">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-white/50">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
              <div className="space-y-0.5">
                <p>India: +91-99626 56400</p>
                <p>USA: 866-418-9017</p>
                <p>UK: +44 7940 300403</p>
              </div>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/50">
              <Mail className="h-4 w-4 shrink-0 text-amber-400" />
              <a href="mailto:info@pbisglobal.com" className="hover:text-white transition-colors">
                info@pbisglobal.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/50">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
              <span>India · USA · UK</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 h-px bg-white/8" />

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} Phoenix Business Initiatives. All rights reserved.
        </p>
        <p className="text-xs text-white/25">
          India · USA · United Kingdom
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
