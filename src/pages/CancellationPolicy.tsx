import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-palm-100 mb-8">Cancellation Policy</h1>
          <div className="prose prose-lg">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">Standard Cancellation Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full refund if cancelled 48 hours or more before tour start time</li>
                <li>50% refund if cancelled 24-48 hours before tour start time</li>
                <li>No refund if cancelled less than 24 hours before tour start time</li>
                <li>No refund for no-shows</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">Weather-Related Cancellations</h2>
              <p>If a tour is cancelled due to severe weather conditions or other circumstances beyond our control, you will be offered:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full refund</li>
                <li>Option to reschedule for another date</li>
                <li>Credit for future booking</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">How to Cancel</h2>
              <p>To cancel your booking:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Log into your account and cancel through your booking dashboard</li>
                <li>Contact our customer service at 1-808-379-3701</li>
                <li>Email us at cancellations@hawaiiantourco.com</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">Special Circumstances</h2>
              <p>For special circumstances (medical emergencies, etc.), please contact our customer service team directly. Each case will be reviewed individually.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CancellationPolicy;