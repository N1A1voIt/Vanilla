import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import { ProductSpecCard } from './products/components/ProductSpecCard';
import { VanillaLeaf } from '../components/decorative/VanillaLeaf';
import { VanillaPod } from '../components/decorative/VanillaPod';

import photoPackaging from '../../photos/packaging.jpg';
import tkPic from '../../photos/vanilla-tk-black.jpeg';
import gourmetPic from '../../photos/vanilla-gourmet.jpeg';
import bGrade from '../../photos/b-grade-vanilla.jpeg';
import beans from '../../photos/vanilla-beans.jpeg';
import vanillaPowder from '../../photos/vanilla-prowder.jpeg';
import heroPic from '../../photos/heroPic.jpg';
// import  from '../../photos/heroPic.jpg';
export function Products() {
  const t = useTranslation();

  const beanProducts = [
    {
      title: t.products.tkNoirTitle,
      specsLabel: t.products.specsLabel,
      priceLabel: t.products.priceBySizeLabel,
      priceTiers: [
        { dimension: '14cm - 16cm', price: t.products.tkNoirPrice14 },
        { dimension: '17cm - 18cm', price: t.products.tkNoirPrice16 },
      ],
      image: tkPic,
      specs: [
        t.products.tkNoirLength,
        t.products.tkNoirMoisture,
        t.products.tkNoirVanillin,
        t.products.tkNoirAppearance,
        t.products.tkNoirAroma,
        t.products.tkNoirUse,
      ],
    },
    {
      title: t.products.gourmetTitle,
      specsLabel: t.products.specsLabel,
      priceLabel: t.products.priceBySizeLabel,
      priceTiers: [
        { dimension: '14cm - 16cm', price: t.products.gourmetPrice14 },
        { dimension: '17cm - 18cm', price: t.products.gourmetPrice18 },
      ],
      image: gourmetPic,
      specs: [
        t.products.gourmetLength,
        t.products.gourmetMoisture,
        t.products.gourmetVanillin,
        t.products.gourmetAppearance,
        t.products.gourmetAroma,
        t.products.gourmetUse,
      ],
    },
    {
      title: t.products.gradeBTitle,
      specsLabel: t.products.specsLabel,
      priceLabel: t.products.priceBySizeLabel,
      priceTiers: [{ dimension: '14cm - 16cm', price: t.products.gradeBPrice1416 }],
      image: bGrade,
      specs: [
        t.products.gradeBLength,
        t.products.gradeBMoisture,
        t.products.gradeBVanillin,
        t.products.gradeBAppearance,
        t.products.gradeBAroma,
        t.products.gradeBUse,
      ],
    },
    {
      title: t.products.gradeCTitle,
      specsLabel: t.products.specsLabel,
      priceLabel: t.products.priceBySizeLabel,
      priceTiers: [{ dimension: '10cm - 14cm', price: t.products.gradeCPrice1013 }],
      image: bGrade,
      specs: [
        t.products.gradeCLength,
        t.products.gradeCMoisture,
        t.products.gradeCVanillin,
        t.products.gradeCAppearance,
        t.products.gradeCAroma,
        t.products.gradeCUse,
      ],
    }
  ];

  const processedProducts = [
    {
      title: t.products.powderTitle,
      specsLabel: t.products.specsLabel,
      priceLabel: t.products.priceLabel,
      priceTiers: [{ dimension: t.products.perKgLabel, price: t.products.powderPrice }],
      image: vanillaPowder,
      specs: [t.products.powderDesc],
    },
    {
      title: t.products.seedsTitle,
      specsLabel: t.products.specsLabel,
      priceLabel: t.products.priceLabel,
      priceTiers: [{ dimension: t.products.perKgLabel, price: t.products.seedsPrice }],
      image: beans,
      specs: [t.products.seedsDesc],
    }
  ];

  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <VanillaLeaf className="absolute top-10 left-8 opacity-30 animate-float" />
        <VanillaPod className="absolute top-32 right-12 opacity-25 animate-float-delayed" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-[#2d2d2d] mb-6 tracking-tight leading-[1.1]"
          >
            {t.products.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed"
          >
            {t.products.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Vanilla Beans Grid */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <VanillaLeaf className="absolute bottom-20 left-8 opacity-25 animate-float" position="right" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#2d2d2d] mb-4">
              {t.products.beansTitle}
            </h2>
            <p className="text-base text-[#6b6b6b] max-w-2xl mx-auto">Our Harvest</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {beanProducts.map((product) => (
              <ProductSpecCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Processed Vanilla Grid */}
      <section className="py-20 md:py-28 bg-[#f5f1e8] relative">
        <VanillaPod className="absolute top-20 right-16 opacity-30 animate-float-delayed" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#2d2d2d] mb-4">
              {t.products.processedTitle}
            </h2>
            <p className="text-base text-[#6b6b6b] max-w-2xl mx-auto">Value Added Products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {processedProducts.map((product) => (
              <ProductSpecCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders / CTA */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white p-4 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <ImageWithFallback
                  src={photoPackaging}
                  alt="Packaging"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <VanillaPod className="absolute -bottom-4 -left-4 opacity-40" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#2d2d2d] mb-6">
                {t.products.customTitle}
              </h2>
              <p className="text-base text-[#6b6b6b] mb-6 leading-relaxed">
                {t.products.customDesc}
              </p>

              <div className="bg-[#f5f1e8] p-6 mb-8">
                <h3 className="text-lg font-semibold text-[#2d2d2d] mb-4">{t.products.pricingTitle}</h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed mb-4">
                  {t.products.pricingDesc}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start text-[#6b6b6b] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a86f] mr-3 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">FOB pricing from Madagascar ports</span>
                  </div>
                  <div className="flex items-start text-[#6b6b6b] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a86f] mr-3 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">Volume discounts for bulk contracts</span>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2d2d2d] hover:bg-[#1a1a1a] text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                {t.home.contactUs}
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
