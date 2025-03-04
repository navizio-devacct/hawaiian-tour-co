import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-palm-100 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hawaiian Tour Co</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-sunset-100" />
                <p>801 Kakala St #1903, Kapolei, HI 96707</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-sunset-100" />
                <p>1-888-411-9121</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-sunset-100" />
                <p>hello@hawaiitours.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-sunset-100" />
                <p>Open Daily: 5:00am to 9:00pm, HST</p>
              </div>
            </div>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Tours</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sunset-100">Pearl Harbor Tours</a></li>
              <li><a href="#" className="hover:text-sunset-100">Road to Hana Tours</a></li>
              <li><a href="#" className="hover:text-sunset-100">Volcano Tours</a></li>
              <li><a href="#" className="hover:text-sunset-100">Luaus</a></li>
              <li><a href="#" className="hover:text-sunset-100">Island Hopping</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-sunset-100">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-sunset-100">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-sunset-100">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-sunset-100">Terms & Conditions</Link></li>
              <li><Link to="/cancellation-policy" className="hover:text-sunset-100">Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Payment & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-sunset-100">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-sunset-100">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-sunset-100">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <h4 className="font-semibold mb-2">We Accept</h4>
            <div className="flex gap-2">
              <img src="/visa.png" alt="Visa" className="h-8" />
              <img src="/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="/amex.png" alt="American Express" className="h-8" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Hawaiian Tour Co. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
