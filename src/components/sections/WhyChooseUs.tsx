import { Users, Clock, Award } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-ocean-100" />,
      title: "Local Expertise",
      description: "Our guides are Hawaii natives with deep cultural knowledge",
    },
    {
      icon: <Clock className="w-8 h-8 text-ocean-100" />,
      title: "Flexible Booking",
      description: "Free cancellation up to 24 hours before your tour",
    },
    {
      icon: <Award className="w-8 h-8 text-ocean-100" />,
      title: "Best Value",
      description: "Competitive prices and exclusive package deals",
    },
  ];

  return (
    <section className="py-20 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mb-4">
            The Hawaiian Tour Co Difference
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-palm-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};