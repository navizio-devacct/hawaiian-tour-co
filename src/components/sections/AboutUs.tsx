import { useEffect, useState } from "react";
import { Award, Users, Clock, MapPin, Heart, Shield, Star, Compass, CheckCircle, TrendingUp } from "lucide-react";

export const AboutUs = () => {
  const [currentBooking, setCurrentBooking] = useState(0);
  const [visitorCount, setVisitorCount] = useState(1247);

  const recentBookings = [
    { name: "Sarah M.", tour: "Big Island Volcano Tour", guests: 4, time: "2 min ago", location: "California" },
    { name: "Mike & Lisa", tour: "Maui Road to Hana", guests: 2, time: "5 min ago", location: "Texas" },
    { name: "Johnson Family", tour: "Pearl Harbor Memorial", guests: 6, time: "8 min ago", location: "New York" },
    { name: "Emma K.", tour: "Kauai Helicopter Tour", guests: 2, time: "12 min ago", location: "Florida" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBooking((prev) => (prev + 1) % recentBookings.length);
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [recentBookings.length]);

  const currentBookingData = recentBookings[currentBooking];

  const stats = [
    { value: "15+", label: "Years of Aloha", icon: Clock, color: "text-blue-600", bgColor: "bg-blue-50" },
    { value: "10K+", label: "Happy Travelers", icon: Users, color: "text-green-600", bgColor: "bg-green-50" },
    { value: "150+", label: "Island Experiences", icon: MapPin, color: "text-purple-600", bgColor: "bg-purple-50" },
    { value: "4.8★", label: "Guest Rating", icon: Star, color: "text-yellow-600", bgColor: "bg-yellow-50" },
    { value: "100%", label: "Secure Booking", icon: Shield, color: "text-green-600", bgColor: "bg-green-50" },
    { value: "98%", label: "Satisfaction", icon: Heart, color: "text-red-600", bgColor: "bg-red-50" },
  ];

  const certifications = [
    { name: "Hawaii Tourism Authority", badge: "🏆", status: "Licensed Partner" },
    { name: "Local Community Partner", badge: "❤️", status: "10% Donated" },
  ];

  const values = [
    { icon: <Heart className="w-6 h-6" />, title: "Community First", description: "10% of profits support local Hawaiian communities and conservation efforts." },
    { icon: <Shield className="w-6 h-6" />, title: "Safety & Trust", description: "Licensed, insured, and committed to the highest safety standards." },
    { icon: <Compass className="w-6 h-6" />, title: "Local Expertise", description: "Native Hawaiian guides sharing authentic stories and hidden gems." },
    { icon: <Award className="w-6 h-6" />, title: "Exceptional Value", description: "Super competitive pricing with instant confirmation and free cancellation." },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center bg-ocean-100/10 text-ocean-100 px-6 py-2 rounded-full text-sm mb-6">
                <Heart className="w-4 h-4 mr-2" />
                About Hawaiian Tour Co
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted Guide to<br />
                <span className="bg-gradient-to-r from-ocean-100 via-sunset-100 to-ocean-100 bg-clip-text text-transparent">
                  Authentic Hawaii
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                For over 15 years, we've been creating unforgettable Hawaiian experiences with deep respect for local culture, communities, and the natural beauty of these sacred islands.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className={`${stat.bgColor} rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg`}>
                  <div className={`${stat.color} mb-3 flex justify-center`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-700 font-medium text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-sunset-100/10 to-ocean-100/10 rounded-2xl p-6 border border-sunset-100/20">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To share the true spirit of aloha while preserving Hawaii's natural beauty and cultural heritage for future generations. Every tour supports local communities and conservation efforts.
              </p>
            </div>
          </div>

          {/* Live Activity Feed replacing image */}
          <div className="relative bg-white border border-gray-200 rounded-3xl shadow-2xl p-6">
            <div className="inline-flex items-center bg-ocean-100 text-white px-4 py-2 rounded-full text-sm mb-6 shadow">
              <TrendingUp className="w-4 h-4 mr-2" />
              Live Activity
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-ocean-100 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  {currentBookingData.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{currentBookingData.name}</h3>
                  <p className="text-gray-700 text-sm">{currentBookingData.location}</p>
                </div>
              </div>
              <p className="text-gray-900 mb-2">
                Just booked <span className="font-semibold text-ocean-100">{currentBookingData.tour}</span>
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-700">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-gray-600" />
                  {currentBookingData.guests} guests
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-600" />
                  {currentBookingData.time}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-lg font-bold text-ocean-100 mb-1">{visitorCount}</div>
                <div className="text-xs font-medium text-gray-800">Viewing now</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-lg font-bold text-green-600 mb-1">127</div>
                <div className="text-xs font-medium text-gray-800">Booked today</div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted & Licensed</h3>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-md">
                    <div className="text-2xl mb-2">{cert.badge}</div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">{cert.name}</h4>
                    <div className="flex items-center justify-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                      <span className="text-green-600 text-xs font-medium">{cert.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Hawaiian Tour Co?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're more than a tour company—we're your connection to the heart and soul of Hawaii.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-sunset-100/10 group-hover:to-ocean-100/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 group-hover:border-sunset-100/30">
                  <div className="text-sunset-100 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
