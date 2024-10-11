"use client"; // Ensures this component is rendered on the client side

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import loc from "../Assests/loc.jpg"
import hou from "../Assests/hou.jpg"
import gmail from "../Assests/gamil.jpg"
import pho from "../Assests/pho.jpg"
import Image from 'next/image';

const ContactUsForm: React.FC = () => {
  // State for form fields
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Display a success message after form submission
    setConfirmationMessage(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className='bg-black bg-opacity-95 h-screen relative'>
             <h2 className='text-center font-bold text-2xl md:text-4xl text-amber-600 pt-24'>Contact Us</h2>
            <div className='md:flex items-center justify-center gap-10 lg:gap-20  mt-10 p-3 '>
           <div className=' '>
               <div className='flex justify-center md:justify-start gap-1 pl-3 pt-3 md:pt-6 '>
                <Image className='rounded-full w-10 h-10 text-white' src={loc} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Location</p>
                <p>A 108 Adam Street , New York Ny 535046.</p></div>
                </div>
               
                <div className='flex justify-center  md:justify-start gap-1 pl-3 pt-3 md:pt-6'>
                <Image className='rounded-full w-10 h-10 text-white' src={hou} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Open House</p>
                <p>Monday To Saturday 11:00 AM-2300PM ... </p></div>
                </div>
                 
                <div className='flex   justify-center  md:justify-start gap-1 pl-3 pt-3 md:pt-6'>
                <Image className='rounded-full w-10 h-10 text-white' src={gmail} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Email</p>
                <p>example@gmail.com  Or Info@gmail.com</p></div>
                </div>

                <div className='flex justify-center  md:justify-start gap-1 pl-3 pt-3 md:pt-6'>
                <Image className='rounded-full w-10 h-10 text-white' src={pho} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Call</p>
                <p>012345 Whatsapp  9876543 Imo 1472583</p></div>
                </div>

              </div> 
            {/* logos  */}
            <div className='bg-yellow-400 p-3  md:max-w-lg flex justify-center mt-5  items-center  rounded-lg'>
            <form onSubmit={handleSubmit} className="space-y-4 ">
        {/* Grid Layout - Responsive from medium to large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
          <div className='flex justify-center md:block mt-16 md:mt-0'>
            <label className="mt-2 md:block text-sm font-bold text-white ">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 block w-42 border bg-neutral-600 opacity-95 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          <div className='flex justify-center md:block'>
            <label className="mt-2 md:block text-sm font-bold text-white">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 block w-48 border bg-neutral-600 opacity-95 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div className='flex justify-center md:block'>
          <label className="block text-sm font-bold text-white">Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="mt-1 p-2 block w-56 border bg-neutral-600 opacity-95 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
          />
        </div>

        {/* Message Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="col-span-2 flex justify-center md:block">
            <label className="block text-sm font-bold text-white">Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1 p-2 block w-56 border bg-neutral-600 opacity-95 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
              placeholder="Your message here..."
              required
            />
          </div>
        </div>

        {/* Submit button */}
        <div className='flex justify-center pl-14'>
        <button
          type="submit"
          className="w-56 flex justify-center  bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
        </div>
      </form>
       {confirmationMessage && <p className="mt-4 text-green-500">{confirmationMessage}</p>}

       </div>

              </div>
    </div>
  );
};

export default ContactUsForm;





















