import Image from "next/image"
import Link from "next/link"
import { Text } from "@medusajs/ui"
import { Leaf, Mail, Phone, MapPin } from 'lucide-react'

export default async function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-ui-border-base w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
      <img src="/logo-white.png" alt="CropDefense Logo" className="h-8 w-auto" />
              {/* <span className="text-2xl font-bold">CropDefense™</span> */}
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              OMRI certified microbial seed + plant treatment that increases crop yields up to 70% on both organic and conventional crops alike.
            </p>
            <div className="text-primary font-semibold text-lg">
              Protect. Synergize. Optimize.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/story" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:info@cropdefense.net" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  info@cropdefense.net
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-300">Agricultural Innovation Center</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <Text className="text-gray-400">
            © {new Date().getFullYear()} CropDefense™. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}