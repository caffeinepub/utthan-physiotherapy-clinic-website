import { Star, Quote, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Seo from '@/components/seo/Seo';
import { REVIEWS } from '@/content/reviews';
import { CLINIC_INFO } from '@/lib/clinicInfo';
import { getReviewSchema } from '@/lib/seoSchema';

export default function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Patient Testimonials | Utthan Physiotherapy Clinic"
        description="Read what our patients say about their experience at Utthan Physiotherapy Clinic in Kamrej, Surat. Real reviews from real people."
        jsonLd={getReviewSchema()}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/30 to-secondary/10 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10">
                <Quote className="h-8 w-8 text-secondary" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">Patient Testimonials</h1>
            <p className="text-lg text-muted-foreground">
              Hear from our patients about their recovery journey and experience with our care.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review) => (
              <Card key={review.id} className="card-hover min-w-0 border-2 border-secondary/20 hover:border-secondary/50">
                <CardHeader className="min-w-0">
                  <div className="mb-3 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle className="min-w-0 break-words text-lg text-primary">{review.author}</CardTitle>
                  {review.date && (
                    <p className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="min-w-0">
                  <Quote className="mb-2 h-6 w-6 text-secondary/30" />
                  <p className="break-word text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Reviews Link */}
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground" asChild>
              <a href={CLINIC_INFO.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                More Reviews on Google
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
