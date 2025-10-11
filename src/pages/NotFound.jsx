import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="text-9xl font-extrabold text-gray-700 tracking-widest">
        404
      </h1>
      <div className="bg-blue-500 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>

      <p className="mt-10 text-gray-400 text-lg">
        Sorry, the page you are looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
