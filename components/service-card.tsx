import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  link?: string
  color?: "blue" | "green" | "purple" | "orange" | "red" | "teal"
}

export default function ServiceCard({
  icon,
  title,
  description,
  link = "/services",
  color = "blue",
}: ServiceCardProps) {
  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
      case "green":
        return "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white"
      case "purple":
        return "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
      case "orange":
        return "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
      case "red":
        return "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white"
      case "teal":
        return "bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white"
      default:
        return "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
    }
  }

  const getTextColor = () => {
    switch (color) {
      case "blue":
        return "text-blue-600 group-hover:text-blue-800"
      case "green":
        return "text-green-600 group-hover:text-green-800"
      case "purple":
        return "text-purple-600 group-hover:text-purple-800"
      case "orange":
        return "text-orange-600 group-hover:text-orange-800"
      case "red":
        return "text-red-600 group-hover:text-red-800"
      case "teal":
        return "text-teal-600 group-hover:text-teal-800"
      default:
        return "text-blue-600 group-hover:text-blue-800"
    }
  }

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="pb-2">
        <div
          className={`mb-4 flex h-16 w-16 items-center justify-center rounded-lg transition-all duration-300 ${getColorClasses()}`}
        >
          {icon}
        </div>
        <CardTitle className="text-xl text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href={link}
          className={`group inline-flex items-center text-sm font-medium transition-colors ${getTextColor()}`}
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}

