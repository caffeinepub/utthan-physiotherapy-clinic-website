import { Card, CardContent } from '@/components/ui/card';
import { PRIDE_MOMENTS } from '@/content/prideMoments';
import PrideMomentsCarousel from './PrideMomentsCarousel';

export default function PrideMomentsSection() {
  return (
    <section className="bg-accent/20 py-20 lg:py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            {PRIDE_MOMENTS.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:text-xl">
            {PRIDE_MOMENTS.subtitle}
          </p>
        </div>

        <div className="mb-12">
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            {PRIDE_MOMENTS.description}
          </p>
        </div>

        <div className="space-y-12">
          {PRIDE_MOMENTS.events.map((event) => (
            <Card key={event.id} className="overflow-hidden border-2 bg-card shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center">
                    <h3 className="mb-4 text-xl font-semibold leading-relaxed text-primary lg:text-2xl">
                      {event.details}
                    </h3>
                  </div>
                  
                  <div>
                    <PrideMomentsCarousel images={event.images} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
