import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    price: string
    image: string
    features: string[]
    href: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {service.price}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="text-gray-600 leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Service Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col space-y-3">
          <Link href={service.href}>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 group-hover:scale-105 transition-transform">
              Learn More
            </Button>
          </Link>
          <Link href="/booking">
            <Button variant="outline" className="w-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600">
              Book Now - {service.price}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}