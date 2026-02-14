import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Seo from '@/components/seo/Seo';
import { THERAPISTS } from '@/content/therapists';

export default function TherapistsPage() {
  return (
    <>
      <Seo
        title="Our Team | Utthan Physiotherapy Clinic"
        description="Meet our experienced team of physiotherapists in Ahmedabad. Expert care from qualified professionals dedicated to your recovery."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Meet Our Team</h1>
            <p className="text-lg text-muted-foreground">
              Our experienced physiotherapists are dedicated to providing you with the highest quality care.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {THERAPISTS.map((therapist) => (
              <Card key={therapist.id} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-muted">
                    <div className="flex h-full items-center justify-center text-6xl font-bold text-muted-foreground">
                      {therapist.name.charAt(0)}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{therapist.name}</CardTitle>
                  <p className="text-sm text-primary">{therapist.title}</p>
                  <p className="text-sm text-muted-foreground">{therapist.experience} of experience</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{therapist.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold">Qualifications:</h4>
                    <ul className="space-y-1">
                      {therapist.qualifications.map((qual, index) => (
                        <li key={index} className="text-xs text-muted-foreground">
                          • {qual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-semibold">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {therapist.specializations.map((spec, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
