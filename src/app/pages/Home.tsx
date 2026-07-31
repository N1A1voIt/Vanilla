import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import { FeatureCard } from './home/components/FeatureCard';
import { FeaturedProductCard } from './home/components/FeaturedProductCard';
import { VanillaLeaf } from '../components/decorative/VanillaLeaf';
import { VanillaPod } from '../components/decorative/VanillaPod';
import heroPic from '../../photos/heroPic.jpg';

export function Home() {
  const t = useTranslation();

  const features = [
    { title: t.home.directSourcing, description: t.home.directSourcingDesc },
    { title: t.home.ethicalProduction, description: t.home.ethicalProductionDesc },
    { title: t.home.premiumQuality, description: t.home.premiumQualityDesc },
    { title: t.home.reliableSupply, description: t.home.reliableSupplyDesc },
  ];

  const featuredProducts = [
    { name: t.home.featTkNoir, description: t.home.featTkNoirDesc },
    { name: t.home.featGourmet, description: t.home.featGourmetDesc },
    { name: t.home.featPowder, description: t.home.featPowderDesc },
  ];

  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section - Editorial Style */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative Elements */}
          <VanillaLeaf className="absolute top-10 left-4 md:left-20 opacity-40 animate-float" />
          <VanillaPod className="absolute top-32 right-8 md:right-24 opacity-30 animate-float-delayed" />
          <VanillaLeaf className="absolute bottom-20 right-12 md:right-40 opacity-35 animate-float" position="right" />

          {/* Hero Content */}
          <div className="text-center mb-16 relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-[#2d2d2d] mb-6 tracking-tight leading-[1.1]">
              {t.home.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-[#6b6b6b] mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.home.heroSubtitle}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2d2d2d] hover:bg-[#1a1a1a] text-white transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl"
            >
              {t.home.getQuote}
            </Link>
            <p className="text-xs text-[#9b9b9b] mt-3">* Premium Madagascar vanilla for export</p>
          </div>

          {/* Floating Photo Cards */}
          <div className="relative h-[500px] md:h-[600px] max-w-5xl mx-auto">
            <div className="absolute top-0 left-[5%] md:left-[10%] w-[35%] md:w-[30%] rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-500 hover:scale-105 hover:z-20">
              <div className="bg-white p-3 shadow-2xl">
                <ImageWithFallback
                  src={heroPic}
                  alt="Premium vanilla beans"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            <div className="absolute top-[60px] md:top-[80px] left-[35%] md:left-[38%] w-[40%] md:w-[35%] rotate-[4deg] hover:rotate-[2deg] transition-transform duration-500 hover:scale-105 hover:z-20">
              <div className="bg-white p-3 shadow-2xl">
                <ImageWithFallback
                  src={heroPic}
                  alt="Vanilla cultivation"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            <div className="absolute top-[40px] md:top-[60px] right-[8%] md:right-[12%] w-[32%] md:w-[28%] rotate-[6deg] hover:rotate-[3deg] transition-transform duration-500 hover:scale-105 hover:z-20">
              <div className="bg-white p-3 shadow-2xl">
                <ImageWithFallback
                  src={heroPic}
                  alt="Quality vanilla"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section - Editorial Style */}
      <section className="py-20 md:py-28 bg-white relative">
        <VanillaLeaf className="absolute top-10 left-8 opacity-25 animate-float-delayed" />
        <VanillaPod className="absolute bottom-16 right-12 opacity-20 animate-float" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#2d2d2d] mb-4">
              {t.home.whyChooseTitle}
            </h2>
            <p className="text-base text-[#6b6b6b] max-w-2xl mx-auto">
              Introducing you a wide variety of premium vanilla with unique characteristics and the creamiest quality from Madagascar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center group">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <ImageWithFallback
                    src={heroPic}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm md:text-base font-medium text-[#2d2d2d] mb-1">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Asymmetric Layout */}
      <section className="py-20 md:py-28 bg-[#f5f1e8] relative overflow-hidden">
        <VanillaPod className="absolute top-20 right-16 opacity-30 animate-float" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#2d2d2d] mb-4">
              {t.home.featuredProductsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {featuredProducts.map((product, index) => (
              <div
                key={product.name}
                className="group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-full mx-auto max-w-[200px]">
                    <ImageWithFallback
                      src={heroPic}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-[#2d2d2d] mb-3 text-center">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#6b6b6b] mb-6 text-center leading-relaxed">
                    {product.description}
                  </p>
                  <Link
                    to="/contact"
                    className="block text-center px-6 py-3 bg-[#2d2d2d] hover:bg-[#1a1a1a] text-white transition-all duration-300 font-medium text-sm"
                  >
                    {t.home.requestQuote}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/CTA Section - Split Layout */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="bg-white p-4 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <ImageWithFallback
                  src={heroPic}
                  alt="About HRS Vanilla"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <VanillaLeaf className="absolute -bottom-4 -right-4 opacity-40" />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#2d2d2d] mb-6">
                {t.home.readyTitle}
              </h2>
              <p className="text-base text-[#6b6b6b] mb-8 leading-relaxed">
                {t.home.readySubtitle}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2d2d2d] hover:bg-[#1a1a1a] text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                {t.home.contactUs}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
