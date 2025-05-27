import { Heart, Users, Award, Globe, Leaf, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-sunset-100" />,
      title: "Aloha Spirit",
      description: "We share the true spirit of Aloha - love, peace, and compassion - with every guest who visits our islands."
    },
    {
      icon: <Leaf className="h-8 w-8 text-palm-100" />,
      title: "Sustainable Tourism",
      description: "We're committed to protecting Hawaii's natural beauty for future generations through responsible tourism practices."
    },
    {
      icon: <HandHeart className="h-8 w-8 text-ocean-100" />,
      title: "Community First",
      description: "10% of our profits go directly back to Hawaiian communities, supporting local families and cultural preservation."
    },
    {
      icon: <Users className="h-8 w-8 text-sunset-100" />,
      title: "Local Expertise",
      description: "Our team of Native Hawaiian guides share authentic stories, hidden gems, and cultural insights you won't find anywhere else."
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Travelers" },
    { number: "150+", label: "Authentic Experiences" },
    { number: "10%", label: "Profits to Community" },
    { number: "4.8★", label: "Average Rating" }
  ];

  const teamMembers = [
    {
      name: "Evan Hayes",
      role: "Co-Founder & Cultural Director",
      image: "EH",
      description: "Born and raised on Oahu, Evan co-founded our company to share authentic Hawaiian experiences while supporting local communities."
    },
    {
      name: "Dallas Hidalgo",
      role: "Co-Founder & Operations Manager",
      image: "DH", 
      description: "A Big Island native with 15 years in tourism, Dallas ensures every tour meets our high standards for safety and authenticity."
    },
    {
      name: "Justin Jacobs",
      role: "Co-Founder & CMO",
      image: "JJ",
      description: "Justin creates memorable experiences that connect visitors with Hawaii's natural beauty and culture."
    }
  ];

  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      {/* Navigation will be added when you copy this to your project */}
      
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-ocean-100/90 text-white px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sharing Hawaii's Soul
              <br />with the World
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              We're a Hawaiian-owned company dedicated to sharing authentic island experiences 
              while giving back to the communities that make Hawaii so special.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Our Mission */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-sunset-100/10 text-sunset-100 px-4 py-1 rounded-full text-sm mb-6">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mb-8">
              More Than Just Tourism
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Born from a deep love for Hawaii and its people, our company was founded on the belief that 
              tourism should benefit everyone - visitors, local communities, and the islands themselves. 
              We create authentic experiences that honor Hawaiian culture while supporting the families 
              and traditions that make these islands home.
            </p>
            <div className="bg-gradient-to-r from-ocean-100/10 to-sunset-100/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-palm-100 mb-4">Our Commitment</h3>
              <p className="text-gray-700 text-lg">
                <strong>10% of every dollar</strong> we earn goes directly back to Hawaiian communities, 
                supporting local families, cultural programs, and environmental conservation efforts. 
                When you book with us, you're not just experiencing Hawaii - you're helping preserve it.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <div className="text-center mb-12">
            <span className="inline-block bg-palm-100/10 text-palm-100 px-4 py-1 rounded-full text-sm mb-6">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every decision we make is guided by these core values that reflect 
              the spirit and traditions of Hawaii.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-palm-100 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-r from-ocean-100 to-sunset-100 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Together with our guests, we're making a positive difference in Hawaii
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <div className="text-center mb-12">
            <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm mb-6">
              Our Ohana
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mb-4">
              Meet the Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of local experts is dedicated to sharing the authentic 
              beauty and culture of Hawaii with every visitor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-ocean-100 to-sunset-100 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-palm-100 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-ocean-100 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Impact */}
        <section className="bg-white rounded-3xl p-12">
          <div className="text-center mb-12">
            <span className="inline-block bg-sunset-100/10 text-sunset-100 px-4 py-1 rounded-full text-sm mb-6">
              Community Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mb-4">
              How We Give Back
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-palm-100 mb-6">
                Supporting Local Communities
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sunset-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Education Programs</h4>
                    <p className="text-gray-600">Supporting Hawaiian language and cultural education in local schools.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Environmental Conservation</h4>
                    <p className="text-gray-600">Funding coral reef restoration and native species protection projects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-palm-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Local Employment</h4>
                    <p className="text-gray-600">Prioritizing hiring from local communities and providing fair wages.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-ocean-100/5 to-sunset-100/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-palm-100 mb-4">Join Our Mission</h3>
                 <p className="text-gray-700 mb-6">
                  Every tour you book directly contributes to preserving Hawaiian culture and supporting local families. 
                   Together, we can ensure Hawaii remains a paradise for generations to come.
                 </p>
               <Link to="/booknow">
                    <Button className="bg-sunset-100 hover:bg-sunset-200 text-white">
               Explore Our Tours
                   </Button>
               </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
            <div className="max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mb-6">
                 Ready to Experience Authentic Hawaii?
               </h2>
             <p className="text-lg text-gray-600 mb-8">
                 Book with us and become part of our mission to preserve and share 
                  the true spirit of Hawaii while supporting local communities.
                </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link to="/booknow">
                    <Button className="bg-sunset-100 hover:bg-sunset-200 text-white px-8 py-3">
                  Book Your Adventure
                   </Button>
                  </Link>
              <Link to="/contact">
                      <Button variant="outline" className="border-ocean-100 text-ocean-100 hover:bg-ocean-100 hover:text-white px-8 py-3">
                 Contact Us
                 </Button>
               </Link>
               </div>
           </div>
      </section>
      </div>
      <Footer />
      {/* Footer will be added when you copy this to your project */}
    </div>
  );
};

export default AboutUs;