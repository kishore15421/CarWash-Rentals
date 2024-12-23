// Services Page Component
import React from 'react';
import { services } from '../data/ServicesData';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-textPrimary py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button
                  className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-light transition duration-300"
                  onClick={() => navigate(`/services/${service.id}`)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
