import { cn } from '@/lib/utils';

interface UtthanLogoProps {
  className?: string;
}

export default function UtthanLogo({ className }: UtthanLogoProps) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-auto w-full', className)}
      aria-label="Utthan Physiotherapy Clinic"
    >
      {/* Main Circle/Badge */}
      <circle cx="40" cy="40" r="35" fill="currentColor" opacity="0.1" />
      
      {/* Stylized Person/Movement Icon */}
      <path
        d="M40 20 C45 20 48 23 48 28 C48 33 45 36 40 36 C35 36 32 33 32 28 C32 23 35 20 40 20 Z"
        fill="currentColor"
      />
      <path
        d="M40 38 L40 52 M40 45 L32 50 M40 45 L48 50 M40 52 L32 62 M40 52 L48 62"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Text: Utthan */}
      <text
        x="70"
        y="45"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill="currentColor"
      >
        Utthan
      </text>
      
      {/* Subtitle: Physiotherapy */}
      <text
        x="70"
        y="60"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="11"
        fontWeight="500"
        fill="currentColor"
        opacity="0.7"
      >
        Physiotherapy Clinic
      </text>
    </svg>
  );
}
