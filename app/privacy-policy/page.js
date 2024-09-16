import Head from 'next/head'
import Header from '@/components/header/page'
export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Loki Surf</title>
        <meta name="description" content="Loki Surf's Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Header/>
      <main className="bg-gray-100 text-gray-900 mt-[80px]">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website Loki Surf.
          </p>
        </section>

        {/* Privacy Policy Details */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            
            {/* Information Collection */}
            <h2 className="text-3xl font-bold text-center mb-8">1. Information We Collect</h2>
            <p className="text-lg leading-relaxed mb-4">
              When you visit or use Loki Surf, we may collect both personal and non-personal information. Below are the types of information we collect:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Personal Data:</strong> Information you provide directly, such as your name, email address, and other contact details.</li>
              <li><strong>Usage Data:</strong> Data automatically collected about your interactions with our site, such as IP addresses, browser type, device information, and browsing activity.</li>
              <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our site. Cookies help us understand your preferences and optimize website performance.</li>
            </ul>

            {/* Use of Information */}
            <h2 className="text-3xl font-bold text-center mb-8">2. How We Use Your Information</h2>
            <p className="text-lg leading-relaxed mb-4">
              We may use the collected data for the following purposes:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>To Provide Our Services:</strong> Facilitate and maintain the functionality of Loki Surf, including optimizing your experience.</li>
              <li><strong>To Improve Our Platform:</strong> Analyze usage data to enhance our website, provide better services, and develop new features.</li>
              <li><strong>To Communicate:</strong> Send you service-related notifications, updates, promotional offers, and respond to inquiries.</li>
              <li><strong>To Ensure Security:</strong> Monitor activity on the platform to protect against suspicious or malicious activities and fraud.</li>
            </ul>

            {/* Sharing of Information */}
            <h2 className="text-3xl font-bold text-center mb-8">3. Sharing of Your Information</h2>
            <p className="text-lg leading-relaxed mb-4">
              We do not sell or rent your personal information. However, we may share your data in the following circumstances:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Service Providers:</strong> We may share data with third-party vendors who provide services like hosting, analytics, and customer support.</li>
              <li><strong>Legal Compliance:</strong> We may disclose your information if required by law, such as in response to a subpoena or legal process.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your data may be transferred as part of the business transaction.</li>
            </ul>

            {/* Cookies and Tracking */}
            <h2 className="text-3xl font-bold text-center mb-8">4. Cookies and Tracking Technologies</h2>
            <p className="text-lg leading-relaxed mb-4">
              Loki Surf uses cookies to improve the functionality of our website, personalize content, and analyze usage trends. Cookies allow us to store your preferences and track user behavior on the platform. You can control cookies through your browser settings and opt-out of their use if you prefer.
            </p>

            {/* Data Security */}
            <h2 className="text-3xl font-bold text-center mb-8">5. Data Security</h2>
            <p className="text-lg leading-relaxed mb-4">
              We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. This includes using encryption and secure hosting services. However, no security system is completely foolproof, and we cannot guarantee the absolute security of your data.
            </p>

            {/* Your Data Rights */}
            <h2 className="text-3xl font-bold text-center mb-8">6. Your Data Rights</h2>
            <p className="text-lg leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Access and Correction:</strong> Request access to your personal data and ask for any inaccuracies to be corrected.</li>
              <li><strong>Data Deletion:</strong> Request the deletion of your personal data, subject to certain legal limitations.</li>
              <li><strong>Opt-Out of Communications:</strong> Unsubscribe from marketing emails and communications.</li>
              <li><strong>Data Portability:</strong> Request a copy of your personal data in a machine-readable format.</li>
            </ul>

            {/* International Users */}
            <h2 className="text-3xl font-bold text-center mb-8">7. International Users</h2>
            <p className="text-lg leading-relaxed mb-4">
              Loki Surf is based in Singapore, but our services are available globally. If you are accessing the platform from outside Singapore, your information may be transferred, stored, and processed in Singapore or other countries. We comply with applicable data protection laws, including the General Data Protection Regulation (GDPR) for users within the European Economic Area (EEA).
            </p>

            {/* Policy Updates */}
            <h2 className="text-3xl font-bold text-center mb-8">8. Changes to This Privacy Policy</h2>
            <p className="text-lg leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Revised" date. We encourage you to review this policy periodically to stay informed about how we are protecting your data.
            </p>

            {/* Contact Us */}
            <h2 className="text-3xl font-bold text-center mb-8">9. Contact Us</h2>
            <p className="text-lg leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <ul className="list-none text-lg">
              <li><strong>Email:</strong> privacy@lokisurf.com</li>
              <li><strong>Address:</strong> 123 Loki Surf HQ, Singapore</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
