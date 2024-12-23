// Dedicated Service Details Page Component with Marketing-Oriented Descriptions

import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../data/ServicesData';

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Service Not Found
        </h1>
        <p className="text-gray-600">
          The service you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-background text-textPrimary py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          {service.title}
        </h1>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-lg text-gray-600 mb-6">
          {service.detailedDescription}
        </p>
        <button className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-light transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
