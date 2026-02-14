import { cn } from '@/lib/utils';

interface UtthanLogoProps {
  className?: string;
}

export default function UtthanLogo({ className }: UtthanLogoProps) {
  return (
    <img
      src="/assets/logo.svg"
      alt="Utthan Physiotherapy Clinic"
      className={cn('utthan-logo-brand', 'object-contain', className)}
    />
  );
}
