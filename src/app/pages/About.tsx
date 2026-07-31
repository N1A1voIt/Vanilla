import { Award, ShieldCheck, Handshake, MessageCircleHeart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import { VanillaLeaf } from '../components/decorative/VanillaLeaf';
import { VanillaPod } from '../components/decorative/VanillaPod';
import cult from '../../photos/cult.jpg';
export function About() {
  const t = useTranslation();
  
  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <VanillaLeaf className="absolute top-10 left-8 opacity-30 animate-float" />
        <VanillaPod className="absolute top-32 right-12 opacity-25 animate-float-delayed" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif italic text-[#2d2d2d] mb-6">
            {t.about.title}
          </h1>
          <p className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white relative">
        <VanillaLeaf className="absolute bottom-20 right-12 opacity-25 animate-float" position="right" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-serif italic text-[#2d2d2d] mb-6">
                {t.about.ourStoryTitle}
              </h2>
              <div className="space-y-4 text-base text-[#6b6b6b]">
                <p className="leading-relaxed">
                  {t.about.ourStoryP1}
                </p>
                <p className="leading-relaxed">
                  {t.about.ourStoryP2}
                </p>
                <p className="leading-relaxed">
                  {t.about.ourStoryP3}
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-white p-4 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <ImageWithFallback
                  src={cult}
                  alt="Hands harvesting"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-28 bg-[#f5f1e8] relative">
        <VanillaPod className="absolute top-20 left-16 opacity-30 animate-float-delayed" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
              <Award className="text-[#c9a86f]" size={36} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#2d2d2d] mb-6">
              {t.about.visionTitle}
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed">
              {t.about.visionDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Commitments */}
      <section className="py-20 md:py-28 bg-white relative">
        <VanillaLeaf className="absolute top-16 right-8 opacity-25 animate-float" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#2d2d2d] mb-4">
              {t.about.trustTitle}
            </h2>
            <p className="text-base text-[#6b6b6b] max-w-2xl mx-auto">
              {t.about.trustIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#f5f1e8] p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ShieldCheck className="text-[#c9a86f] mx-auto mb-4" size={32} strokeWidth={2} />
              <h3 className="text-xl font-serif italic text-[#2d2d2d] mb-3">{t.about.trustPoint1Title}</h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">{t.about.trustPoint1Desc}</p>
            </div>

            <div className="bg-[#f5f1e8] p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Handshake className="text-[#c9a86f] mx-auto mb-4" size={32} strokeWidth={2} />
              <h3 className="text-xl font-serif italic text-[#2d2d2d] mb-3">{t.about.trustPoint2Title}</h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">{t.about.trustPoint2Desc}</p>
            </div>

            <div className="bg-[#f5f1e8] p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MessageCircleHeart className="text-[#c9a86f] mx-auto mb-4" size={32} strokeWidth={2} />
              <h3 className="text-xl font-serif italic text-[#2d2d2d] mb-3">{t.about.trustPoint3Title}</h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">{t.about.trustPoint3Desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}