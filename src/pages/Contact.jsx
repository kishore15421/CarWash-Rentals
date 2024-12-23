// Contact Us Page Component

import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="bg-background text-textPrimary py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Thank You!</h2>
            <p className="text-lg text-gray-600">Your message has been received. We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUsPage;
