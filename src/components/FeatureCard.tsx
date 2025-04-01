import Image, { StaticImageData } from 'next/image';

interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 rounded-full bg-primary/10 p-3">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={32}
          height={32}
          className="h-8 w-8 text-primary"
        />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
