import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AbhiMaids</h3>
                <p className="text-sm text-gray-400">Professional Cleaning</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional cleaning services for homes, offices, malls, and hospitals. 
              Quality service guaranteed with 20-minute reach and affordable rates starting at ₹39/hour.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-xs">ig</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/home-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/office-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/mall-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  Mall Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/hospital-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  Hospital Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/cooking" className="text-gray-300 hover:text-white transition-colors">
                  Cooking Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-white transition-colors">
                  Book Service
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
                  Customer Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-white transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">123 Service Street</p>
                  <p className="text-gray-300">Business District</p>
                  <p className="text-gray-300">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <div>
                  <p className="text-gray-300">+91 9876543210</p>
                  <p className="text-gray-300">+91 9876543211</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📧</span>
                <p className="text-gray-300">contact@abhimaids.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">⏰</span>
                <div>
                  <p className="text-gray-300">24/7 Service Available</p>
                  <p className="text-gray-300">Customer Support: 9 AM - 9 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Highlights */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🚀</span>
              <div className="text-left">
                <p className="font-semibold text-blue-400">20 Min Reach</p>
                <p className="text-xs text-gray-400">Fast Response Time</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">💰</span>
              <div className="text-left">
                <p className="font-semibold text-green-400">₹39/Hour</p>
                <p className="text-xs text-gray-400">Affordable Pricing</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🏆</span>
              <div className="text-left">
                <p className="font-semibold text-yellow-400">Quality Service</p>
                <p className="text-xs text-gray-400">Guaranteed Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 AbhiMaids. All rights reserved. Professional cleaning services at your doorstep.</p>
            <p className="mt-2 md:mt-0">Designed with ❤️ for cleaner spaces</p>
          </div>
        </div>
      </div>
    </footer>
  )
}