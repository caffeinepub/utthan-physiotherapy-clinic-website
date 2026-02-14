import { useParams, Link } from '@tanstack/react-router';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BookAppointmentButton from '@/components/cta/BookAppointmentButton';
import ServiceIcon from '@/components/services/ServiceIcon';
import Seo from '@/components/seo/Seo';
import { getServiceById } from '@/content/services';
import { getServiceSchema } from '@/lib/seoSchema';

export default function ServiceDetailPage() {
  const { serviceId } = useParams({ from: '/services/$serviceId' });
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="container py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold text-primary">Service Not Found</h1>
        <p className="mb-8 text-muted-foreground">The service you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`${service.title} | Utthan Physiotherapy Clinic`}
        description={service.fullDescription}
        jsonLd={getServiceSchema(service)}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/30 to-secondary/10 py-16 lg:py-24">
        <div className="container">
          <Button variant="ghost" className="mb-6 text-primary hover:text-secondary" asChild>
            <Link to="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg">
                <ServiceIcon serviceId={service.id} className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{service.title}</h1>
            </div>
            <p className="text-xl text-muted-foreground">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="py-8">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={service.imagePath}
                alt={service.imageAlt}
                className="h-auto w-full object-cover"
                style={{ aspectRatio: '3/2' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 lg:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-primary">About This Service</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{service.fullDescription}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="card-hover border-2 border-secondary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-primary">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                    Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover border-2 border-secondary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-primary">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                    Who It's For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.whoItsFor.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-accent/20 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold text-primary">Ready to Get Started?</h3>
                <p className="mb-6 text-muted-foreground">
                  Book your appointment today and begin your journey to recovery.
                </p>
                <BookAppointmentButton size="lg" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

