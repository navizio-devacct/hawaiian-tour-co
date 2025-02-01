import { Award, Users, Clock, MapPin } from "lucide-react";

export const AboutUs = () => {
  const stats = [
    {
      value: "20+",
      label: "Years Experience",
      icon: Clock,
    },
    {
      value: "50k+",
      label: "Happy Customers",
      icon: Users,
    },
    {
      value: "100+",
      label: "Tour Options",
      icon: MapPin,
    },
    {
      value: "4.9/5",
      label: "Customer Rating",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm">
              About Hawaiian Tour Co
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-palm-100">
              Your Premier Guide to Hawaiian Adventures
            </h2>
            <p className="text-gray-600">
              Since 2004, Hawaiian Tour Co has been the trusted name in Hawaiian tourism, 
              providing unforgettable experiences across all major islands. Our deep connection 
              to local communities and extensive knowledge ensures authentic, safe, and 
              memorable adventures for every visitor.
            </p>
            <p className="text-gray-600">
              We specialize in curating personalized experiences that showcase the best of 
              Hawaii's natural beauty, rich culture, and exciting activities. From volcano 
              tours to luaus, and from snorkeling to helicopter rides, we offer comprehensive 
              services with the highest standards of safety and customer satisfaction.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-sunset-100" />
                  </div>
                  <h3 className="text-2xl font-bold text-palm-100">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80"
              alt="Hawaiian landscape"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-[200px]">
              <p className="text-palm-100 font-semibold mb-1">Trusted Partner</p>
              <p className="text-gray-600 text-sm">Licensed & Insured Tour Operator in Hawaii</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};