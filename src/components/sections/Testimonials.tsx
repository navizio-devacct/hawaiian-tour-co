import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "California",
      rating: 5,
      text: "The Road to Hana tour was incredible. Our guide was so knowledgeable and made the experience unforgettable.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80",
    },
    {
      name: "Mike Thompson",
      location: "Texas",
      rating: 5,
      text: "Sunrise at Haleakala was breathtaking! Everything was perfectly organized and our guide knew all the best spots.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mb-4">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-palm-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};