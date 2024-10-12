"use client"; // Ensures this component is rendered on the client side

import { useState, FormEvent } from 'react';

const ReservationForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [people, setPeople] = useState<number>(1);
  const [message, setMessage] = useState<string>('');
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Display a success message after form submission
    setConfirmationMessage(`Reservation successful for ${people} people on ${date} at ${time}.`);

    // Clear the form fields
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setPeople(1);
    setMessage('');
  };

  return (
    
    <div className='bg-black h-screen bg-opacity-95 '>
          <h2 className="text-4xl font-bold pt-20 text-amber-600  mb-6 text-center">Table Reservation</h2>

    <div className="outline m-5 sm:m-10  mx-4xl p-3 flex justify-center   text-white rounded-lg shadow-lg">
    
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Grid Layout - Responsive from medium to large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Name and Email in same row on md, all in 3 columns on lg */}
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-0 p-1 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-0 p-1 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-0 p-1 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          {/* Date and Time in the same row on lg, stacked below Phone */}
          <div>
            <label className="block text-sm font-medium">Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="mt-0 p-1 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="mt-0 p-1 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Number of People:</label>
            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              min="1"
              required
              className="mt-0 p-1 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
        </div>

        {/* Message Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <label className="block text-sm font-medium">Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-0 p-1 block w-64 md:w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
              placeholder="Any special requests or details?"
            />
          </div>
        </div>

        {/* Submit button */}
        <div className='flex justify-center'>
        <button
          type="submit"
          className="w-64  flex justify-center bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Reserve
        </button>
        </div>
      </form>
      {confirmationMessage && <p className="mt-4 text-green-500">{confirmationMessage}</p>}
    </div>
    </div>
  );
};

export default ReservationForm;


