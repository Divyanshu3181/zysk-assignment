import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-red-500 text-2xl font-bold">
              <img alt="Logo" src="Logo.png" />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-900">Home</Link>
              <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
              <Link to="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden font:bold">
             Menu
            </button>
          </div>
          <div >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-900">Home</Link>
              <Link to="/" className="text-gray-600 hover:text-gray-900">Products</Link>
              <Link to="/" className="text-gray-600 hover:text-gray-900">Resources</Link>
              <Link to="/" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}