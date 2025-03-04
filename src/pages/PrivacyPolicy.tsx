
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
            <p>At Four Winds Travel Group, accessible from https://www.fourwindstravelgroup.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Four Winds Travel Group and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

            <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Four Winds Travel Group. This policy is not applicable to any information collected offline or via channels other than this website.</p>

            <h2 className="text-2xl font-semibold text-palm-100 mt-8 mb-4">Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

            <h2 className="text-2xl font-semibold text-palm-100 mt-8 mb-4">Information we collect</h2>
            <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
            <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

            <h2 className="text-2xl font-semibold text-palm-100 mt-8 mb-4">How we use your information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service, updates, and marketing</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-semibold text-palm-100 mt-8 mb-4">Log Files</h2>
            <p>Four Winds Travel Group follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

            <h2 className="text-2xl font-semibold text-palm-100 mt-8 mb-4">Cookies and Web Beacons</h2>
            <p>Like any other website, Four Winds Travel Group uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

            <h2 className="text-2xl font-semibold text-palm-100 mt-8 mb-4">Third Party Privacy Policies</h2>
            <p>Four Winds Travel Group's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>

            <h2 className="text-2xl font-semibold text-palm-100 mt-8 mb-4">CCPA Privacy Rights</h2>
            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
              <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
              <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-palm-100 mt-8 mb-4">GDPR Data Protection Rights</h2>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access</li>
              <li>The right to rectification</li>
              <li>The right to erasure</li>
              <li>The right to restrict processing</li>
              <li>The right to object to processing</li>
              <li>The right to data portability</li>
            </ul>

            <h2 className="text-2xl font-semibold text-palm-100 mt-8 mb-4">Children's Information</h2>
            <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
            <p>Four Winds Travel Group does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

            <h2 className="text-2xl font-semibold text-palm-100 mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>

            <h2 className="text-2xl font-semibold text-palm-100 mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
