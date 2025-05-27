import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Calendar, Users, Play } from "lucide-react";

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Mike Johnson",
      location: "Denver, Colorado",
      tour: "Big Island Volcano & Stargazing",
      rating: 5,
      date: "March 2024",
      groupSize: "Family of 4",
      text: "Absolutely incredible experience! Our guide was so knowledgeable about Hawaiian culture and geology. Seeing the active lava and then stargazing on Mauna Kea was life-changing. Our kids are still talking about it months later. Worth every penny!",
      // image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150", // TODO: Add when we have real customer photos
      // videoThumbnail: "volcano-testimonial-thumb.jpg", // TODO: Add when we have video testimonials
      verified: true,
      tourProvider: "Hawaii Forest & Trail"
    },
    {
      id: 2,
      name: "David Chen",
      location: "San Francisco, California", 
      tour: "Maui Road to Hana Adventure",
      rating: 5,
      date: "February 2024",
      groupSize: "Solo traveler",
      text: "As a solo traveler, I was worried about feeling out of place, but the group was so welcoming and our guide made sure everyone felt included. The waterfalls, black sand beaches, and bamboo forest were absolutely magical. Best day of my Hawaii trip!",
      // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150", // TODO: Add when we have real customer photos
      verified: true,
      tourProvider: "Valley Isle Excursions"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Austin, Texas",
      tour: "Oahu Pearl Harbor & City Tour", 
      rating: 5,
      date: "January 2024",
      groupSize: "Couple",
      text: "The Pearl Harbor portion was incredibly moving and educational. Our guide shared stories that really brought the history to life. The combination with the Honolulu city tour was perfect - we got to see both the solemn history and vibrant culture of Oahu in one day.",
      // image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150", // TODO: Add when we have real customer photos  
      verified: true,
      tourProvider: "Polynesian Adventure Tours"
    },
    {
      id: 4,
      name: "The Williams Family",
      location: "Nashville, Tennessee",
      tour: "Kauai Na Pali Coast Helicopter Tour",
      rating: 5,
      date: "April 2024", 
      groupSize: "Family of 6",
      text: "Words can't describe the beauty we saw from above! The Na Pali Coast cliffs are even more stunning from a helicopter. Our pilot was amazing - very safe and knowledgeable. Even our teenage kids were speechless (which never happens!). An absolute must-do experience.",
      // image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150", // TODO: Add when we have real customer photos
      // videoThumbnail: "helicopter-testimonial-thumb.jpg", // TODO: Add when we have video testimonials
      verified: true,
      tourProvider: "Blue Hawaiian Helicopters"
    },
    {
      id: 5,
      name: "Jessica & Tom Anderson", 
      location: "Portland, Oregon",
      tour: "Maui Snorkeling & Whale Watching",
      rating: 5,
      date: "March 2024",
      groupSize: "Couple",
      text: "We saw so many sea turtles, tropical fish, and even some dolphins! The snorkeling spots were pristine and not crowded at all. On the way back, we spotted a mother humpback whale with her calf. The crew was fantastic - friendly, knowledgeable, and great photographers. Perfect honeymoon memory!",
      // image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=150", // TODO: Add when we have real customer photos
      verified: true,
      tourProvider: "Trilogy Excursions"
    }
  ];

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 px-6 py-2 rounded-full text-sm mb-6">
            <Quote className="w-4 h-4 mr-2" />
            Guest Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            What Our Guests Say
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              About Their Adventures
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real reviews from real travelers who've experienced the magic of Hawaii with our trusted tour partners.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              
              {/* Customer Info Side */}
              <div className="bg-gradient-to-br from-blue-600 to-green-600 p-8 text-white flex flex-col justify-center">
                {/* TODO: Uncomment when we have real customer photos */}
                {/* {current.image && (
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto lg:mx-0 border-4 border-white/20">
                    <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
                  </div>
                )} */}
                
                {/* Placeholder avatar until we get real photos */}
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 mx-auto lg:mx-0 border-4 border-white/20 flex items-center justify-center">
                  <span className="text-2xl font-bold">{current.name.charAt(0)}</span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{current.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-white/90">{current.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-white/90">{current.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-white/90">{current.groupSize}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>

                {/* Tour Info */}
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-1">Tour Experience:</h4>
                  <p className="text-white/90 text-sm">{current.tour}</p>
                  {current.verified && (
                    <div className="flex items-center gap-1 mt-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-green-200">Verified Booking</span>
                    </div>
                  )}
                </div>

                {/* TODO: Uncomment when we have video testimonials */}
                {/* {current.videoThumbnail && (
                  <button className="mt-6 inline-flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition-colors">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video Review
                  </button>
                )} */}
              </div>

              {/* Testimonial Content - Fixed Height */}
              <div className="lg:col-span-2 p-8 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <Quote className="w-12 h-12 text-blue-600/20 mb-6" />
                  
                  <div className="h-32 mb-8 overflow-hidden">
                    <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium line-clamp-4">
                      "{current.text}"
                    </blockquote>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Tour provided by:</p>
                      <p className="font-semibold text-gray-900">{current.tourProvider}</p>
                    </div>
                    
                    {/* Navigation Controls */}
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={prevTestimonial}
                        className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                      </button>
                      <button 
                        onClick={nextTestimonial}
                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Single Conversion CTA */}
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-600 mb-4">Experience this amazing tour yourself:</p>
                    <button className="w-full bg-gradient-to-r from-sunset-100 to-sunset-200 hover:from-sunset-200 hover:to-sunset-300 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Book "{current.tour}" Now
                    </button>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mt-3">
                      <span>⚡ Instant confirmation</span>
                      <span>💰 Best price guarantee</span>
                      <span>🔄 Free cancellation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
            <div className="text-sm text-gray-500 mt-1">Based on thousands of reviews</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
            <div className="text-sm text-gray-500 mt-1">To friends and family</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Guests</div>
            <div className="text-sm text-gray-500 mt-1">and Travelers</div>
          </div>
        </div>
      </div>
    </section>
  );
};