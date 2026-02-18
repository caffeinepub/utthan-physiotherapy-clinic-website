import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Heart, Users, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BookAppointmentButton from '@/components/cta/BookAppointmentButton';
import Seo from '@/components/seo/Seo';
import { getLocalBusinessSchema } from '@/lib/seoSchema';
import { CLINIC_CONTENT } from '@/content/clinicContent';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo
        title="About Us | Utthan Physiotherapy Clinic in Kamrej, Surat"
        description="Learn about Utthan Physiotherapy Clinic in Kamrej, Surat. Our expert team is dedicated to providing personalized physiotherapy care to help you recover and thrive."
        jsonLd={getLocalBusinessSchema()}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              About Utthan Physiotherapy
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground lg:text-2xl">
              Dedicated to helping you achieve optimal health and wellness through expert physiotherapy care.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>{CLINIC_CONTENT.about.story}</p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/assets/unnamed.webp"
                  alt="Utthan Physiotherapy Clinic treatment facility in Kamrej, Surat with modern physiotherapy equipment and treatment beds"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-accent/20 py-20 lg:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="border-2 bg-card transition-all hover:border-secondary/50 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">{CLINIC_CONTENT.about.mission}</p>
              </CardContent>
            </Card>
            <Card className="border-2 bg-card transition-all hover:border-secondary/50 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">{CLINIC_CONTENT.about.vision}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {CLINIC_CONTENT.whoWeAre.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:text-xl">
              {CLINIC_CONTENT.whoWeAre.subtitle}
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {CLINIC_CONTENT.whoWeAre.description}
            </p>
            <div className="rounded-2xl border-2 border-secondary/20 bg-card p-8">
              <p className="text-lg font-medium italic leading-relaxed text-primary">
                "{CLINIC_CONTENT.whoWeAre.commitment}"
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {CLINIC_CONTENT.whoWeAre.features.map((feature, index) => (
                <Card key={index} className="border-2 bg-card transition-all hover:border-secondary/50 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg text-primary">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                        {index === 0 ? <Heart className="h-5 w-5 text-secondary" /> : <Users className="h-5 w-5 text-secondary" />}
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-accent/20 py-20 lg:py-32">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:text-xl">
              The principles that guide everything we do at Utthan Physiotherapy.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {CLINIC_CONTENT.about.values.map((value, index) => (
              <Card key={index} className="border-2 bg-card text-center transition-all hover:border-secondary/50 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Experience the Utthan Difference?
            </h2>
            <p className="mb-8 text-xl leading-relaxed opacity-90 lg:text-2xl">
              Join hundreds of satisfied patients who have found relief and recovery with our expert care.
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
    </>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
