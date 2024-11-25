"use client";
import { useState } from "react";
import Head from "next/head";
import Header from "@/components/header/page";
import axios from "axios";

export default function Developers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      type: e.target.type.value,
    };

    try {
      // Sending form data to the backend
      const response = await axios.post("http://localhost:8001/signup", formData);

      if (response.status === 200) {
        setIsModalOpen(false);
        setIsThankYouVisible(true);

        // Clear the thank you message after 5 seconds
        setTimeout(() => {
          setIsThankYouVisible(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <>
      <Head>
        <title>Loki for Developers - Loki Surf</title>
        <meta
          name="description"
          content="Explore the Loki Surf Developer Platform. Build with our APIs, SDKs, and more."
        />
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
            <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">
              Developer Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* API Documentation */}
              <div className="bg-gray-800 neon-box shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  API Documentation
                </h3>
                <p className="text-gray-400 mb-4">
                  Access comprehensive documentation for the Loki Surf API and
                  start building today.
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
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  Developer SDKs
                </h3>
                <p className="text-gray-400 mb-4">
                  Get started quickly with our SDKs for different platforms.
                  Integrate Loki with minimal code.
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
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  Community Support
                </h3>
                <p className="text-gray-400 mb-4">
                  Join the Loki developer community for support, tips, and
                  knowledge sharing.
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

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-teal-900 via-gray-900 to-purple-900 text-white py-20 px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Building with Loki Today</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            Unlock the power of Loki Surf for your applications. Sign up to get
            your API key and access our comprehensive suite of developer tools.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 py-3 px-8 rounded-lg text-gray-900 font-bold shadow-lg transform hover:scale-105 transition-all"
          >
            Sign Up &rarr;
          </button>
        </section>

        {/* Signup Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-800 text-gray-100 rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400 text-center">
                Sign Up for Loki
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-700 text-gray-100 focus:ring-cyan-500 focus:border-cyan-500"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-700 text-gray-100 focus:ring-cyan-500 focus:border-cyan-500"
                    required
                  />
                </div>

                {/* Organization/Individual */}
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-400">
                    Organization/Individual
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-700 text-gray-100 focus:ring-cyan-500 focus:border-cyan-500"
                  >
                    <option value="individual">Individual</option>
                    <option value="organization">Organization</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 py-2 px-6 rounded-lg text-gray-900 font-bold shadow-lg transform hover:scale-105 transition-all"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-all"
              >
                &#x2715;
              </button>
            </div>
          </div>
        )}

        {/* Thank You Message */}
        {isThankYouVisible && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-800 text-gray-100 rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 text-center">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Thank You!</h3>
              <p className="text-lg text-gray-400">
                Thank you for signing up! We will contact you soon.
              </p>
              <button
                onClick={() => setIsThankYouVisible(false)}
                className="mt-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 py-2 px-6 rounded-lg text-gray-900 font-bold shadow-lg transform hover:scale-105 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Loki Surf. All rights reserved. Powered by developers for developers.</p>
      </footer>
    </>
  );
}
