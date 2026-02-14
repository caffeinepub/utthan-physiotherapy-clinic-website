import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CLINIC_INFO } from '@/lib/clinicInfo';
import { cn } from '@/lib/utils';

interface EmailButtonProps {
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link';
  subject?: string;
  body?: string;
}

export default function EmailButton({
  className,
  size = 'default',
  variant = 'outline',
  subject = 'Inquiry from Website',
  body = '',
}: EmailButtonProps) {
  const mailtoUrl = `mailto:${CLINIC_INFO.email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ''
  }`;

  return (
    <Button size={size} variant={variant} className={cn('border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground', className)} asChild>
      <a href={mailtoUrl}>
        <Mail className="mr-2 h-4 w-4" />
        Email Us
      </a>
    </Button>
  );
}
