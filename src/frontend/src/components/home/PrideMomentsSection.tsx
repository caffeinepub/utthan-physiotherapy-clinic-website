import { Card, CardContent } from '@/components/ui/card';
import { PRIDE_MOMENTS } from '@/content/prideMoments';

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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRIDE_MOMENTS.photos.map((photo) => (
            <Card key={photo.id} className="group overflow-hidden border-2 bg-card transition-all hover:border-secondary/50 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary">{photo.caption}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
