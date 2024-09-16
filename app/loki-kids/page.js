import Head from 'next/head'
import Header from '@/components/header/page'

export default function LokiForKids() {
  return (
    <>
      <Head>
        <title>Loki for Kids - Fun & Safe Surfing</title>
        <meta name="description" content="Welcome to Loki for Kids! Learn and have fun in a safe online environment with Loki Surf." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-gray-900 text-gray-100 mt-[80px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-gray-800 to-purple-600 text-white py-20 px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Loki for Kids</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover, Learn, and Surf the Web Safely with Loki! Designed just for kids, with fun, safety, and learning at the forefront.
          </p>
          <div className="mt-8">
            <a
              href="/kids/learn-more"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all"
            >
              Learn More &rarr;
            </a>
          </div>
        </section>

        {/* Fun Activities Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400">Fun Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Learning Games */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-pink-400 mb-4">Learning Games</h3>
                <p className="text-gray-400 mb-4">
                  Play games and learn new things at the same time. From math to coding, we make learning fun!
                </p>
                <a
                  href="/kids/games"
                  className="text-pink-400 font-bold underline hover:text-pink-300 transition-all"
                >
                  Play Now &rarr;
                </a>
              </div>

              {/* Safe Web Surfing */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Safe Web Surfing</h3>
                <p className="text-gray-400 mb-4">
                  Surf the web safely with Loki! Learn about online safety and explore fun, kid-friendly sites.
                </p>
                <a
                  href="/kids/safety"
                  className="text-cyan-400 font-bold underline hover:text-teal-500 transition-all"
                >
                  Stay Safe &rarr;
                </a>
              </div>

              {/* Creative Activities */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Creative Activities</h3>
                <p className="text-gray-400 mb-4">
                  Get creative with Loki! Draw, design, and build your own projects in a fun and engaging way.
                </p>
                <a
                  href="/kids/create"
                  className="text-yellow-400 font-bold underline hover:text-yellow-300 transition-all"
                >
                  Get Creative &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Section */}
        <section className="bg-gray-800 py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-8">Learn with Loki</h2>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
              Loki Surf isn't just for fun—it's for learning too! Check out our educational resources on topics like coding, science, and more.
            </p>
            <a
              href="/kids/education"
              className="inline-block bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 py-3 px-8 rounded-lg text-gray-900 font-bold shadow-lg transform hover:scale-105 transition-all"
            >
              Explore & Learn &rarr;
            </a>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400">Stay Safe Online</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* Fun and Safe */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Fun and Safe</h3>
                <p className="text-gray-400 mb-4">
                  With Loki Surf, you can explore the web safely. We have tools to protect kids online and make sure they only see safe content.
                </p>
              </div>

              {/* Tips for Parents */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Tips for Parents</h3>
                <p className="text-gray-400 mb-4">
                  Parents can rest assured with our built-in protections. We provide guides and tips for keeping kids safe while using the web.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-pink-500 via-gray-900 to-yellow-500 text-white py-20 px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Loki for Kids Today!</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Start your fun and safe journey with Loki for Kids. Sign up to get access to cool games, educational activities, and more!
          </p>
          <a
            href="/kids/signup"
            className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 py-3 px-8 rounded-lg text-gray-900 font-bold shadow-lg transform hover:scale-105 transition-all"
          >
            Sign Up &rarr;
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Loki Surf. All rights reserved. Made for kids, by Loki.</p>
      </footer>
    </>
  );
}
