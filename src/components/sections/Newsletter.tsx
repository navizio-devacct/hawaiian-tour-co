import { useState } from "react";
import { Mail, Gift, Phone, CheckCircle, Sparkles, Trophy, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;

    setIsSubmitting(true);
    
    // TODO: Replace with actual GHL/Make.com integration
    const formData = {
      email,
      phone: smsOptIn ? phone : '',
      firstName,
      smsOptIn,
      source: 'newsletter_giveaway',
      timestamp: new Date().toISOString(),
      giveawayEntry: true
    };

    try {
      // Simulate API call - replace with actual endpoint
      // await fetch('/api/newsletter-signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      console.log('Newsletter signup data:', formData);
      
      // Simulate success delay
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 1500);
      
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-green-200/50">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                You're In! 🎉
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Welcome to our Hawaii community! You're now entered in this month's $25 gift card giveaway 
                and will receive exclusive travel tips and updates.
              </p>
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-200">
                <p className="text-green-700 font-medium">
                  🏆 Giveaway drawing: Last day of each month<br/>
                  📧 First newsletter: Coming this week<br/>
                  {smsOptIn && "📱 SMS updates: Opted in successfully"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-sunset-50 via-orange-50 to-yellow-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-200/50 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Giveaway Info Side */}
              <div className="bg-gradient-to-br from-sunset-100 to-orange-500 p-8 text-white flex flex-col justify-center">
                <div className="text-center lg:text-left">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    Win $25 Hawaii
                    <br />Experience Credit!
                  </h2>
                  
                  <p className="text-xl mb-6 text-white/90 leading-relaxed">
                    Join our monthly giveaway and get exclusive Hawaii travel tips, 
                    volcano updates, and insider recommendations.
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-yellow-300" />
                      <span className="text-white/90">Monthly $25 gift card drawing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-200" />
                      <span className="text-white/90">Exclusive travel tips & volcano alerts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-purple-200" />
                      <span className="text-white/90">Early access to special offers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-green-200" />
                      <span className="text-white/90">Hawaii events & seasonal updates</span>
                    </div>
                  </div>

                  {/* Current Giveaway Info */}
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                    <h4 className="font-bold mb-2">This Month's Drawing:</h4>
                    <p className="text-white/90 text-sm">
                      Drawing: January 31st, 2025<br/>
                      Prize: $25 Virtual Gift Card<br/>
                      Entries so far: 347 people
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="p-8">
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Enter the Giveaway
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Join our Hawaii community and be entered to win!
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full h-12 border-gray-300 rounded-xl"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 border-gray-300 rounded-xl"
                        required
                      />
                    </div>

                    {/* SMS Opt-in */}
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="smsOptIn"
                          checked={smsOptIn}
                          onCheckedChange={(checked) => setSmsOptIn(checked as boolean)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <label htmlFor="smsOptIn" className="text-sm font-medium text-gray-700 cursor-pointer">
                            📱 Also send me SMS updates (optional)
                          </label>
                          <p className="text-xs text-gray-600 mt-1">
                            Get instant volcano alerts, weather updates, and tour availability via text
                          </p>
                        </div>
                      </div>
                      
                      {smsOptIn && (
                        <div className="mt-3">
                          <Input
                            type="tel"
                            placeholder="Phone number (optional)"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full h-10 border-gray-300 rounded-lg text-sm"
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Standard message rates apply. Text STOP to opt out anytime.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting || !email || !firstName}
                      className="w-full bg-gradient-to-r from-sunset-100 to-orange-500 hover:from-sunset-200 hover:to-orange-600 text-white h-12 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 disabled:transform-none disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Entering Giveaway...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Gift className="w-5 h-5 mr-2" />
                          Enter Giveaway & Subscribe
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </div>
                      )}
                    </Button>

                    {/* Legal Text */}
                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                      By subscribing, you agree to receive emails from Hawaiian Tour Co. 
                      Unsubscribe anytime. No purchase necessary. 
                      <span className="block mt-1">
                        Drawing held monthly. Winners contacted via email.
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};