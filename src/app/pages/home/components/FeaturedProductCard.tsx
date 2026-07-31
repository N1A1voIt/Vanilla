import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

interface FeaturedProductCardProps {
  name: string;
  description: string;
  ctaLabel: string;
  index: number;
}

export function FeaturedProductCard({ name, description, ctaLabel }: FeaturedProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-stone-100 hover:border-amber-200 hover:-translate-y-2">
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-semibold text-amber-900 mb-4 group-hover:text-amber-800 transition-colors">
          {name}
        </h3>
        <p className="text-stone-600 leading-relaxed">
          {description}
        </p>
      </div>
      <Link
        to="/contact"
        className="group/btn inline-flex items-center justify-center w-full px-6 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
      >
        {ctaLabel}
        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
