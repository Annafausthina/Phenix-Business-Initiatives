import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react';
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
  { label: 'Medical Coding', to: '/services/medical-coding' },
  { label: 'Claims Management', to: '/services/claims-management' },
  { label: 'Data Entry / Conversion', to: '/services/data-entry-conversion' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[hsl(222,47%,8%)] shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
          : 'bg-[hsl(222,47%,8%)/90] backdrop-blur-xl'
      )}
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group" aria-label="PBI Global">
            <img
              src="/pbi-logo.png"
              alt="PBI Global"
              className="h-12 w-auto brightness-[1.1] group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
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
                    <div className="relative">
                      <button
                        onMouseEnter={() => setServicesOpen(true)}
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={cn(
                          'flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-md',
                          active
                            ? 'text-amber-400'
                            : 'text-white/70 hover:text-white'
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            'h-3.5 w-3.5 transition-transform duration-300 text-amber-400',
                            servicesOpen && 'rotate-180'
                          )}
                        />
                      </button>
                      {active && (
                        <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-amber-400 rounded-full" />
                      )}

                      {/* Dropdown */}
                      <div
                        className={cn(
                          'absolute left-0 top-full pt-2 transition-all duration-300 origin-top-left min-w-[260px]',
                          servicesOpen
                            ? 'visible opacity-100 translate-y-0'
                            : 'invisible opacity-0 -translate-y-2'
                        )}
                      >
                        <div className="bg-[hsl(222,47%,10%)] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                          {servicesDropdown.map((item) => (
                            <Link
                              key={item.label}
                              to={item.to}
                              className="flex items-center justify-between px-5 py-3.5 text-sm font-medium text-white/70 hover:text-amber-400 hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
                            >
                              {item.label}
                              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <Link
                        to={link.to}
                        className={cn(
                          'block px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-md',
                          active
                            ? 'text-amber-400'
                            : 'text-white/70 hover:text-white'
                        )}
                      >
                        {link.label}
                      </Link>
                      {active && (
                        <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-amber-400 rounded-full" />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contacts"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 text-[hsl(222,47%,8%)] text-sm font-bold transition-all duration-300 hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] active:scale-95"
            >
              Get in Touch <Phone className="h-3.5 w-3.5" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg border border-white/15 text-white/80 hover:border-amber-400/50 hover:text-amber-400 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'md:hidden transition-all duration-400 overflow-hidden',
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-[hsl(222,47%,8%)] border-t border-white/10 px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'block px-4 py-3 rounded-lg text-base font-medium transition-all',
                location.pathname === link.to
                  ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-white/10 mt-4">
            <a
              href="tel:8664189017"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-white/60"
            >
              <Phone className="h-4 w-4 text-amber-400" />
              866-418-9017
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
