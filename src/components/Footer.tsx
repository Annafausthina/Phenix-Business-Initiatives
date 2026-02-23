import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="relative mt-20 overflow-hidden bg-slate-950 text-slate-400">
    {/* Decorative glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-full max-w-4xl bg-primary/10 blur-[100px]" />

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link to="/" className="inline-block mb-6">
            <h3 className="text-shimmer text-2xl font-black tracking-tighter">
              PBI GLOBAL
            </h3>
          </Link>
          <p className="max-w-xs text-sm font-medium leading-relaxed opacity-60">
            Pioneering the future of healthcare operations through autonomous intelligence and global medical expertise. Engineering outcomes, not just outputs.
          </p>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Navigation</h4>
          <ul className="space-y-4">
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'Security', to: '/security' },
              { label: 'Contacts', to: '/contacts' },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm font-bold transition-all hover:text-white hover:translate-x-1 inline-block">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Operations</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li className="hover:text-white transition-colors cursor-default">Revenue Cycle Management</li>
            <li className="hover:text-white transition-colors cursor-default">Medical Coding Audit</li>
            <li className="hover:text-white transition-colors cursor-default">Claims Intelligent Routing</li>
            <li className="hover:text-white transition-colors cursor-default">Medical Data Science</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Global Nodes</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <div className="space-y-1">
                <p>US Node: 866-418-9017</p>
                <p>UK Node: +44 7940 300403</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <a href="mailto:info@pbisglobal.com" className="hover:text-white transition-colors">info@pbisglobal.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span className="opacity-60 font-medium">Global Delivery Centers: Florida · London · Chennai</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
        <p className="text-xs font-bold uppercase tracking-widest opacity-30">
          © {new Date().getFullYear()} Phoenix Business Initiatives. Neural Core v.2030.
        </p>
        <div className="flex gap-6">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20">Secure Data Node</span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20">ISO Certified</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
