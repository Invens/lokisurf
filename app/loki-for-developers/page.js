import Head from 'next/head'
import Header from '@/components/header/page'

export default function Developers() {
  return (
    <>
      <Head>
        <title>Loki for Developers - Loki Surf</title>
        <meta name="description" content="Explore the Loki Surf Developer Platform. Build with our APIs, SDKs, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-gray-900 text-gray-100 mt-[80px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 via-gray-900 to-teal-900 text-white py-20 px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Loki for Developers</h1>
          <p className="text-xl max-w-4xl mx-auto">
            Build the future of web and network experiences with Loki APIs, SDKs, and developer tools. Power your applications with cutting-edge technology.
          </p>
        </section>

        {/* Developer Tools Overview */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">Developer Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* API Documentation */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">API Documentation</h3>
                <p className="text-gray-400 mb-4">
                  Access comprehensive documentation for the Loki Surf API and start building today.
                </p>
                <a
                  href="/docs/api"
                  className="text-cyan-400 font-bold underline hover:text-teal-500 transition-all"
                >
                  Explore Docs &rarr;
                </a>
              </div>

              {/* SDKs */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Developer SDKs</h3>
                <p className="text-gray-400 mb-4">
                  Get started quickly with our SDKs for different platforms. Integrate Loki with minimal code.
                </p>
                <a
                  href="/docs/sdks"
                  className="text-cyan-400 font-bold underline hover:text-teal-500 transition-all"
                >
                  View SDKs &rarr;
                </a>
              </div>

              {/* Community Support */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Community Support</h3>
                <p className="text-gray-400 mb-4">
                  Join the Loki developer community for support, tips, and knowledge sharing.
                </p>
                <a
                  href="/community"
                  className="text-cyan-400 font-bold underline hover:text-teal-500 transition-all"
                >
                  Join Community &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* API Access Section */}
        <section className="bg-gray-800 py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-8">Loki Surf API</h2>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
              The Loki Surf API is built for developers to create seamless web experiences. Access real-time data, manage VPN services, and more with easy-to-use RESTful endpoints.
            </p>
            <a
              href="/docs/api"
              className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 py-3 px-8 rounded-lg text-gray-900 font-bold shadow-lg transform hover:scale-105 transition-all"
            >
              Get API Key &rarr;
            </a>
          </div>
        </section>

        {/* Why Loki Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">Why Choose Loki Surf?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Speed and Performance */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Blazing Fast Performance</h3>
                <p className="text-gray-400 mb-4">
                  With Loki Surf's lightning-fast servers and optimized routing, your application gets the speed and performance it deserves.
                </p>
              </div>

              {/* Security */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Top-tier Security</h3>
                <p className="text-gray-400 mb-4">
                  With state-of-the-art encryption and secure connections, Loki Surf ensures that your application and its users stay safe.
                </p>
              </div>

              {/* Easy Integration */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Easy Integration</h3>
                <p className="text-gray-400 mb-4">
                  Our simple-to-use SDKs and APIs make integrating Loki Surf into your projects a breeze.
                </p>
              </div>

              {/* 24/7 Support */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">24/7 Developer Support</h3>
                <p className="text-gray-400 mb-4">
                  Our dedicated developer support team is here to assist you whenever you need help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-teal-900 via-gray-900 to-purple-900 text-white py-20 px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Building with Loki Today</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            Unlock the power of Loki Surf for your applications. Sign up to get your API key and access our comprehensive suite of developer tools.
          </p>
          <a
            href="/signup"
            className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 py-3 px-8 rounded-lg text-gray-900 font-bold shadow-lg transform hover:scale-105 transition-all"
          >
            Sign Up &rarr;
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Loki Surf. All rights reserved. Powered by developers for developers.</p>
      </footer>
    </>
  );
}
