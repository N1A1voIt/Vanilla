import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import { ProductSpecCard } from './products/components/ProductSpecCard';

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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={heroPic}
            alt="Premium vanilla beans"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-[2px]"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white mb-8 drop-shadow-2xl"
          >
            {t.products.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-100 max-w-3xl mx-auto drop-shadow-lg leading-relaxed font-light"
          >
            {t.products.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Vanilla Beans Grid */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-4 block"
            >
              Our Harvest
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">{t.products.beansTitle}</h2>
            <div className="h-1.5 w-24 bg-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {beanProducts.map((product) => (
              <ProductSpecCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Processed Vanilla Grid */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-4 block"
            >
              Value Added
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">{t.products.processedTitle}</h2>
            <div className="h-1.5 w-24 bg-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {processedProducts.map((product) => (
              <ProductSpecCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders / CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={photoPackaging}
            alt="Packaging"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-amber-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-white mb-8">{t.products.customTitle}</h2>
              <p className="text-xl text-amber-50 mb-10 leading-relaxed font-light">
                {t.products.customDesc}
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-white hover:bg-amber-50 text-amber-950 font-semibold rounded-xl transition-all hover:scale-105 shadow-2xl text-lg group"
              >
                {t.home.contactUs}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-serif text-amber-200 mb-6">{t.products.pricingTitle}</h3>
              <p className="text-lg text-amber-50/90 leading-relaxed font-light mb-8">
                {t.products.pricingDesc}
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-amber-100/80 text-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-3" />
                  Reliable direct shipping from Madagascar
                </div>
                <div className="flex items-center text-amber-100/80 text-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-3" />
                  Volume discounts for bulk contracts
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
