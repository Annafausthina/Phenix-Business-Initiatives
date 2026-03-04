import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-primary-foreground">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold tracking-tight">
            PBI<span className="text-primary">Global</span>
          </h3>
          <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
            Phoenix Business Initiatives — Experienced BPO professionals delivering premium healthcare and data services worldwide.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'Security', to: '/security' },
              { label: 'Contacts', to: '/contacts' },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Revenue Cycle Management</Link></li>
            <li><Link to="/services/medical-coding" className="hover:text-primary-foreground transition-colors">Medical Coding</Link></li>
            <li><Link to="/services/claims-management" className="hover:text-primary-foreground transition-colors">Claims Management</Link></li>
            <li><Link to="/services/data-entry-conversion" className="hover:text-primary-foreground transition-colors">Data Entry/Conversion</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <p>India: +91-99626 56400</p>
                <p>USA: 866-418-9017</p>
                <p>UK: +44 7940 300403</p>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:info@pbisglobal.com" className="hover:text-primary-foreground transition-colors">info@pbisglobal.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>India · USA · UK</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Phoenix Business Initiatives. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
