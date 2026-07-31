import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavLinks } from '../hooks/useNavLinks';
import { LanguageSwitcher } from './LanguageSwitcher';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = useNavLinks();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo-temp.png"
              alt="HRS Vanilla logo"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col items-start">
              <div className="text-xs tracking-widest uppercase text-[#6b6b6b]">Madagascar</div>
              <div className="text-2xl font-serif italic text-[#2d2d2d] -mt-1">HRS Vanilla</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all duration-200 text-sm ${
                  isActive(link.path)
                    ? 'text-[#2d2d2d] font-semibold'
                    : 'text-[#6b6b6b] hover:text-[#2d2d2d]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#6b6b6b] hover:text-[#2d2d2d]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-[#e8e4dc]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 transition-colors text-sm ${
                  isActive(link.path)
                    ? 'text-[#2d2d2d] font-semibold'
                    : 'text-[#6b6b6b]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#e8e4dc]">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
