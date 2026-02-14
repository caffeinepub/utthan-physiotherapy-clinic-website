import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CLINIC_INFO } from '@/lib/clinicInfo';
import { cn } from '@/lib/utils';

interface BookAppointmentButtonProps {
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link';
}

export default function BookAppointmentButton({
  className,
  size = 'default',
  variant = 'secondary',
}: BookAppointmentButtonProps) {
  return (
    <Button
      size={size}
      variant={variant}
      className={cn('btn-hover font-semibold shadow-md', className)}
      asChild
    >
      <a href={CLINIC_INFO.calendlyUrl} target="_blank" rel="noopener noreferrer">
        <Calendar className="mr-2 h-4 w-4" />
        Book Appointment
      </a>
    </Button>
  );
}

