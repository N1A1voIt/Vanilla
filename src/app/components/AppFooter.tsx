import { Link } from 'react-router';
import { Phone, Mail } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useNavLinks } from '../hooks/useNavLinks';

export function AppFooter() {
  const t = useTranslation();
  const navLinks = useNavLinks();
  const email = 'soloniaina@hrsmg.com';
  const whatsapp = '+261 38 33 340 57';

  return (
    <footer className="bg-[#2d2d2d] text-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <div className="text-xs tracking-widest uppercase text-[#c9a86f] mb-1">Madagascar</div>
              <h3 className="text-2xl font-serif italic text-white tracking-tight">
                HRS Vanilla
              </h3>
            </div>
            <p className="text-[#9b9b9b] leading-relaxed text-sm">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-5">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#9b9b9b] hover:text-white transition-colors duration-200 inline-block text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-5">{t.footer.contactInfo}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-[#c9a86f] flex-shrink-0 mt-1" />
                <a href={`mailto:${email}`} className="text-[#9b9b9b] hover:text-white transition-colors text-sm">
                  {email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-[#c9a86f] flex-shrink-0 mt-1" />
                <div className="text-[#9b9b9b] text-sm">
                  <div className="text-xs text-[#6b6b6b] mb-1">WhatsApp</div>
                  <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} className="hover:text-white transition-colors">
                    {whatsapp}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#4a4a4a]">
          <p className="text-center text-xs text-[#6b6b6b]">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
