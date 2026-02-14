import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CLINIC_INFO } from '@/lib/clinicInfo';

export default function MobileStickyBookingCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background p-4 shadow-xl lg:hidden" style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}>
      <Button size="lg" variant="secondary" className="btn-hover w-full font-semibold shadow-lg" asChild>
        <a href={CLINIC_INFO.calendlyUrl} target="_blank" rel="noopener noreferrer">
          <Calendar className="mr-2 h-5 w-5" />
          Book Your Appointment
        </a>
      </Button>
    </div>
  );
}

