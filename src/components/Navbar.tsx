
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Appointments', path: '/appointments' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold text-foreground font-playfair">
              Nu Image
            </span>
            <span className="hidden sm:inline-block text-lg md:text-xl text-nu-pink font-bold">
              Nails Spa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-all duration-300 text-sm font-medium relative ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Phone Button & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Phone Button */}
            {isMobile ? (
              <Link 
                to="/booking" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white"
              >
                <Phone size={18} />
              </Link>
            ) : (
              <Link 
                to="/booking" 
                className="flex items-center space-x-2 button-primary"
              >
                <Phone size={16} />
                <span>Book Now</span>
              </Link>
            )}

            {/* Mobile Menu Button with Dropdown */}
            {isMobile && (
              <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-foreground focus:outline-none"
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-screen bg-white/95 backdrop-blur-sm mt-2 p-2 rounded-b-lg border-t-0"
                >
                  {navItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild className="py-3 focus:bg-secondary">
                      <Link
                        to={item.path}
                        className={`flex w-full px-4 py-2 text-sm font-medium rounded-lg ${
                          isActive(item.path)
                            ? 'bg-secondary text-primary'
                            : 'text-foreground'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem asChild className="mt-2">
                    <Link
                      to="/booking"
                      className="flex items-center justify-center space-x-2 w-full text-center button-primary px-4 py-3 rounded-lg"
                    >
                      <Phone size={16} />
                      <span>Book Now</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
