"use client"; // This directive tells Next.js this is a Client Component

import React, { useState } from 'react';
import LocalizedClientLink from "@modules/common/components/localized-client-link";
// CartButton is no longer imported here, but received as a prop
import { Menu, X, Leaf, ChevronDown, User } from 'lucide-react'; // Import all necessary Lucide icons

// Make sure to define the type for regions if not already done in your project
interface StoreRegion {
  id: string;
  name: string;
  // Add other properties of StoreRegion if needed for your usage
}

interface ClientNavProps {
  regions: StoreRegion[];
  cartButton: React.ReactNode; // Add prop type for cartButton
}

const ClientNav: React.FC<ClientNavProps> = ({ regions, cartButton }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);

  // For `customer`, if you need actual authentication status on the client,
  // you'd typically use a client-side hook from your auth context (e.g., Medusa's useCustomer).
  // For demonstration, we'll keep it as null.
  const customer = null; // Placeholder: Integrate your actual client-side auth status here.

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full h-full text-small-regular">
      {/* Logo */}
    <LocalizedClientLink href="/" className="flex items-center space-x-2">
      <img src="/logo.png" alt="CropDefense Logo" className="h-8 w-auto" />
      {/* <span className="text-2xl font-bold text-primary">CropDefense™</span> */}
    </LocalizedClientLink>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <LocalizedClientLink href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
          Home
        </LocalizedClientLink>
        <LocalizedClientLink href="/story" className="text-gray-700 hover:text-primary transition-colors font-medium">
          Our Story
        </LocalizedClientLink>

        {/* Wholesale Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsWholesaleOpen(!isWholesaleOpen)}
            className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium"
          >
            Wholesale
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isWholesaleOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
              <LocalizedClientLink
                href="/wholesale/shield"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                onClick={() => setIsWholesaleOpen(false)}
              >
                CropDefense Shield
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/wholesale/boost"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                onClick={() => setIsWholesaleOpen(false)}
              >
                CropDefense Boost
              </LocalizedClientLink>
            </div>
          )}
        </div>

        <LocalizedClientLink href="/store" className="text-gray-700 hover:text-primary transition-colors font-medium">
          Products
        </LocalizedClientLink>
        <LocalizedClientLink href="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
          Contact
        </LocalizedClientLink>
      </div>

      {/* Right side icons and Mobile menu button */}
      <div className="flex items-center gap-x-6 h-full">
        {/* Account */}
        {customer ? (
          <div className="relative group hidden small:flex">
            <LocalizedClientLink href="/account" className="flex items-center text-gray-700 hover:text-primary transition-colors">
              <User className="h-6 w-6" />
            </LocalizedClientLink>
          </div>
        ) : (
          <LocalizedClientLink href="/account" className="text-gray-700 hover:text-primary transition-colors hidden small:flex">
            <User className="h-6 w-6" />
          </LocalizedClientLink>
        )}

        {/* Render the CartButton passed as a prop */}
        {cartButton}

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 hover:text-primary transition-colors"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200 absolute top-16 left-0 right-0 bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-4 sm:px-6 lg:px-8">
            <LocalizedClientLink
              href="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/story"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </LocalizedClientLink>
            <div className="space-y-2">
              <span className="text-gray-700 font-medium">Wholesale</span>
              <LocalizedClientLink
                href="/wholesale/shield"
                className="block pl-4 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CropDefense Shield
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/wholesale/boost"
                className="block pl-4 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CropDefense Boost
              </LocalizedClientLink>
            </div>
            <LocalizedClientLink
              href="/store"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/contact"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </LocalizedClientLink>
            {!customer && (
              <LocalizedClientLink
                href="/account"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </LocalizedClientLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ClientNav;