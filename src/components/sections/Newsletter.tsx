import { Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };

  return (
    <section className="bg-ocean-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-4 text-ocean-100" />
          <h2 className="text-3xl font-bold text-palm-100 mb-4">
            Stay Updated with Hawaiian Adventures
          </h2>
          <p className="text-palm-100/80 mb-8">
            Subscribe to our newsletter for exclusive travel tips, special offers,
            and the latest updates on Hawaiian tours and activities.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="bg-sunset-100 hover:bg-sunset-200">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};