
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-palm-100 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">OVERVIEW</h2>
              <p>This website is operated by Four Winds Travel Group LLC. Throughout the site, the terms "we", "us" and "our" refer to Four Winds Travel Group. Four Winds Travel Group offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
            </section>

            <section className="mb-8">
              <p>By visiting our site and/ or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
            </section>

            {/* Continue adding each section as provided in the text */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-palm-100 mb-4">Text Marketing and notifications:</h2>
              <p>By entering your phone number in the checkout and initializing a purchase, subscribing via our subscription form or a keyword, you agree that we may send you text notifications (for your order, including abandoned cart reminders) and text marketing offers. You acknowledge that consent is not a condition for any purchase.</p>
              <p>If you wish to unsubscribe from receiving text marketing messages and notifications reply with STOP to any mobile message sent from us or use the unsubscribe link we provided you within any of our messages. You understand and agree that alternative methods of opting out, such as using alternative words or requests will not be accounted as a reasonable means of opting out. Message and data rates may apply.</p>
              <p>For any questions please text HELP to the number you received the messages from. You can also contact us for more information. If you wish to opt out please follow the procedures above.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
