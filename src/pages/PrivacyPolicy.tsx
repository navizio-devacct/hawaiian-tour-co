import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-palm-100 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including name, email, phone number, and payment information when making bookings. We also automatically collect certain information about your device when you use our website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to process your bookings, communicate with you about our services, and improve our website experience. We may also use your information for marketing purposes with your consent.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">3. Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information with tour operators and service providers necessary to fulfill your booking and provide our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@hawaiiantourco.com for any privacy-related concerns.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;