import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

export default function WhoWeAreSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://utthan.vercel.app/assets/images/dr-banner.jpg"
                alt="Dr. Roshani Mansuriya - Utthan Physiotherapy Clinic"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-6 -top-6 -z-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          </div>

          {/* Content Column */}
          <div className="order-1 space-y-8 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Who are we?
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  At Utthan Physiotherapy Clinic, we offer expert care across neuro, ortho, pediatric, and sports physiotherapy.
                </p>
                
                <p>
                  Our patient-centered approach ensures every treatment is personalised and holistic. We blend natural techniques with advanced methods, focusing on medicine-less healing. With over a year of trusted service, we've helped many regain mobility and confidence. We believe in treating with love—because healing begins with care.
                </p>
                
                <p className="text-xl font-semibold italic text-primary">
                  Heal with hope, move with strength, live with joy.
                </p>
                
                <p className="text-base font-medium text-foreground">
                  - Dr. Roshani Mansuriya
                </p>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground" asChild>
                <Link to="/about">
                  Read Our Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
