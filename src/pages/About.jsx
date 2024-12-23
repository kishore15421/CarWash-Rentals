import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-background text-textPrimary py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        <div className="text-lg text-gray-600 space-y-6">
          <p>
            At{' '}
            <span className="font-bold text-accent">
              Car Wash & Rental Services
            </span>
            , we are dedicated to providing top-notch car care and rental
            solutions for our customers. With years of experience and a passion
            for excellence, we aim to deliver services that exceed your
            expectations.
          </p>

          <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
          <p>
            Our mission is to revolutionize the car wash and rental industry by
            combining convenience, affordability, and premium quality. We strive
            to offer eco-friendly solutions that cater to modern lifestyles
            while contributing to a greener planet.
          </p>

          <h2 className="text-2xl font-bold text-primary">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>State-of-the-art equipment and eco-friendly practices.</li>
            <li>A diverse fleet of vehicles for every occasion.</li>
            <li>Affordable subscription plans and flexible services.</li>
            <li>Exceptional customer support available 24/7.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary">Our Journey</h2>
          <p>
            From humble beginnings to becoming a trusted name in the industry,
            our journey has been fueled by our commitment to quality and
            innovation. We started with a vision to redefine convenience in car
            services, and today, we proudly serve thousands of satisfied
            customers.
          </p>

          <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
          <p>
            Have questions or want to learn more about our services? Feel free
            to{' '}
            <a href="/contact" className="text-accent hover:underline">
              contact us
            </a>
            . We would love to hear from you and assist with your car wash or
            rental needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
