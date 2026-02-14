import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Seo from '@/components/seo/Seo';
import { CONDITIONS } from '@/content/conditions';

export default function ConditionsPage() {
  return (
    <>
      <Seo
        title="Conditions We Treat | Utthan Physiotherapy Clinic"
        description="Expert treatment for neck & back pain, frozen shoulder, knee pain, sciatica, postpartum recovery, sports injuries, and more in Ahmedabad."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Conditions We Treat</h1>
            <p className="text-lg text-muted-foreground">
              We provide expert treatment for a wide range of musculoskeletal and neurological conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="space-y-8">
            {CONDITIONS.map((condition) => (
              <Card key={condition.id} className="border-2 transition-all hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="text-2xl">{condition.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">{condition.description}</p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-3 font-semibold">Common Symptoms:</h3>
                      <ul className="space-y-2">
                        {condition.symptoms.map((symptom, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <span className="mr-2 mt-0.5 text-primary">•</span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 font-semibold">Treatment Approaches:</h3>
                      <ul className="space-y-2">
                        {condition.treatments.map((treatment, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <span className="mr-2 mt-0.5 text-primary">•</span>
                            {treatment}
                          </li>
                        ))}
                      </ul>
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
