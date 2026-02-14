import { 
  Activity, 
  Heart, 
  Stethoscope, 
  User, 
  Zap, 
  Brain, 
  Target 
} from 'lucide-react';

interface ServiceIconProps {
  serviceId: string;
  className?: string;
}

export default function ServiceIcon({ serviceId, className = "h-6 w-6" }: ServiceIconProps) {
  const iconMap: Record<string, React.ReactNode> = {
    'back-pain-therapy': <Activity className={className} />,
    'sports-injury-rehabilitation': <Zap className={className} />,
    'post-surgical-physiotherapy': <Stethoscope className={className} />,
    'posture-correction': <User className={className} />,
    'manual-therapy': <Heart className={className} />,
    'neurological-rehabilitation': <Brain className={className} />,
    'dry-needling': <Target className={className} />,
  };

  return <>{iconMap[serviceId] || <Activity className={className} />}</>;
}

