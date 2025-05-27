import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Pages that need dark text from the start (light backgrounds)
  const lightBackgroundPages = ['/privacy-policy', '/terms-and-conditions', '/cancellation-policy'];
  const isLightBackground = lightBackgroundPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (isScrolled) return 'text-palm-100'; // Always dark when scrolled
    if (isLightBackground) return 'text-palm-100'; // Dark on light background pages
    return 'text-white'; // White on dark hero pages
  };

  // Determine background - keep transparent unless scrolled
  const getBackground = () => {
    if (isScrolled) return "bg-white/95 backdrop-blur-md shadow-sm py-4";
    return "bg-transparent py-6"; // Always transparent when not scrolled
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${getBackground()}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className={`text-2xl font-bold transition-colors duration-300 ${getTextColor()}`}
          >
            Hawaiian Tour Co
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`transition-colors duration-300 ${getTextColor()} hover:text-ocean-100`}
            >
              Home
            </Link>
            <div className="relative group">
              <span 
                className={`transition-colors duration-300 cursor-pointer ${getTextColor()} hover:text-ocean-100`}
              >
                Islands
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/oahu" className="block px-4 py-2 text-palm-100 hover:bg-ocean-100/10">Oahu</Link>
                <Link to="/maui" className="block px-4 py-2 text-palm-100 hover:bg-ocean-100/10">Maui</Link>
                <Link to="/big-island" className="block px-4 py-2 text-palm-100 hover:bg-ocean-100/10">Big Island</Link>
                <Link to="/kauai" className="block px-4 py-2 text-palm-100 hover:bg-ocean-100/10">Kauai</Link>
              </div>
            </div>
            <Link 
              to="/about"
              className={`transition-colors duration-300 ${getTextColor()} hover:text-ocean-100`}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors duration-300 ${getTextColor()} hover:text-ocean-100`}
            >
              Contact
            </Link>
            <Link 
  to="/booknow"  
  className={`bg-sunset-100 hover:bg-sunset-200 text-white px-6 py-2 rounded-full transition-all duration-300 ${
    isScrolled ? 'shadow-md' : ''
  }`}
>
  Book Now
</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${getTextColor()}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4 animate-fade-down">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="border-b border-gray-200 pb-2 mb-2">
                <span className="text-palm-100 font-semibold text-sm">Islands</span>
              </div>
              <Link
                to="/oahu"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Oahu
              </Link>
              <Link
                to="/maui"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Maui
              </Link>
              <Link
                to="/big-island"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Big Island
              </Link>
              <Link
                to="/kauai"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Kauai
              </Link>
              <div className="border-b border-gray-200 my-2"></div>
              <Link
                to="/about"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/booknow"  
                className="bg-sunset-100 hover:bg-sunset-200 text-white px-6 py-2 rounded-full text-center transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
              Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav> 
  );
};