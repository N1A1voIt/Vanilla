import { MapPin, Award, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import { SectionWithIcon } from './why-choose-us/components/SectionWithIcon';
import { VanillaLeaf } from '../components/decorative/VanillaLeaf';
import { VanillaPod } from '../components/decorative/VanillaPod';
import horizon from '../../photos/horizon.jpg';
export function WhyChooseUs() {
  const t = useTranslation();

  const trustItems = [
    t.contact.beforeOrderMinimum,
    t.contact.beforeOrderSamples,
    t.contact.beforeOrderPayment,
  ];

  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <VanillaLeaf className="absolute top-10 left-8 opacity-30 animate-float" />
        <VanillaPod className="absolute top-32 right-12 opacity-25 animate-float-delayed" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif italic text-[#2d2d2d] mb-6">{t.whyChooseUs.title}</h1>
          <p className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto">{t.whyChooseUs.subtitle}</p>
        </div>
      </section>

      {/* Reason 1 */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionWithIcon icon={Award} title={t.whyChooseUs.reason1Title}>
              <p className="text-lg text-neutral-700 leading-relaxed">{t.whyChooseUs.reason1Desc}</p>
            </SectionWithIcon>
          </div>
        </div>
      </section>

      {/* Reason 2 */}
      <section className="py-20 md:py-28 bg-[#f5f1e8] relative">
        <VanillaPod className="absolute top-20 left-16 opacity-30 animate-float-delayed" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionWithIcon icon={MapPin} title={t.whyChooseUs.reason2Title}>
              <p className="text-lg text-neutral-700 leading-relaxed">{t.whyChooseUs.reason2Desc}</p>
            </SectionWithIcon>
          </div>
        </div>
      </section>

      {/* Reason 3 */}
      <section className="py-20 md:py-28 bg-white relative">
        <VanillaLeaf className="absolute bottom-20 right-12 opacity-25 animate-float" position="right" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionWithIcon icon={Shield} title={t.whyChooseUs.reason3Title}>
              <p className="text-base text-[#6b6b6b] leading-relaxed">{t.whyChooseUs.reason3Desc}</p>
            </SectionWithIcon>
            <div className="relative">
              <div className="bg-white p-4 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <ImageWithFallback
                  src={horizon}
                  alt="Harvesting"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reason 4 */}
      <section className="py-20 md:py-28 bg-[#f5f1e8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionWithIcon icon={CheckCircle} title={t.whyChooseUs.reason4Title}>
              <p className="text-lg text-neutral-700 leading-relaxed">{t.whyChooseUs.reason4Desc}</p>
            </SectionWithIcon>
          </div>
        </div>
      </section>

      {/* Trust Commitments */}
      <section className="py-20 md:py-28 bg-white relative">
        <VanillaLeaf className="absolute top-16 left-8 opacity-25 animate-float" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#2d2d2d] mb-6 text-center">{t.about.trustTitle}</h2>
          <p className="max-w-3xl mx-auto text-center text-base text-[#6b6b6b] mb-12">
            {t.about.trustIntro}
          </p>
          <div className="max-w-4xl mx-auto bg-[#f5f1e8] p-10 md:p-12 shadow-lg">
            <ul className="space-y-4">
              {trustItems.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-[#c9a86f] mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={2.5} />
                  <span className="text-[#6b6b6b] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#f5f1e8] relative">
        <VanillaPod className="absolute top-20 right-16 opacity-30 animate-float-delayed" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#2d2d2d] mb-6">{t.home.readyTitle}</h2>
          <p className="text-lg text-[#6b6b6b] mb-10 max-w-2xl mx-auto leading-relaxed">{t.home.readySubtitle}</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#2d2d2d] hover:bg-[#1a1a1a] text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
            {t.home.contactUs}
          </Link>
        </div>
      </section>
    </div>
  );
}
