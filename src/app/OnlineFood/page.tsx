"use client"; // Ensures this component is rendered on the client side

import { useState, FormEvent } from 'react';

const FoodRequestForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [foodItem, setFoodItem] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [specialInstructions, setSpecialInstructions] = useState<string>('');
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Display a success message after form submission
    setConfirmationMessage(`Order successful for ${quantity} ${foodItem}(s).`);

    // Clear the form fields
    setName('');
    setEmail('');
    setPhone('');
    setFoodItem('');
    setQuantity(1);
    setSpecialInstructions('');
  };

  return (
    <div className='bg-slate-800 h-screen pt-20'>
    <h2 className="text-4xl font-bold text-amber-500 mb-6 text-center flex justify-center">Online Food Request</h2>

    <div className="outline m-5 sm:m-10 p-3  text-white rounded-lg flex justify-center shadow-lg relative  md:top-0">
      {/* <h2 className="text-2xl font-bold mb-6 text-center">Online Food Request</h2> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Grid Layout - Responsive from medium to large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 p-2 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Food Item:</label>
            <input
              type="text"
              value={foodItem}
              onChange={(e) => setFoodItem(e.target.value)}
              required
              className="mt-1 p-2 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              required
              className="mt-1 p-2 block w-64 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
        </div>

        {/* Special Instructions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <label className="block text-sm font-medium">Special Instructions:</label>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              rows={4}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
              placeholder="Any special requests or dietary restrictions?"
            />
          </div>
        </div>

        {/* Submit button */}
        <div className='flex justify-center'>
        <button
          type="submit"
          className="w-64 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Place Order
        </button>
        </div>
      </form>
      {confirmationMessage && <p className="mt-4 text-green-500">{confirmationMessage}</p>}
    </div>

   </div>
  );
};

export default FoodRequestForm;
