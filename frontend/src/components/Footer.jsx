import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold mb-4">Connect with Us</h4>
            <p className="text-lg mb-4">Stay connected with us on social media for more recipes, tips, and updates.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">Facebook</a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">X-(twitter)</a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">Instagram</a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold mb-4">About Us</h4>
            <p className="text-lg mb-4">We are passionate about bringing you delicious recipes and cooking inspiration. Join our community and let's explore the culinary world together!</p>
          </div>
        </div>
        <hr className="my-6 border-gray-700"/>
        <div className="flex flex-wrap items-center justify-center">
          <div className="text-center w-full lg:w-6/12 px-4 flex flex-col">
            <p className="text-lg font-semibold">&copy; 2024 Foodies' Foods. All rights reserved.</p>
            <span><a href="#" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">mananc12@gmail.com</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
