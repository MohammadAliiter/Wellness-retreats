import React from 'react';

const Header = () => {
  return (
    <header className="text-white p-4 text-left">
      <h1 className="bg-custom-blue text-4xl text-white p-6 rounded-lg mb-4">
        Wellness Retreats
      </h1>

      <div className="bg-custom-dwhite text-black"> 
        
          <img 
            className="w-full h-64 object-cover " 
            src="https://cdn.midjourney.com/873b60f7-f026-40f9-b2d7-184e981ee1f5/0_3.jpeg" 
            alt="Wellness Retreats" 
          />
      
        <div className="mt-4">
          <p className="text-xl">Discover Your Inner Peace</p>
          <p className="text-lg text-gray-200 mt-2 text-black">
            Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
