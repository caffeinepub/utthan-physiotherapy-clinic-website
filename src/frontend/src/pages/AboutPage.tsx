import { Heart, Target, Award, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Seo from '@/components/seo/Seo';
import { CLINIC_CONTENT } from '@/content/clinicContent';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | Utthan Physiotherapy Clinic"
        description="Learn about Utthan Physiotherapy Clinic - our mission, vision, values, and commitment to providing exceptional physiotherapy care in Kamrej, Surat."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/30 to-secondary/10 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">About Utthan</h1>
            <p className="text-lg text-muted-foreground">
              Dedicated to helping you achieve optimal physical function and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Story</h2>
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">{CLINIC_CONTENT.about.story}</p>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/clinic-photo-1.dim_1200x800.jpg"
                alt="Utthan Physiotherapy Clinic - modern facility in Kamrej, Surat"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-accent/30 py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="card-hover border-2 border-secondary/20">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{CLINIC_CONTENT.about.mission}</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-2 border-secondary/20">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{CLINIC_CONTENT.about.vision}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Core Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CLINIC_CONTENT.about.values.map((value, index) => (
              <Card key={index} className="card-hover border-2 hover:border-secondary/50">
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
                    <Heart className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-lg text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
