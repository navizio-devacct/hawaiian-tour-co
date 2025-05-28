import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock, Shield, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-palm-100 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Hawaiian Tour Co</h3>
            <p className="text-gray-200 mb-4 text-sm leading-relaxed">
              Your trusted partner for unforgettable Hawaiian adventures. Discover the magic of the islands with expert guides and authentic experiences.
            </p>
            <div className="space-y-3 text-sm">
            {/*  <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sunset-100 mt-0.5 flex-shrink-0" />
                <div>
                  <p>801 Kakala St #1903</p>
                  <p>Kapolei, HI 96707</p>
                </div> 
              </div> */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sunset-100 flex-shrink-0" />
                <p>1-888-411-9121</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sunset-100 flex-shrink-0" />
                <p>hello@hawaiitours.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sunset-100 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Open Daily</p>
                  <p>5:00am - 9:00pm HST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hawaiian Islands */}
          <div>
            <h3 className="text-lg font-bold mb-4">Explore Islands</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/oahu" className="hover:text-sunset-100 transition-colors">Oahu Tours</Link></li>
              <li><Link to="/maui" className="hover:text-sunset-100 transition-colors">Maui Tours</Link></li>
              <li><Link to="/big-island" className="hover:text-sunset-100 transition-colors">Big Island Tours</Link></li>
              <li><Link to="/kauai" className="hover:text-sunset-100 transition-colors">Kauai Tours</Link></li>
             {/* <li><Link to="/molokai" className="hover:text-sunset-100 transition-colors">Molokai Tours</Link></li>
              <li><Link to="/lanai" className="hover:text-sunset-100 transition-colors">Lanai Tours</Link></li>
              <li><Link to="/island-hopping" className="hover:text-sunset-100 transition-colors">Island Hopping</Link></li> */}
            </ul>
          </div>

          {/* Tour Categories */}
        {/*  <div>
            <h3 className="text-lg font-bold mb-4">Tour Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tours/snorkeling" className="hover:text-sunset-100 transition-colors">Snorkeling Adventures</Link></li>
              <li><Link to="/tours/hiking" className="hover:text-sunset-100 transition-colors">Hiking Expeditions</Link></li>
              <li><Link to="/tours/boat" className="hover:text-sunset-100 transition-colors">Boat Tours</Link></li>
              <li><Link to="/tours/helicopter" className="hover:text-sunset-100 transition-colors">Helicopter Tours</Link></li>
              <li><Link to="/tours/cultural" className="hover:text-sunset-100 transition-colors">Cultural Experiences</Link></li>
              <li><Link to="/tours/volcano" className="hover:text-sunset-100 transition-colors">Volcano Tours</Link></li>
              <li><Link to="/tours/luau" className="hover:text-sunset-100 transition-colors">Luaus & Dining</Link></li>
              <li><Link to="/tours/all" className="hover:text-sunset-100 transition-colors">View All Tours</Link></li>
            </ul>
          </div> */}

          {/* Popular Attractions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Top Attractions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/attractions/pearl-harbor" className="hover:text-sunset-100 transition-colors">Pearl Harbor</Link></li>
              <li><Link to="/attractions/diamond-head" className="hover:text-sunset-100 transition-colors">Diamond Head</Link></li>
              <li><Link to="/attractions/road-to-hana" className="hover:text-sunset-100 transition-colors">Road to Hana</Link></li>
              <li><Link to="/attractions/volcanoes-national-park" className="hover:text-sunset-100 transition-colors">Hawaii Volcanoes</Link></li>
              <li><Link to="/attractions/na-pali-coast" className="hover:text-sunset-100 transition-colors">Na Pali Coast</Link></li>
              <li><Link to="/attractions/waimea-canyon" className="hover:text-sunset-100 transition-colors">Waimea Canyon</Link></li>
              <li><Link to="/attractions/haleakala" className="hover:text-sunset-100 transition-colors">Haleakala Crater</Link></li>
            </ul>
          </div>

          {/* Customer & Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-sunset-100 transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-sunset-100 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-sunset-100 transition-colors">Our Blogs</Link></li>
              <li><Link to="/faq" className="hover:text-sunset-100 transition-colors">Visit our FAQ</Link></li>
             {/*  <li><Link to="/reviews" className="hover:text-sunset-100 transition-colors">Customer Reviews</Link></li>
             <li><Link to="/booking-help" className="hover:text-sunset-100 transition-colors">Booking Help</Link></li>
              <li><Link to="/gift-cards" className="hover:text-sunset-100 transition-colors">Gift Cards</Link></li>
              <li><Link to="/group-bookings" className="hover:text-sunset-100 transition-colors">Group Bookings</Link></li>
              <li><Link to="/faq" className="hover:text-sunset-100 transition-colors">FAQ</Link></li> */}
            </ul>
            </div>

            <div>
            <h3 className="text-lg font-bold mb-4">Policies</h3>
            {/* <h4 className="text-sm font-bold mt-6 mb-3">Policies</h4> */}
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-sunset-100 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-sunset-100 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cancellation-policy" className="hover:text-sunset-100 transition-colors">Cancellation Policy</Link></li>
            {/*  <li><Link to="/refund-policy" className="hover:text-sunset-100 transition-colors">Refund Policy</Link></li> */}
            </ul>
          </div>
        </div>

        {/* Trust Signals & Social Media */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Trust Signals */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Secure Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">Award Winning</span>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm">4.8/5 from 10,000+ customers</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h4 className="font-semibold mb-3">Follow Our Adventures</h4>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://facebook.com/#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sunset-100 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://instagram.com/#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sunset-100 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://youtube.com/#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sunset-100 transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-3">Secure Payment</h4>
              <div className="flex justify-center md:justify-end items-center gap-3">
                {/* Using CSS-based payment icons instead of images */}
                <div className="bg-white px-3 py-1 rounded text-xs font-bold text-blue-600">VISA</div>
                <div className="bg-white px-3 py-1 rounded text-xs font-bold text-red-600">MC</div>
                <div className="bg-white px-3 py-1 rounded text-xs font-bold text-blue-600">AMEX</div>
                <div className="bg-white px-3 py-1 rounded text-xs font-bold text-green-600">PP</div>
              </div>
              <p className="text-xs text-gray-300 mt-2">SSL Encrypted & PCI Compliant</p>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Hawaiian Tour Co. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-center">
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
              <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  
  );
};