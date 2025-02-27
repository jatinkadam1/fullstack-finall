import React from "react";

const Map = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-24 px-4 sm:px-0">
      <h1 className="font-bold text-3xl sm:text-4xl text-center mb-10">
        Chanel Outlet NYC
      </h1>

      <div className="flex flex-col sm:flex-row w-full max-w-6xl h-auto sm:h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden border-gray-500 border-2">
        {/* Google Map Section */}
        <div className="w-full sm:w-1/2 h-[50vh] sm:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48361.76328250446!2d-74.01095085460653!3d40.74860186581604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2596c6d48381f%3A0xde214d6006f13800!2sCHANEL!5e0!3m2!1sen!2sin!4v1737745959160!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Chanel Store NYC"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-1/2 h-[50vh] sm:h-full bg-gray-200 flex items-center justify-center">
          <img
            src="https://i.insider.com/660dbd1d1caec1275a6c9bd1?width=800&format=jpeg&auto=webp"
            alt="Chanel Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
