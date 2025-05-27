import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const BigIslandTestimonials = () => {
  const testimonials = [
    {
      name: "Marcus & Jennifer Wilson",
      location: "Denver, Colorado",
      rating: 5,
      text: "The volcano tour was absolutely incredible! Seeing active lava and walking through lava tubes was like nothing we've ever experienced. Our guide was so knowledgeable about the geology!",
      tour: "Volcano National Park Tour",
      avatar: "MW"
    },
    {
      name: "Kevin Thompson",
      location: "Nashville, Tennessee", 
      rating: 5,
      text: "Stargazing on Mauna Kea was magical! The night sky from 13,000 feet is indescribable. The tour guides were amazing at explaining the constellations and using the telescopes.",
      tour: "Mauna Kea Stargazing",
      avatar: "KT"
    },
    {
      name: "Rachel & David Lee",
      location: "San Diego, California",
      rating: 5,
      text: "Swimming with manta rays at night was a dream come true! These gentle giants are so graceful. The whole experience felt otherworldly - definitely a highlight of our Big Island trip!",
      tour: "Manta Ray Night Snorkel",
      avatar: "RL"
    },
    {
      name: "Antonio Garcia",
      location: "El Paso, Texas",
      rating: 5,
      text: "The helicopter tour over the volcano was breathtaking! Seeing the lava flows from above and flying through the valleys gave us perspectives we never could have imagined. Worth every penny!",
      tour: "Volcano Helicopter Tour",
      avatar: "AG"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-ocean-100/5 to-sunset-100/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-sunset-100/10 text-sunset-100 px-4 py-1 rounded-full text-sm mb-4">
            Guest Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mb-4">
            What Our Guests Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the wonder of Hawaii's Big Island through the eyes of thousands 
            of adventurers who've discovered volcanoes, manta rays, and starlit skies with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ocean-100 to-sunset-100 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-1 -left-1 w-6 h-6 text-ocean-100/20" />
                  <p className="text-gray-700 text-sm leading-relaxed pl-4">
                    {testimonial.text}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-ocean-100 font-medium">
                    {testimonial.tour}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
              <span className="font-semibold">4.8/5</span>
              <span className="ml-1">Average Rating</span>
            </div>
            <div>
              <span className="font-semibold">12,000+</span>
              <span className="ml-1">Happy Travelers</span>
            </div>
            <div>
              <span className="font-semibold">96%</span>
              <span className="ml-1">Would Recommend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};