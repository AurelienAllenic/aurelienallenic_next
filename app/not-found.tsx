"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { FiArrowRight } from "react-icons/fi";
import '@/styles/error.scss'

function NotFound() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 h-screen text-center">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <button
  onClick={handleRedirect}   className="button flex items-center gap-2 mt-6 px-4 py-2 text-white bg-gray-900 rounded hover:bg-gray-700 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-500 ease-in-out"
>
  Return Home <FiArrowRight />
</button>
    </div>
  );
}

export default NotFound;
