'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { name: 'Home Cleaning', href: '/services/home-cleaning', desc: 'Complete home cleaning solutions' },
    { name: 'Office Cleaning', href: '/services/office-cleaning', desc: 'Professional office maintenance' },
    { name: 'Mall Cleaning', href: '/services/mall-cleaning', desc: 'Commercial mall cleaning' },
    { name: 'Hospital Cleaning', href: '/services/hospital-cleaning', desc: 'Specialized medical facility cleaning' },
    { name: 'Cooking Services', href: '/services/cooking', desc: 'Professional cooking assistance' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span>📞 Call: +91 9876543210</span>
              <span>⏰ 24/7 Service Available</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>🚀 20 Min Reach Guarantee</span>
              <span>💰 Starting ₹39/Hour</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-600">AbhiMaids</h1>
              <p className="text-xs text-gray-600">Professional Cleaning</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.desc}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/booking" className="text-gray-700 hover:text-blue-600 font-medium">
                    Book Now
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
                    Dashboard
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link href="/booking">
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700" size="sm">
                  Book Service
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <span className="sr-only">Toggle menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 pt-8">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    Home
                  </Link>
                  
                  <div className="space-y-2">
                    <p className="text-lg font-medium">Services</p>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="block pl-4 text-gray-600 hover:text-blue-600"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>

                  <Link href="/booking" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    Book Now
                  </Link>

                  <Link href="/dashboard" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    Dashboard
                  </Link>

                  <div className="pt-4 space-y-2">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <Link href="/booking" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600">
                        Book Service
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}