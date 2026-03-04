import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 pt-3">
      {/* Floating Futuristic Container */}
      <div
        className={cn(
          'mx-auto max-w-7xl transition-all duration-500 rounded-[1.5rem] border border-white/20',
          scrolled
            ? 'bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] py-1.5 px-5 border-white/30'
            : 'bg-white/5 backdrop-blur-md py-2.5 px-6 border-transparent'
        )}
      >
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo with Glow */}
          <Link
            to="/"
            className="relative flex-shrink-0 transition-all duration-500 group"
            aria-label="PBI Global"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img src="/pbi-logo.png" alt="PBI Global" className="h-8 md:h-10 w-auto relative z-10 brightness-110 contrast-125" />
          </Link>

          {/* Desktop Nav - Glassy Pills */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              const isServices = link.label === 'Services';

              return (
                <div
                  key={link.to}
                  className="relative px-1"
                  onMouseLeave={() => isServices && setServicesOpen(false)}
                >
                  {isServices ? (
                    <div className="relative group">
                      <button
                        onMouseEnter={() => setServicesOpen(true)}
                        className={cn(
                          'flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-tight transition-all duration-300',
                          active
                            ? 'text-primary bg-primary/10 shadow-[0_0_15px_rgba(14,165,233,0.3)]'
                            : 'text-foreground/80 hover:text-primary hover:bg-white/10'
                        )}
                      >
                        {link.label}
                        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", servicesOpen && "rotate-180")} />
                      </button>

                      {/* Dropdown - Glassy */}
                      <div
                        className={cn(
                          'absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-500 origin-top',
                          servicesOpen ? 'visible opacity-100 translate-y-0 scale-100' : 'invisible opacity-0 -translate-y-4 scale-95'
                        )}
                      >
                        <div className="w-64 bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl rounded-2xl overflow-hidden p-1.5">
                          {servicesDropdown.map((item) => (
                            <Link
                              key={item.label}
                              to={item.to}
                              className="block px-4 py-2.5 text-xs font-semibold text-foreground/90 rounded-xl hover:bg-primary hover:text-white transition-all duration-200"
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
                        'relative flex items-center px-4 py-2 rounded-full text-xs font-bold tracking-tight transition-all duration-300',
                        active
                          ? 'text-primary bg-primary/10 shadow-[0_0_15px_rgba(14,165,233,0.3)]'
                          : 'text-foreground/80 hover:text-primary hover:bg-white/10'
                      )}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_rgba(14,165,233,1)]" />
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/contacts"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Started <Phone className="h-3.5 w-3.5" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/20 text-foreground transition-all active:scale-90"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Futuristic Vertical Panel */}
      <div
        className={cn(
          'fixed inset-0 top-[4.5rem] z-40 md:hidden transition-all duration-500 p-4',
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <div className="h-full bg-white/20 backdrop-blur-3xl border border-white/30 rounded-[2.5rem] shadow-2xl p-8 overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'px-6 py-4 rounded-3xl text-xl font-bold transition-all duration-300',
                  location.pathname === link.to ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-foreground/80 hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-12 p-8 rounded-[2rem] bg-primary/10 border border-primary/20">
            <h4 className="font-bold text-primary mb-2 text-lg">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:8664189017" className="flex items-center gap-3 font-semibold text-foreground/80">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center"><Phone className="h-5 w-5 text-primary" /></div>
                866-418-9017
              </a>
              <a href="mailto:info@pbisglobal.com" className="flex items-center gap-3 font-semibold text-foreground/80">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center"><Mail className="h-5 w-5 text-primary" /></div>
                info@pbisglobal.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
