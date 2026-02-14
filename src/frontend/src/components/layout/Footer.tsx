import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { CLINIC_INFO, getFullAddress, getPhoneLink } from '@/lib/clinicInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'utthan-physio'
  );

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Utthan Physiotherapy</h3>
            <p className="text-sm text-primary-foreground/80">
              Expert physiotherapy care in Kamrej, Surat. We help you recover, rehabilitate, and achieve better movement.
            </p>
            <div className="mt-4 flex space-x-3">
              <a
                href={CLINIC_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 transition-colors hover:text-secondary"
                aria-label="Visit our Instagram page"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 transition-colors hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 transition-colors hover:text-secondary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-primary-foreground/80 transition-colors hover:text-secondary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-primary-foreground/80 transition-colors hover:text-secondary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/80 transition-colors hover:text-secondary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Back Pain Therapy</li>
              <li>Sports Injury Rehabilitation</li>
              <li>Post-Surgical Physiotherapy</li>
              <li>Posture Correction</li>
              <li>Manual Therapy</li>
              <li>Neurological Rehabilitation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">{getFullAddress()}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-secondary" />
                <a
                  href={getPhoneLink()}
                  className="text-primary-foreground/80 transition-colors hover:text-secondary"
                >
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-secondary" />
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="text-primary-foreground/80 transition-colors hover:text-secondary"
                >
                  {CLINIC_INFO.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm text-primary-foreground/80">
              <p className="font-medium">Hours:</p>
              <p>{CLINIC_INFO.hours.weekdays}</p>
              <p>{CLINIC_INFO.hours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>
            © {currentYear} Utthan Physiotherapy Clinic. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center">
            Built with <Heart className="mx-1 h-4 w-4 fill-secondary text-secondary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-medium text-secondary hover:text-secondary/80"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
