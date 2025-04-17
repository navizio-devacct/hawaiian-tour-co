import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-palm-100' : 'text-white'
            }`}
          >
            Four Winds Travel Group
          </Link>

          {/* Desktop Navigation 
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <span 
                className={`transition-colors duration-300 cursor-pointer ${
                  isScrolled ? 'text-palm-100' : 'text-white'
                } hover:text-ocean-100`}
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
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-palm-100' : 'text-white'
              } hover:text-ocean-100`}
            >
              About
            </Link>
            <Link 
              to="/testimonials"
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-palm-100' : 'text-white'
              } hover:text-ocean-100`}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-palm-100' : 'text-white'
              } hover:text-ocean-100`}
            >
              Contact
            </Link>
            <Link 
              to="/book-now"
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-palm-100' : 'text-white'
              } hover:text-ocean-100`}
            >
              Book Now
            </Link>
          </div> */} 

          {/* Mobile Menu Button */}
         {/* <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-palm-100' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>

        {/* Mobile Navigation */}
       {/* {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4 animate-fade-down">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/oahu"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Oahu
              </Link>
              <Link
                to="/maui"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Maui
              </Link>
              <Link
                to="/big-island"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Big Island
              </Link>
              <Link
                to="/kauai"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Kauai
              </Link>
              <Link
                to="/about"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/testimonials"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/contact"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/book-now"
                className="text-palm-100 hover:text-ocean-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )} */}
      </div>
    </nav> 
  );
};

const NavLink = ({
  href,
  children,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}) => (
  <a
    href={href}
    className={`transition-colors duration-300 ${
      isScrolled ? 'text-palm-100' : 'text-white'
    } hover:text-ocean-100`}
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-palm-100 hover:text-ocean-100 transition-colors duration-300 text-center"
  >
    {children}
  </a>
);
