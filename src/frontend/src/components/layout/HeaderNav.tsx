import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import BookAppointmentButton from '../cta/BookAppointmentButton';
import UtthanLogo from '../branding/UtthanLogo';
import { getPhoneLink } from '@/lib/clinicInfo';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Conditions', path: '/conditions' },
  { label: 'Our Team', path: '/team' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <UtthanLogo className="h-10 w-32 text-primary sm:h-12 sm:w-40" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                currentPath === link.path ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center space-x-3 lg:flex">
          <Button variant="outline" size="sm" className="border-muted-foreground/30 hover:border-secondary hover:text-secondary" asChild>
            <a href={getPhoneLink()}>
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
          <BookAppointmentButton />
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-primary" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 py-4">
              <nav className="flex flex-col space-y-3">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.path}>
                    <Link
                      to={link.path}
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent ${
                        currentPath === link.path ? 'bg-accent text-primary' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-muted-foreground/30" asChild>
                  <a href={getPhoneLink()}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <BookAppointmentButton className="w-full" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
