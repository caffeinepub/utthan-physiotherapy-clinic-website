import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BookAppointmentButton from '@/components/cta/BookAppointmentButton';
import MobileStickyBookingCta from '@/components/cta/MobileStickyBookingCta';
import ServiceCard from '@/components/services/ServiceCard';
import WhoWeAreSection from '@/components/home/WhoWeAreSection';
import Seo from '@/components/seo/Seo';
import { getLocalBusinessSchema } from '@/lib/seoSchema';
import { CLINIC_CONTENT } from '@/content/clinicContent';
import { SERVICES } from '@/content/services';
import { REVIEWS, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '@/content/reviews';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Utthan Physiotherapy Clinic | Expert Physiotherapy in Kamrej, Surat"
        description="Leading physiotherapy clinic in Kamrej, Surat offering expert treatment for back pain, sports injuries, post-surgical rehabilitation, and more. Book your appointment today!"
        jsonLd={getLocalBusinessSchema()}
      />

      {/* Hero Section - Clean Premium Design with Strong Contrast */}
      <section className="relative overflow-hidden bg-background">
        <div className="container">
          <div className="grid min-h-[85vh] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-medium leading-tight tracking-normal text-primary sm:text-5xl lg:text-6xl">
                  Experience personalized physiotherapy treatment that gets you back to doing what you love
                </h1>
                <p className="text-xl leading-relaxed text-muted-foreground lg:text-2xl">
                  Our expert team uses evidence-based techniques to help you recover faster and stronger.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 text-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Star className="h-5 w-5 fill-secondary text-secondary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-primary">{GOOGLE_RATING} Rating</div>
                    <div className="text-xs text-muted-foreground">{GOOGLE_REVIEW_COUNT} reviews</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-primary">700+ Patients</div>
                    <div className="text-xs text-muted-foreground">Treated successfully</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Award className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-primary">5+ Years</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <BookAppointmentButton size="lg" className="shadow-lg" />
                <Button size="lg" variant="outline" className="border-2" asChild>
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/assets/back_pain.png"
                  alt="Professional physiotherapy treatment for back pain and spine health at Utthan Clinic"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
              <div className="absolute -left-6 -top-6 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-accent/20 py-20 lg:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Why Choose Utthan?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:text-xl">
              Experience the difference with our patient-centered approach and expert care.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CLINIC_CONTENT.whyChooseUs.map((item, index) => (
              <Card key={index} className="group border-2 bg-card transition-all hover:border-secondary/50 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:text-xl">
              Comprehensive physiotherapy services tailored to your recovery needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-secondary/20 bg-card text-center transition-all hover:border-secondary/50 hover:shadow-xl">
              <CardContent className="pt-10">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/10">
                    <Award className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <div className="mb-2 text-5xl font-bold text-primary">5+</div>
                <p className="text-lg text-muted-foreground">Years of Experience</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-secondary/20 bg-card text-center transition-all hover:border-secondary/50 hover:shadow-xl">
              <CardContent className="pt-10">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/10">
                    <Users className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <div className="mb-2 text-5xl font-bold text-primary">700+</div>
                <p className="text-lg text-muted-foreground">Happy Patients</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-secondary/20 bg-card text-center transition-all hover:border-secondary/50 hover:shadow-xl">
              <CardContent className="pt-10">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/10">
                    <Star className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <div className="mb-2 text-5xl font-bold text-primary">{GOOGLE_RATING}</div>
                <p className="text-lg text-muted-foreground">Google Rating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <WhoWeAreSection />

      {/* Testimonials Preview */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              What Our Patients Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:text-xl">
              Real stories from real patients who found relief and recovery at Utthan.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.slice(0, 3).map((review) => (
              <Card key={review.id} className="min-w-0 border-2 bg-card transition-all hover:border-secondary/50 hover:shadow-xl">
                <CardHeader className="min-w-0">
                  <div className="mb-2 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle className="min-w-0 break-words text-lg text-primary">{review.author}</CardTitle>
                </CardHeader>
                <CardContent className="min-w-0">
                  <p className="break-word leading-relaxed text-muted-foreground line-clamp-6">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground" asChild>
              <Link to="/testimonials">
                Read All Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="mb-8 text-xl leading-relaxed opacity-90 lg:text-2xl">
              Book your appointment today and take the first step towards a pain-free life.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <BookAppointmentButton size="lg" variant="secondary" className="shadow-xl" />
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <MobileStickyBookingCta />
    </>
  );
}
