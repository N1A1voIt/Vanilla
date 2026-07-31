import { CheckCircle2 } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ title, description, index }: FeatureCardProps) {
  return (
    <div className="group relative">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
            <CheckCircle2 className="text-amber-900" size={28} strokeWidth={2.5} />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-amber-900 transition-colors">
            {title}
          </h3>
          <p className="text-stone-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
