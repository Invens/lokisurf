import Head from 'next/head'
import Header from '@/components/header/page'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Loki Surf</title>
        <meta name="description" content="Learn more about Loki Surf, our mission, and the dedicated team behind our free online gaming platform based in Singapore." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-gray-900 text-gray-100 mt-[80px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20 px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-4xl mx-auto">
            Welcome to Loki Surf, Singapore’s premier destination for free online games. Discover our mission, story, and the talented team that makes it all possible.
          </p>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">Our Mission</h2>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
              At Loki Surf, our mission is to make high-quality, free online gaming accessible to everyone, everywhere. No downloads, no sign-ups, no intrusive ads—just pure, seamless gaming across all devices.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-gray-800 py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">Our Story</h2>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto text-center">
              Founded in Singapore, Loki Surf started as a dream to revolutionize the online gaming landscape. What began with a small, passionate team has grown into a global platform that provides instant gaming to millions of players worldwide.
            </p>
            <p className="text-lg leading-relaxed mt-4 max-w-4xl mx-auto text-center">
              We’re dedicated to innovation, constantly updating our game library and enhancing the platform to ensure an exceptional gaming experience.
            </p>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Team Members */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                <img src="/team/nikhil.jpg" alt="Nikhil Vats" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-400" />
                <h3 className="text-xl font-semibold text-teal-400">Nikhil Vats</h3>
                <p className="text-gray-400">Co-Founder & Tech Specialist</p>
                <p className="mt-2">
                  Nikhil ensures our platform remains cutting-edge, driving the technical direction of Loki Surf.
                </p>
              </div>

              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                <img src="/team/aditya.jpg" alt="Aditya Agarwal" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-400" />
                <h3 className="text-xl font-semibold text-teal-400">Aditya Agarwal</h3>
                <p className="text-gray-400">Co-Founder & Marketing Lead</p>
                <p className="mt-2">
                  Aditya shapes our global marketing strategy, ensuring we reach gamers worldwide.
                </p>
              </div>

              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                <img src="/team/vibhu.jpg" alt="Vibhu Jain" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-400" />
                <h3 className="text-xl font-semibold text-teal-400">Vibhu Jain</h3>
                <p className="text-gray-400">Co-Founder & Marketing Specialist</p>
                <p className="mt-2">
                  Vibhu drives our user experience, blending brand and engagement in a seamless experience.
                </p>
              </div>

              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                <img src="/team/abhishek.jpg" alt="Abhishek Kumar" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-400" />
                <h3 className="text-xl font-semibold text-teal-400">Abhishek Kumar</h3>
                <p className="text-gray-400">Full Stack Developer & Head of Loki Surf</p>
                <p className="mt-2">
                  Abhishek leads development, ensuring our platform runs smoothly on every level.
                </p>
              </div>

              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                <img src="/team/balram.jpg" alt="Balram Chauhan" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-400" />
                <h3 className="text-xl font-semibold text-teal-400">Balram Chauhan</h3>
                <p className="text-gray-400">App Developer</p>
                <p className="mt-2">
                  Balram focuses on our mobile apps, ensuring gamers can play seamlessly on the go.
                </p>
              </div>

              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                <img src="/team/kushagra.jpg" alt="Kushagra Goel" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-400" />
                <h3 className="text-xl font-semibold text-teal-400">Kushagra Goel</h3>
                <p className="text-gray-400">React Developer</p>
                <p className="mt-2">
                  Kushagra builds our responsive and dynamic user interfaces using cutting-edge technologies.
                </p>
              </div>

              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                <img src="/team/varun.jpg" alt="Varun Sharma" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-400" />
                <h3 className="text-xl font-semibold text-teal-400">Varun Sharma</h3>
                <p className="text-gray-400">Marketing Head</p>
                <p className="mt-2">
                  Varun drives our marketing campaigns, expanding Loki Surf’s presence worldwide.
                </p>
              </div>

              <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center">
                <img src="/team/marketing.jpg" alt="Marketing Team" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-400" />
                <h3 className="text-xl font-semibold text-teal-400">Marketing Team</h3>
                <p className="text-gray-400">India Based</p>
                <p className="mt-2">
                  Our India-based marketing team handles user engagement, building brand awareness and driving growth.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p>We’re always open to collaborations, feedback, and inquiries. Reach out to us!</p>
          <p>Email us at <a href="mailto:contact@lokisurf.com" className="underline text-teal-400">contact@lokisurf.com</a></p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Loki Surf. All rights reserved. Proudly based in Singapore.</p>
      </footer>
    </>
  )
}
