import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
              <Wrench className="w-5 h-5 text-accent-foreground" />
            </div>
            <div className={cn(
              "flex flex-col transition-colors",
              isScrolled ? "text-foreground" : "text-card"
            )}>
              <span className="font-bold text-lg leading-tight">STE MTF</span>
              <span className="text-xs opacity-80">SARL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "font-medium transition-colors relative py-2",
                  location.pathname === link.href
                    ? isScrolled ? "text-secondary" : "text-card"
                    : isScrolled ? "text-muted-foreground hover:text-secondary" : "text-card/80 hover:text-card",
                  location.pathname === link.href && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant={isScrolled ? "default" : "hero"} size="sm">
              <Link to="/contact">Nous Contacter</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-card")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-card")} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card rounded-xl shadow-lg p-6 mb-4 animate-scale-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-medium py-2 transition-colors",
                    location.pathname === link.href
                      ? "text-secondary"
                      : "text-muted-foreground hover:text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Nous Contacter
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}