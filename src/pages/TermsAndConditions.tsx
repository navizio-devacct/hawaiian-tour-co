import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-palm-100 mb-8">Terms and Conditions</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8">Last updated: [Date]</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing and using Hawaiian Tour Co's website and services, you agree to be bound by these Terms and Conditions.
                Please read these terms carefully before using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">2. Tour Bookings</h2>
              <p className="text-gray-600">
                All tour bookings are subject to availability and confirmation. Prices are subject to change without notice.
                Payment terms and methods will be clearly communicated at the time of booking.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">3. Cancellation Policy</h2>
              <p className="text-gray-600">
                Please refer to our separate Cancellation Policy for detailed information about cancellations, refunds, and rescheduling.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">4. Safety and Liability</h2>
              <p className="text-gray-600">
                While we strive to ensure the safety of all participants, adventure activities carry inherent risks.
                Participants are required to follow all safety instructions and guidelines provided by tour guides.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">5. Privacy</h2>
              <p className="text-gray-600">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600">
                All content on this website, including text, images, logos, and designs, is the property of Hawaiian Tour Co
                and is protected by copyright laws.
              </p>
            </section>

            <div className="bg-ocean-50 p-6 rounded-lg mt-12">
              <p className="text-sm text-gray-600">
                Note: This is a template for Terms and Conditions. Please consult with legal professionals to ensure all terms
                are appropriate and compliant with applicable laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;