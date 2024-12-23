// Bookings Page Component

import React, { useState } from 'react';

const BookingsPage = () => {
  const [bookings] = useState([
    {
      id: 1,
      service: 'Car Wash - Deluxe Package',
      date: '2024-12-25',
      time: '10:00 AM',
      status: 'Confirmed',
    },
    {
      id: 2,
      service: 'Car Rental - Luxury Sedan',
      date: '2024-12-28',
      time: '08:00 AM',
      status: 'Pending',
    },
  ]);

  return (
    <div className="bg-background text-textPrimary py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Your Bookings</h1>
        {bookings.length === 0 ? (
          <p className="text-center text-lg text-gray-600">
            You have no bookings at the moment.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-primary text-white text-left">
                  <th className="py-3 px-6">Service</th>
                  <th className="py-3 px-6">Date</th>
                  <th className="py-3 px-6">Time</th>
                  <th className="py-3 px-6">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-6">{booking.service}</td>
                    <td className="py-3 px-6">{booking.date}</td>
                    <td className="py-3 px-6">{booking.time}</td>
                    <td className="py-3 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-bold ${
                          booking.status === 'Confirmed'
                            ? 'bg-green-200 text-green-800'
                            : 'bg-yellow-200 text-yellow-800'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
