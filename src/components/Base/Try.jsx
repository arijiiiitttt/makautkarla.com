import React from 'react';

const Try = () => {
  return (
    <div className="bg-[#D8C2A5] min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header */}
      <header className="w-full max-w-5xl flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Retro Illustration</h1>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li className="hover:underline cursor-pointer">Shop</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </nav>
        <div className="cart-icon bg-red-500 text-white w-12 h-8 flex items-center justify-center cursor-pointer">
          
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-5xl flex mt-8 bg-white shadow-md">
        {/* Left Section */}
        <section className="w-1/3 p-8 border-r border-gray-300">
          <h2 className="text-2xl font-bold">
            Retro <span className="bg-blue-400 text-white px-2">Illustration</span>
          </h2>
          <p className="text-lg mt-2">Back To The 90s</p>
          <div className="mt-8 space-y-4">
            <div className="bg-[#D8C2A5] p-4 text-center shadow-md cursor-pointer">
              <p className="font-bold">LATEST ILLUSTRATION</p>
              <button className="mt-2 px-4 py-2 bg-red-500 text-white">CHECK NOW</button>
            </div>
            <div className="bg-[#9BBEE1] p-4 text-center shadow-md cursor-pointer">
              <p className="font-bold">ON SALE</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white">BUY NOW</button>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="w-2/3 p-8 flex items-center justify-center">
          <div className="retro-poster shadow-lg p-6 bg-white relative">
            <h2 className="text-3xl font-bold text-center">BACK TO THE</h2>
            <h1 className="text-6xl font-bold text-red-600 text-center">90s</h1>
            <p className="text-lg text-center mt-2">RETRO STYLE</p>
            <p className="text-md text-center">FOREVER YOUNG</p>
            <div className="flex justify-center mt-6">
              <img src="https://example.com/boombox.png" alt="Boombox" className="w-40" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Try;
