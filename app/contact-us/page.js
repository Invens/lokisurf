"use client";
import Head from 'next/head'
import Header from '@/components/header/page'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic here (API integration)
    console.log(formData);
    setFormSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us - Loki Surf</title>
        <meta name="description" content="Reach out to the Loki Surf team for support and inquiries. Let's connect!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-gray-900 text-gray-100 mt-[80px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 via-gray-900 to-teal-900 text-white py-20 px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch with Us</h1>
          <p className="text-xl max-w-4xl mx-auto">
            Whether it's a question, feedback, or assistance, we're here for you. Drop us a message, and we'll get back to you swiftly!
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">Reach Out</h2>

            {formSubmitted ? (
              <div className="text-center text-cyan-400">
                <h3 className="text-2xl font-bold mb-4">Thank you for contacting us!</h3>
                <p>We will respond to your inquiry soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg neon-border">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border neon-border rounded-lg bg-gray-900 text-gray-100"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border neon-border rounded-lg bg-gray-900 text-gray-100"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border neon-border rounded-lg bg-gray-900 text-gray-100"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border neon-border rounded-lg bg-gray-900 text-gray-100"
                    rows="5"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 rounded-lg text-gray-900 font-bold shadow-lg transform hover:scale-105 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="bg-gray-800 py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">Other Ways to Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Email Contact */}
              <div className="bg-gray-900 neon-box shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Email Us</h3>
                <p className="text-gray-400 mb-2">For general inquiries, drop us an email:</p>
                <p className="text-cyan-400 font-bold">
                  <a href="mailto:support@lokisurf.com" className="underline">support@lokisurf.com</a>
                </p>
              </div>

              {/* Phone Contact */}
              <div className="bg-gray-900 neon-box shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Call Us</h3>
                <p className="text-gray-400 mb-2">Need help right now? Give us a call:</p>
                <p className="text-cyan-400 font-bold">
                +91 85860 85646                </p>
              </div>

              {/* Office Location */}
              <div className="bg-gray-900 neon-box shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Visit Our Office</h3>
                <p className="text-gray-400 mb-2">We'd love to see you in Singapore:</p>
                <p className="text-cyan-400 font-bold">
                  123 Loki Street, Singapore, SG 456789
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Loki Surf. All rights reserved. Proudly based in Singapore.</p>
      </footer>
    </>
  );
}
