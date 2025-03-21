import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  company: string
  image: string
  testimonial: string
}

export default function TestimonialCard({ name, company, image, testimonial }: TestimonialCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardContent className="p-6 pt-8">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        </div>
        <p className="mb-6 text-gray-600">{testimonial}</p>
        <div className="flex items-center space-x-4">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-100"
          />
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

