import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookAppointmentButton from '@/components/cta/BookAppointmentButton';
import UtthanLogo from '@/components/branding/UtthanLogo';

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/team', label: 'Our Team' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-primary">
          <UtthanLogo className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              activeProps={{
                className: 'text-primary',
              }}
            >
              {link.label}
            </Link>
          ))}
          <BookAppointmentButton size="sm" />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container space-y-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-base font-medium text-foreground transition-colors hover:text-primary"
                activeProps={{
                  className: 'text-primary',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <BookAppointmentButton size="sm" className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
