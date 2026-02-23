import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, Printer, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Security', to: '/security' },
  { label: 'Contacts', to: '/contacts' },
];

const servicesDropdown = [
  { label: 'Revenue Cycle Management', to: '/services' },
  { label: 'Medical Coding', to: '/services' },
  { label: 'Claims Management', to: '/services' },
  { label: 'Data Entry / Conversion', to: '/services' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    label: 'Google+',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:info@pbisglobal.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-6"
      )}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className={cn(
            "relative flex items-center justify-between rounded-[2rem] px-6 py-2 transition-all duration-500",
            scrolled
              ? "bg-white/40 backdrop-blur-2xl border border-white/40 shadow-2xl ai-glow"
              : "bg-transparent border border-transparent"
          )}>
            {/* Logo */}
            <Link
              to="/"
              className="group flex-shrink-0 transition-all duration-500 hover:scale-105"
              aria-label="PBI Global"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src="/pbi-logo.png" alt="PBI Global" className={cn(
                  "transition-all duration-500",
                  scrolled ? "h-12" : "h-16"
                )} />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                const isServices = link.label === 'Services';

                return (
                  <div
                    key={link.to}
                    className="relative"
                    onMouseLeave={() => isServices && setServicesOpen(false)}
                  >
                    {isServices ? (
                      <div className="relative group">
                        <button
                          type="button"
                          onMouseEnter={() => setServicesOpen(true)}
                          className={cn(
                            'flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-sm font-bold tracking-tight transition-all duration-300',
                            active || servicesOpen
                              ? 'text-primary bg-primary/10'
                              : 'text-slate-700 hover:text-primary hover:bg-primary/5'
                          )}
                        >
                          {link.label}
                          <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", servicesOpen && "rotate-180")} />
                        </button>

                        <div
                          className={cn(
                            'absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64 transition-all duration-500 origin-top',
                            servicesOpen
                              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                              : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                          )}
                        >
                          <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/80 backdrop-blur-2xl p-2 shadow-2xl">
                            {servicesDropdown.map((item, idx) => (
                              <Link
                                key={item.label}
                                to={item.to}
                                className="block px-4 py-3 text-sm font-bold text-slate-700 rounded-2xl hover:bg-primary hover:text-white transition-all duration-200"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.to}
                        className={cn(
                          'relative px-5 py-2.5 rounded-2xl text-sm font-bold tracking-tight transition-all duration-300',
                          active
                            ? 'text-primary bg-primary/10'
                            : 'text-slate-700 hover:text-primary hover:bg-primary/5'
                        )}
                      >
                        {link.label}
                        {active && (
                          <motion.div
                            layoutId="nav-active"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                          />
                        )}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <a
                href="tel:8664189017"
                className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-100/50 text-slate-700 text-sm font-bold hover:bg-slate-200/50 transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span className="hidden xl:inline">Contact Sales</span>
              </a>

              <Link
                to="/contacts"
                className="rounded-2xl bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
              >
                Inquiry
              </Link>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden rounded-2xl p-2.5 bg-slate-100/50 text-slate-700 hover:bg-slate-200/50 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* ── MOBILE DRAWER ── */}
        {mobileOpen && (
          <div className="md:hidden bg-[hsl(182,72%,80%)] border-t border-[hsl(182,45%,68%)] shadow-lg">
            <ul className="divide-y divide-[hsl(182,45%,72%)]">
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={cn(
                        'block px-5 py-3 text-sm font-semibold transition-colors',
                        active
                          ? 'bg-orange-500 text-white'
                          : 'text-[hsl(205,59%,16%)] hover:bg-white/40'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile contact */}
            <div className="px-5 py-4 bg-white/30 border-t border-[hsl(182,45%,68%)] space-y-2 text-sm text-[hsl(205,59%,20%)]">
              <a href="tel:8664189017" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <Phone className="h-4 w-4 text-orange-500" /> USA – 866-418-9017
              </a>
              <a href="tel:7940300403" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <Phone className="h-4 w-4 text-orange-500" /> UK – 7940-300403
              </a>
              <a href="mailto:info@pbisglobal.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <Mail className="h-4 w-4 text-gray-500" /> info@pbisglobal.com
              </a>
            </div>

            {/* Mobile social */}
            <div className="flex items-center gap-2 px-5 py-3 border-t border-[hsl(182,45%,68%)]">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-[hsl(205,59%,30%)]/70 text-white hover:bg-orange-500 transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
