import Head from 'next/head';
import Header from '@/components/header/page';

export default function Faq() {
  return (
    <>
      <Head>
        <title>FAQ - Loki Surf</title>
        <meta name="description" content="Frequently Asked Questions about Loki Surf. Find answers to your queries about our services, features, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-gray-900 text-gray-100 mt-[80px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 via-gray-900 to-blue-800 text-white py-16 px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions about Loki Surf? We've got answers! Find solutions to common issues and learn more about our features.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Question 1 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 neon-box">
                <h3 className="text-xl font-semibold text-teal-400 mb-4">What is Loki Surf?</h3>
                <p className="text-gray-400">
                  Loki Surf is a powerful and secure web surfing platform that allows users to browse the internet safely while enjoying a personalized experience. Our platform is designed with modern technology to ensure fast, reliable, and secure surfing.
                </p>
              </div>

              {/* Question 2 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 neon-box">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Is Loki Surf safe for kids?</h3>
                <p className="text-gray-400">
                  Yes! We have a dedicated section, <a href="/kids" className="underline text-teal-500 hover:text-teal-300">Loki for Kids</a>, designed to ensure a safe browsing environment with kid-friendly content and built-in protections to keep children safe online.
                </p>
              </div>

              {/* Question 3 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 neon-box">
                <h3 className="text-xl font-semibold text-pink-400 mb-4">How do I get started with Loki Surf?</h3>
                <p className="text-gray-400">
                  Getting started is easy! Simply sign up for an account, download our app, and you’re ready to surf. For step-by-step instructions, check out our <a href="/getting-started" className="underline text-pink-500 hover:text-pink-300">Getting Started Guide</a>.
                </p>
              </div>

              {/* Question 4 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 neon-box">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">What features does Loki Surf offer?</h3>
                <p className="text-gray-400">
                  Loki Surf provides features like anonymous browsing, ad-blocking, parental controls, safe web filters for kids, and a personalized browsing experience. To see the full list of features, visit our <a href="/features" className="underline text-yellow-500 hover:text-yellow-300">Features Page</a>.
                </p>
              </div>

              {/* Question 5 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 neon-box">
                <h3 className="text-xl font-semibold text-green-400 mb-4">How does Loki Surf ensure my privacy?</h3>
                <p className="text-gray-400">
                  We prioritize your privacy by using advanced encryption methods and providing features like private browsing modes and strict data protection policies. Read more in our <a href="/privacy-policy" className="underline text-green-500 hover:text-green-300">Privacy Policy</a>.
                </p>
              </div>

              {/* Question 6 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 neon-box">
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Can I use Loki Surf on multiple devices?</h3>
                <p className="text-gray-400">
                  Absolutely! Loki Surf is available on all major platforms, including desktop and mobile devices. You can sync your account across devices for a seamless experience. Check out our <a href="/devices" className="underline text-indigo-500 hover:text-indigo-300">Supported Devices</a> page for more details.
                </p>
              </div>
              
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-teal-500 via-gray-900 to-cyan-500 text-white py-16 px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Still have questions?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            If your question wasn't answered above, feel free to get in touch with our support team. We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 py-3 px-8 rounded-lg text-gray-900 font-bold shadow-lg transform hover:scale-105 transition-all"
          >
            Contact Us &rarr;
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Loki Surf. All rights reserved.</p>
      </footer>
    </>
  );
}
