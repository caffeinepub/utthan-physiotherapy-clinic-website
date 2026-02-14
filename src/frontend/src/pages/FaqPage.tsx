import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Seo from '@/components/seo/Seo';
import { FAQS } from '@/content/faq';
import { getFAQSchema } from '@/lib/seoSchema';

export default function FaqPage() {
  return (
    <>
      <Seo
        title="Frequently Asked Questions | Utthan Physiotherapy Clinic"
        description="Find answers to common questions about physiotherapy treatment, appointments, insurance, and more at Utthan Physiotherapy Clinic in Ahmedabad."
        jsonLd={getFAQSchema()}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/30 to-secondary/10 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10">
                <HelpCircle className="h-8 w-8 text-secondary" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services, appointments, and treatment process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="rounded-lg border-2 border-border bg-card px-6 transition-colors hover:border-secondary/50"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-secondary hover:no-underline">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}

