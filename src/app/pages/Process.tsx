import { Flower, Sun, Droplets, Wind, Package, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from '../hooks/useTranslation';
import { ProcessStep } from './process/components/ProcessStep';
import { VanillaLeaf } from '../components/decorative/VanillaLeaf';
import { VanillaPod } from '../components/decorative/VanillaPod';

import photo1 from '../../photos/1.jpg';
import photo2 from '../../photos/2.jpg';
import photo3 from '../../photos/3.jpg';
import photo4 from '../../photos/4.jpg';
import photo5 from '../../photos/5.jpg';
import photo6 from '../../photos/6.jpg';
import packaging from '../../photos/packaging.jpg';
import certificat from '../../photos/certificat.png';
import sortingV2 from '../../photos/vanilla-sorting.jpeg';
import rulingBeans from '../../photos/vanilla-tk-pic.jpeg';
import cult from '../../photos/cult.jpg';

export function Process() {
  const t = useTranslation();

  const steps = [
    {
      title: t.process.cultivationTitle,
      description: t.process.cultivationDesc,
      icon: Flower,
      images: [
        {
          url: photo1,
          alt: 'Vanilla orchid cultivation',
        },
        {
          url: photo5,
          alt: 'Vanilla plantation',
        },
        {
          url: photo4,
          alt: 'Vanilla plantation',
        }
      ],
      reversed: false,
    },
    {
      title: t.process.harvestTitle,
      description: t.process.harvestDesc,
      icon: Package,
      images: [
        {
          url: cult,
          alt: 'Harvesting vanilla beans',
        }
      ],
      reversed: true,
    },
    {
      title: t.process.curingTitle,
      description: t.process.curingDesc,
      icon: Droplets,
      images: [
        {
          url: photo6,
          alt: 'Vanilla beans drying in the sun',
        }
      ],
      reversed: false,
    },
    {
      title: t.process.sortingTitle,
      description: t.process.sortingDesc,
      icon: CheckCircle,
      images:  [
        {
          url: sortingV2,
          alt: 'Sorting and grading vanilla beans according to quality standards',
        }
        ,
         {
          url: rulingBeans,
          alt: 'Sorting and grading vanilla beans according to quality standards',
        }
        ,
        {
          url: photo3,
          alt: 'Vanilla beans drying in the sun',
        }
      ],
      imageAlt: 'Sorting and grading vanilla beans',
      reversed: true,
    },
    {
      title: t.process.qualityTitle,
      description: t.process.qualityDesc,
      icon: Sun,
      images: [ 
        
        {
          url: certificat,
          alt: 'Vanilla quality certificate',
        }
      ],
      imageAlt: 'Spices and vanilla',
      reversed: false,
    },
    {
      title: t.process.packagingTitle,
      description: t.process.packagingDesc,
      icon: Wind,
      images:  [ 
        {
          url: photo2,
          alt: 'Spices and vanilla',
        } ,
          { 
          url: packaging,
          alt: 'Vacuum sealed vanilla packaging',
        },
      ],
      imageAlt: 'Vacuum sealed vanilla packaging',
      reversed: true,
    },
  ];

  return (
    <div className="bg-[#f5f1e8]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <VanillaLeaf className="absolute top-10 left-8 opacity-30 animate-float" />
        <VanillaPod className="absolute top-32 right-12 opacity-25 animate-float-delayed" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif italic text-[#2d2d2d] mb-6">{t.process.title}</h1>
          <p className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto">{t.process.subtitle}</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                index={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                imageAlt={step.imageAlt}
                images={step.images}
                reversed={step.reversed}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 md:py-28 bg-[#f5f1e8] relative">
        <VanillaPod className="absolute top-20 right-16 opacity-30 animate-float-delayed" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#2d2d2d] mb-6">{t.process.traditionalMethodsTitle}</h2>
          <p className="text-base text-[#6b6b6b] leading-relaxed mb-12">{t.process.traditionalMethodsDesc}</p>
          <h3 className="text-3xl md:text-4xl font-serif italic text-[#2d2d2d] mb-4 mt-12">{t.process.timelineTitle}</h3>
          <p className="text-base text-[#6b6b6b] leading-relaxed">{t.process.timelineDesc}</p>
        </div>
      </section>
    </div>
  );
}
