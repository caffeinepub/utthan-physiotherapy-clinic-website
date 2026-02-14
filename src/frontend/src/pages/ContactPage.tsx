import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BookAppointmentButton from '@/components/cta/BookAppointmentButton';
import EmailButton from '@/components/cta/EmailButton';
import GoogleMapEmbed from '@/components/contact/GoogleMapEmbed';
import Seo from '@/components/seo/Seo';
import { CLINIC_INFO, getFullAddress, getPhoneLink } from '@/lib/clinicInfo';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us | Utthan Physiotherapy Clinic"
        description={`Contact Utthan Physiotherapy Clinic in Kamrej, Surat. Call ${CLINIC_INFO.phone} or visit us at ${getFullAddress()}. Book your appointment today!`}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/30 to-secondary/10 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with us to schedule an appointment or ask any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="card-hover border-2 border-secondary/20">
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
                    <Phone className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">Call us during business hours</p>
                  <Button variant="outline" className="border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground" asChild>
                    <a href={getPhoneLink()}>{CLINIC_INFO.phone}</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover border-2 border-secondary/20">
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
                    <Mail className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">Send us a message anytime</p>
                  <EmailButton />
                </CardContent>
              </Card>

              <Card className="card-hover border-2 border-secondary/20">
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
                    <MapPin className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{getFullAddress()}</p>
                  <Button variant="outline" className="border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground" asChild>
                    <a href={CLINIC_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover border-2 border-secondary/20">
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
                    <Clock className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p>{CLINIC_INFO.hours.weekdays}</p>
                    <p>{CLINIC_INFO.hours.sunday}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking CTA Card with Image and Map */}
            <div className="flex flex-col space-y-6">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/assets/generated/physio-illustration-2.dim_1200x800.png"
                  alt="Professional physiotherapy consultation and treatment"
                  className="h-full w-full object-cover"
                />
              </div>
              <Card className="border-2 border-secondary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Book Your Appointment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Ready to start your recovery journey? Book an appointment with our expert physiotherapists today.
                  </p>
                  <BookAppointmentButton size="lg" className="w-full shadow-lg" />
                  <p className="text-center text-sm text-muted-foreground">
                    Or call us at{' '}
                    <a href={getPhoneLink()} className="font-medium text-secondary hover:underline">
                      {CLINIC_INFO.phone}
                    </a>
                  </p>
                </CardContent>
              </Card>

              {/* Google Map */}
              <Card className="border-2 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <GoogleMapEmbed />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
