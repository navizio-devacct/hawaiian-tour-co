import { useState, useEffect } from "react";
import { Users, Clock, Star, Shield, Heart, TrendingUp, CheckCircle } from "lucide-react";

export const LiveStats = () => {
  const [currentBooking, setCurrentBooking] = useState(0);
  const [visitorCount, setVisitorCount] = useState(1247);

  // Simulate live booking activity
  const recentBookings = [
    { name: "Sarah M.", tour: "Big Island Volcano Tour", guests: 4, time: "2 min ago", location: "California" },
    { name: "Mike & Lisa", tour: "Maui Road to Hana", guests: 2, time: "5 min ago", location: "Texas" },
    { name: "Johnson Family", tour: "Pearl Harbor Memorial", guests: 6, time: "8 min ago", location: "New York" },
    { name: "Emma K.", tour: "Kauai Helicopter Tour", guests: 2, time: "12 min ago", location: "Florida" }
  ];

  const trustStats = [
    { icon: <Users className="w-6 h-6" />, value: "10K+", label: "Happy Travelers", color: "text-blue-600" },
    { icon: <Star className="w-6 h-6" />, value: "4.8/5", label: "Average Rating", color: "text-yellow-600" },
    { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Secure Booking", color: "text-green-600" },
    { icon: <Heart className="w-6 h-6" />, value: "10%", label: "Supports Communities", color: "text-red-600" }
  ];

  // Available certifications (comment out unready ones)
  const certifications = [
    { name: "Hawaii Tourism Authority", badge: "🏆", status: "Licensed Partner" },
    { name: "Local Community Partner", badge: "❤️", status: "10% Donated" },
    // { name: "Better Business Bureau", badge: "⭐", status: "A+ Rating" }, // TODO: Setup BBB
    // { name: "TripAdvisor", badge: "🥇", status: "Certificate of Excellence" }, // TODO: Get TripAdvisor
  ];

  // Rotate through recent bookings
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBooking((prev) => (prev + 1) % recentBookings.length);
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [recentBookings.length]);

  const currentBookingData = recentBookings[currentBooking];

  return (
    <section className="py-16 bg-gradient-to-br from-ocean-50/30 via-sand-50 to-green-50/40 relative overflow-hidden">
      {/* Subtle Wave Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
          <defs>
            <pattern id="wave" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q25 0 50 10 T100 10 V20 H0 Z" fill="currentColor" className="text-ocean-100"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-sunset-100/10 to-orange-200/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-ocean-100/10 to-blue-200/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-200/10 to-emerald-200/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-ocean-100 text-white px-6 py-2 rounded-full text-sm mb-6 shadow-lg">
            <TrendingUp className="w-4 h-4 mr-2" />
            Live Activity
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Join Thousands of Happy Travelers
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Live Activity Feed */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-xl">
            {/* Live Indicator */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center bg-red-500 px-4 py-2 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                <span className="text-white font-medium text-sm">Live Booking Activity</span>
              </div>
            </div>

            {/* Current Booking Display */}
            <div className="text-center mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
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
            </div>

            {/* Live Stats Row */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-lg font-bold text-ocean-100 mb-1">{visitorCount}</div>
                <div className="text-xs font-medium text-gray-800">Viewing now</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-lg font-bold text-green-600 mb-1">127</div>
                <div className="text-xs font-medium text-gray-800">Booked today</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-lg font-bold text-sunset-100 mb-1">98%</div>
                <div className="text-xs font-medium text-gray-800">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Trust Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {trustStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white border border-gray-200 rounded-xl p-4 transition-all duration-300 hover:shadow-lg shadow-md">
                  <div className={`${stat.color} mb-3 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-700 text-xs font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications - Only Active Ones */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Trusted & Licensed</h3>
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
    </section>
  );
};