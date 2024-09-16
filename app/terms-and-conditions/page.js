import Head from 'next/head'
import Header from '@/components/header/page'

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Loki Surf</title>
        <meta name="description" content="Loki Surf's Terms and Conditions outline the rules and regulations governing the use of our platform and services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Header/>
      <main className="bg-gray-900 text-gray-300 min-h-screen mt-[80px]">
        {/* Smaller Hero Section with Tech Theme */}
        <section className="bg-gray-800 text-gray-100 py-10 px-6 text-center">
          <h1 className="text-3xl font-semibold mb-2">Terms and Conditions</h1>
          <p className="text-md">
            These Terms and Conditions govern your use of Loki Surf. By accessing or using our website, you agree to comply with these terms. Please read them carefully.
          </p>
        </section>

        {/* Terms and Conditions Details */}
        <section className="py-10 px-6">
          <div className="container mx-auto">
            
            {/* Introduction */}
            <h2 className="text-2xl font-semibold text-teal-400 mb-6">1. Introduction</h2>
            <p className="text-lg leading-relaxed mb-6">
              Welcome to Loki Surf, your destination for free online games. These Terms and Conditions ("Terms") govern your use of the website located at <strong>www.lokisurf.com</strong> and its associated services. By accessing or using the website, you agree to abide by these Terms. If you do not agree with any part of these Terms, please refrain from using our website.
            </p>

            {/* Eligibility */}
            <h2 className="text-2xl font-semibold text-teal-400 mb-6">2. Eligibility</h2>
            <p className="text-lg leading-relaxed mb-6">
              By using Loki Surf, you confirm that you are at least 18 years old or have the consent of a legal guardian to use our services. If you are accessing Loki Surf from outside of Singapore, you are responsible for ensuring compliance with local laws and regulations.
            </p>

            {/* Use of the Platform */}
            <h2 className="text-2xl font-semibold text-teal-400 mb-6">3. Use of the Platform</h2>
            <p className="text-lg leading-relaxed mb-6">
              Loki Surf provides access to a wide range of free online games. You may not use our platform for any unlawful purpose, and you agree to:
            </p>
            <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
              <li>Abide by all applicable laws and regulations while using our services.</li>
              <li>Not attempt to hack, disrupt, or interfere with the operation of the website or its associated servers and networks.</li>
              <li>Not engage in any spamming, phishing, or other harmful activities through the website.</li>
              <li>Not use automated systems (like bots) to access or use the platform without our express permission.</li>
              <li>Not submit false, misleading, or inappropriate content or information.</li>
            </ul>

            {/* User Accounts */}
            <h2 className="text-2xl font-semibold text-teal-400 mb-6">4. User Accounts</h2>
            <p className="text-lg leading-relaxed mb-6">
              Some parts of Loki Surf may require you to create a user account. When creating an account, you agree to provide accurate information and maintain the security of your login credentials. You are responsible for all activity conducted through your account, and you must notify us immediately of any unauthorized use of your account.
            </p>

            {/* Intellectual Property */}
            <h2 className="text-2xl font-semibold text-teal-400 mb-6">5. Intellectual Property</h2>
            <p className="text-lg leading-relaxed mb-6">
              All content on Loki Surf, including but not limited to games, text, images, logos, and design elements, is the intellectual property of Loki Surf or its licensors. You may not copy, distribute, modify, or create derivative works from any content without our express permission.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              User-generated content (e.g., game comments, reviews, etc.) remains the property of the respective users. By submitting content, you grant Loki Surf a non-exclusive, royalty-free, perpetual, and worldwide license to use, distribute, and display the content.
            </p>

            {/* Prohibited Activities */}
            <h2 className="text-2xl font-semibold text-teal-400 mb-6">6. Prohibited Activities</h2>
            <p className="text-lg leading-relaxed mb-6">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
              <li>Using the website for illegal purposes or in violation of any applicable laws.</li>
              <li>Attempting to gain unauthorized access to the website, other user accounts, or associated systems.</li>
              <li>Transmitting harmful code, including viruses, malware, or spyware.</li>
              <li>Submitting false, misleading, or offensive content on the platform.</li>
              <li>Using the platform for fraudulent activities.</li>
            </ul>

            {/* Limitation of Liability */}
            <h2 className="text-2xl font-semibold text-teal-400 mb-6">7. Limitation of Liability</h2>
            <p className="text-lg leading-relaxed mb-6">
              Loki Surf provides access to its platform on an "as is" basis and does not make any warranties, either express or implied, regarding the content, services, or functionality. We do not guarantee that the website will be free from errors, interruptions, or harmful components. 
            </p>
            <p className="text-lg leading-relaxed mb-6">
              To the maximum extent permitted by law, Loki Surf and its founders, developers, and employees shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the website or services.
            </p>

            {/* Indemnification */}
            <h2 className="text-2xl font-semibold text-teal-400 mb-6">8. Indemnification</h2>
            <p className="text-lg leading-relaxed mb-6">
              You agree to indemnify and hold harmless Loki Surf, its founders, employees, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from your use of the platform, violation of these Terms, or infringement of any intellectual property rights or other rights of any third party.
            </p>

            {/* Modifications to the Terms */}
            <h2 className="text-2xl font-semibold text-teal-400 mb-6">9. Modifications to the Terms</h2>
            <p className="text-lg leading-relaxed mb-6">
              Loki Surf reserves the right to modify or update these Terms at any time. We will notify users of significant changes by posting an updated version of the Terms on the website. Your continued use of the platform after any such changes constitutes your acceptance of the updated Terms.
            </p>

            {/* Governing Law */}
            <h2 className="text-2xl font-semibold text-teal-400 mb-6">10. Governing Law</h2>
            <p className="text-lg leading-relaxed mb-6">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law principles. Any disputes arising from or relating to these Terms will be resolved exclusively in the courts of Singapore.
            </p>

            {/* Contact Information */}
            <h2 className="text-2xl font-semibold text-teal-400 mb-6">11. Contact Information</h2>
            <p className="text-lg leading-relaxed mb-6">
              If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
            </p>
            <ul className="list-none text-lg">
              <li><strong>Email:</strong> support@lokisurf.com</li>
              <li><strong>Address:</strong> Loki Surf HQ, 123 Singapore</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
