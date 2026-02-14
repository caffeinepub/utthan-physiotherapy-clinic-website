import Seo from '@/components/seo/Seo';
import ServiceCard from '@/components/services/ServiceCard';
import { SERVICES } from '@/content/services';

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Our Services | Utthan Physiotherapy Clinic"
        description="Comprehensive physiotherapy services in Kamrej, Surat including back pain therapy, sports injury rehabilitation, post-surgical physiotherapy, and more."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/30 to-secondary/10 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive physiotherapy services tailored to your unique recovery needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
