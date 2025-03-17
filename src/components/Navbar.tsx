
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 'welcome', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'solution', label: 'Our Solution' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'coming-soon', label: 'Coming Soon' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-dark-accent/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex-shrink-0">
            <a href="#welcome" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Data Intelligence
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <Button 
                  key={link.id} 
                  variant="ghost" 
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground/80 hover:text-foreground hover:bg-accent"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-accent/95 backdrop-blur-lg">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              onClick={() => scrollToSection(link.id)}
              className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-accent"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
