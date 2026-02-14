import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ServiceIcon from './ServiceIcon';
import type { Service } from '@/content/services';
import { useState } from 'react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = '/assets/services/service-fallback.dim_1200x800.jpg';

  return (
    <Card className="group flex flex-col overflow-hidden border-2 card-hover hover:border-secondary/50 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-accent">
        <img
          src={imageError ? fallbackImage : service.imagePath}
          alt={service.imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
        {/* Icon Badge */}
        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground shadow-lg">
          <ServiceIcon serviceId={service.id} className="h-6 w-6" />
        </div>
      </div>

      {/* Content */}
      <CardHeader>
        <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
        <CardDescription className="text-base">{service.shortDescription}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="mb-6 space-y-2">
          {service.benefits.slice(0, 3).map((benefit, index) => (
            <li key={index} className="flex items-start text-sm text-muted-foreground">
              <span className="mr-2 mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
              {benefit}
            </li>
          ))}
        </ul>
        <Button variant="link" className="group/btn p-0 text-secondary hover:text-secondary/80" asChild>
          <Link to="/services/$serviceId" params={{ serviceId: service.id }}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
