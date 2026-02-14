import { cn } from '@/lib/utils';

interface UtthanLogoProps {
  className?: string;
}

export default function UtthanLogo({ className }: UtthanLogoProps) {
  return (
    <div
      className={cn('logo-themed h-10 w-auto', className)}
      role="img"
      aria-label="Utthan Physiotherapy Clinic"
      style={{ aspectRatio: '200 / 40' }}
    />
  );
}
