import { Award, Users, Clock, MapPin, Heart, Shield, Star, Compass } from "lucide-react";

export const AboutUs = () => {
  const stats = [
    {
      value: "20+",
      label: "Years of Aloha",
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      value: "50k+",
      label: "Happy Guests",
      icon: Users,
      color: "text-green-600", 
      bgColor: "bg-green-50"
    },
    {
      value: "150+",
      label: "Island Experiences",
      icon: MapPin,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      value: "4.8★",
      label: "Guest Rating",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community First",
      description: "10% of profits support local Hawaiian communities and conservation efforts."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety & Trust",
      description: "Licensed, insured, and committed to the highest safety standards."
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Local Expertise", 
      description: "Native Hawaiian guides sharing authentic stories and hidden gems."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Exceptional Value",
      description: "Best price guarantee with instant confirmation and free cancellation."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center bg-ocean-100/10 text-ocean-100 px-6 py-2 rounded-full text-sm mb-6">
                <Heart className="w-4 h-4 mr-2" />
                About Hawaiian Tour Co
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted Guide to
                <br />
                <span className="bg-gradient-to-r from-ocean-100 via-sunset-100 to-ocean-100 bg-clip-text text-transparent">
                  Authentic Hawaii
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Since 2004, we've been creating unforgettable Hawaiian experiences with deep 
                respect for local culture, communities, and the natural beauty of these sacred islands.
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className={`${stat.bgColor} rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                  <div className={`${stat.color} mb-3 flex justify-center`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-700 font-medium text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-sunset-100/10 to-ocean-100/10 rounded-2xl p-6 border border-sunset-100/20">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To share the true spirit of aloha while preserving Hawaii's natural beauty and 
                cultural heritage for future generations. Every tour supports local communities 
                and conservation efforts.
              </p>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=800"
                alt="Hawaiian landscape showcasing natural beauty"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating Trust Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Licensed & Trusted</p>
                    <p className="text-gray-600 text-xs">Hawaii Tourism Authority</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-sunset-100/20 to-ocean-100/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Values Section */}
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