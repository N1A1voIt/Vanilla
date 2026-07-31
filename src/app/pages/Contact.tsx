import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import { ContactInfo } from './contact/components/ContactInfo';
import { ContactForm } from './contact/components/ContactForm';
import { BeforeOrderSection } from './contact/components/BeforeOrderSection';
import { VanillaLeaf } from '../components/decorative/VanillaLeaf';
import { VanillaPod } from '../components/decorative/VanillaPod';

export function Contact() {
  const t = useTranslation();

  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <VanillaLeaf className="absolute top-10 left-8 opacity-30 animate-float" />
        <VanillaPod className="absolute top-32 right-12 opacity-25 animate-float-delayed" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif italic text-[#2d2d2d] mb-6">
            {t.contact.title}
          </h1>
          <p className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative">
        <VanillaLeaf className="absolute bottom-20 right-12 opacity-25 animate-float" position="right" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <BeforeOrderSection />
    </div>
  );
}
