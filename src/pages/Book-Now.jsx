// Enhanced Book Now Page with Login Check, Selectable Services, and Payment Flow

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const unavailableDates = [
  new Date(2024, 11, 25), // Example: Christmas
  new Date(2024, 11, 31), // Example: New Year's Eve
];

const services = [
  { id: 1, name: 'Car Wash' },
  { id: 2, name: 'Car Rental' },
];

const carWashOptions = [
  { id: 1, name: 'Basic Wash', price: 10 },
  { id: 2, name: 'Deluxe Wash', price: 20 },
  { id: 3, name: 'Premium Wash', price: 30 },
];

const carRentalOptions = [
  { id: 1, name: 'Economy Car', price: 50 },
  { id: 2, name: 'SUV', price: 80 },
  { id: 3, name: 'Luxury Car', price: 120 },
];

const BookNowPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  // Mock check for logged-in user
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (!isLoggedIn) {
      alert('You must be logged in to book a service.');
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const isDateUnavailable = (date) => {
    return unavailableDates.some(
      (unavailableDate) =>
        date.getFullYear() === unavailableDate.getFullYear() &&
        date.getMonth() === unavailableDate.getMonth() &&
        date.getDate() === unavailableDate.getDate()
    );
  };

  const handleBooking = () => {
    if (selectedService === 1 && selectedOption) {
      alert(
        `Car Wash booked: ${selectedOption.name} for $${selectedOption.price}`
      );
    } else if (
      selectedService === 2 &&
      selectedOption &&
      startDate &&
      endDate
    ) {
      alert(
        `Car Rental booked: ${selectedOption.name} for $${
          selectedOption.price
        } from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`
      );
    } else {
      alert('Please complete all booking details.');
    }
  };

  return (
    <div className="bg-background text-textPrimary py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Book Now</h1>
        <div className="flex justify-center mb-6">
          {services.map((service) => (
            <label key={service.id} className="mx-4">
              <input
                type="radio"
                name="service"
                value={service.id}
                onChange={() => {
                  setSelectedService(service.id);
                  setStartDate(null);
                  setEndDate(null);
                  setSelectedOption(null);
                }}
                className="hidden"
              />
              <div
                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg transition ${
                  selectedService === service.id
                    ? 'border-primary bg-primary-light'
                    : 'border-gray-300'
                }`}
              >
                {service.name}
              </div>
            </label>
          ))}
        </div>

        {selectedService === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Select Date and Time for Car Wash
            </h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              filterDate={(date) => !isDateUnavailable(date)}
              placeholderText="Choose a date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-6"
            />
            <h2 className="text-xl font-bold mb-4">
              Available Car Wash Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {carWashOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedOption?.id === option.id
                      ? 'border-primary bg-primary-light'
                      : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedOption(option)}
                >
                  <h3 className="text-lg font-bold">{option.name}</h3>
                  <p>${option.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedService === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Select Date Range for Car Rental
            </h2>
            <div className="flex space-x-4 mb-6">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                filterDate={(date) => !isDateUnavailable(date)}
                placeholderText="Start Date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                filterDate={(date) => !isDateUnavailable(date)}
                placeholderText="End Date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <h2 className="text-xl font-bold mb-4">
              Available Car Rental Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {carRentalOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedOption?.id === option.id
                      ? 'border-primary bg-primary-light'
                      : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedOption(option)}
                >
                  <h3 className="text-lg font-bold">{option.name}</h3>
                  <p>${option.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedOption && (
          <button
            onClick={handleBooking}
            className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition duration-300"
          >
            Pay and Book
          </button>
        )}
      </div>
    </div>
  );
};

export default BookNowPage;
