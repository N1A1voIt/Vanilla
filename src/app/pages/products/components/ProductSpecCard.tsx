import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
// import horizon from '../../photos/horizon.jpg';
interface ProductSpecCardProps {
  title: string;
  specsLabel: string;
  specs: string[];
  image?: string;
  priceLabel?: string;
  priceTiers?: Array<{ dimension: string; price: string }>;
}

export function ProductSpecCard({ title, specsLabel, specs, image, priceLabel, priceTiers }: ProductSpecCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image || "https://images.unsplash.com/photo-1596040033229-a9821ebd05ec?q=80&w=1000"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Section */}
      <div className="p-8 flex-grow">
        <h3 className="text-2xl md:text-3xl font-serif italic text-[#2d2d2d] mb-4 group-hover:text-[#1a1a1a] transition-colors duration-300 tracking-tight">
          {title}
        </h3>

        {priceTiers && priceTiers.length > 0 && (
          <div className="mb-6 bg-[#f5f1e8] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6b6b6b] mb-3">
              {priceLabel}
            </p>
            <div className="space-y-2">
              {priceTiers.map((tier) => (
                <div
                  key={`${tier.dimension}-${tier.price}`}
                  className="flex items-center justify-between gap-4 bg-white px-3 py-2"
                >
                  <span className="text-sm font-medium text-[#6b6b6b]">{tier.dimension}</span>
                  <span className="text-sm font-bold text-[#2d2d2d]">{tier.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-8 bg-[#c9a86f]" />
            <p className="font-semibold text-[#6b6b6b] tracking-widest uppercase text-[10px]">
              {specsLabel}
            </p>
          </div>

          <ul className="space-y-3">
            {specs.map((spec, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start text-[#6b6b6b]"
              >
                <div className="mt-1 mr-3 bg-[#f5f1e8] rounded-full p-1 group-hover:bg-[#e8e4dc] transition-colors duration-300">
                  <Check className="text-[#c9a86f] flex-shrink-0" size={14} strokeWidth={2.5} />
                </div>
                <span className="leading-relaxed text-sm">{spec}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
