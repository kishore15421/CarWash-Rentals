// Elegant Home Page with Styling and Animations

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="bg-background text-textPrimary">
      {/* Hero Section */}
      <section class="hero-bg min-h-screen flex items-center justify-center text-center">
        <div class="bg-black bg-opacity-50 text-white p-6 rounded-lg">
          <h1 class="text-5xl font-bold mb-4">
            Welcome to Car Wash & Rental Services
          </h1>
          <p class="text-lg mb-6">
            Premium car wash and rental services at unbeatable prices.
            Experience quality like never before.
          </p>
          <a
            href="/services"
            class="px-8 py-4 bg-accent text-white rounded-lg text-lg shadow-lg hover:bg-accent-light transition duration-300"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg p-6 rounded-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Professional Car Wash</h3>
              <p className="text-gray-600">
                Keep your car spotless with our premium washing and detailing
                services.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg p-6 rounded-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Affordable Car Rentals
              </h3>
              <p className="text-gray-600">
                Rent top-quality cars at competitive prices for any occasion.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg p-6 rounded-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Excellent Customer Support
              </h3>
              <p className="text-gray-600">
                Our team is here to assist you 24/7 with all your queries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-accent text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Book your car wash or rental today and experience the difference.
          </p>
          <Link
            to="/booking"
            className="px-8 py-4 bg-white text-accent rounded-lg text-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Book Now
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Car Wash & Rental Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
