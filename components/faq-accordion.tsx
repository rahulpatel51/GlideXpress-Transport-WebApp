"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What types of vehicles do you have in your fleet?",
    answer:
      "Our fleet includes a wide range of vehicles to accommodate various transportation needs. This includes box trucks, semi-trucks, refrigerated vehicles, flatbeds, and specialized transport vehicles. All our vehicles are regularly maintained and equipped with GPS tracking systems.",
  },
  {
    question: "How do I get a shipping quote?",
    answer:
      "You can request a shipping quote by filling out our online form, calling our customer service team, or sending an email to quotes@transportpro.com with details about your shipment. We'll need information about the origin, destination, dimensions, weight, and type of goods being shipped.",
  },
  {
    question: "Do you offer international shipping services?",
    answer:
      "Yes, we offer comprehensive international shipping services. Our global network allows us to provide reliable transportation to and from major international destinations. We handle all customs documentation and compliance requirements to ensure smooth cross-border shipments.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment using the tracking number provided to you after booking. Enter this number in the tracking tool on our website or contact our customer service team for assistance. Our advanced tracking system provides real-time updates on your shipment's location and estimated delivery time.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, bank transfers, and corporate accounts with approved credit terms. Payment is typically required before shipment for new customers, while established clients may qualify for our net-30 payment terms.",
  },
  {
    question: "Do you offer warehousing and distribution services?",
    answer:
      "Yes, we provide comprehensive warehousing and distribution services. Our facilities are strategically located to optimize distribution networks, and we offer inventory management, order fulfillment, cross-docking, and distribution services tailored to your business needs.",
  },
  {
    question: "What is your policy for damaged or lost goods?",
    answer:
      "We take utmost care to ensure safe delivery of all shipments. However, in the rare event of damage or loss, we have a comprehensive claims process. We recommend all shipments be properly insured, and we offer various insurance options to protect your goods during transit.",
  },
  {
    question: "Can you handle temperature-sensitive shipments?",
    answer:
      "Yes, we specialize in temperature-controlled transportation. Our refrigerated vehicles maintain precise temperature controls for sensitive items like food, pharmaceuticals, and chemicals. We monitor temperature conditions throughout transit to ensure your products remain within the required temperature range.",
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={cn(
            "rounded-lg border transition-all duration-200",
            openIndex === index ? "border-blue-200 bg-blue-50" : "border-gray-200 bg-white",
          )}
        >
          <button
            className="flex w-full items-center justify-between p-4 text-left"
            onClick={() => toggleFaq(index)}
            aria-expanded={openIndex === index}
          >
            <h3
              className={cn(
                "text-lg font-medium transition-colors",
                openIndex === index ? "text-blue-700" : "text-gray-900",
              )}
            >
              {faq.question}
            </h3>
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform duration-200",
                openIndex === index ? "rotate-180 text-blue-600" : "text-gray-500",
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              openIndex === index ? "max-h-96 pb-4 pt-0" : "max-h-0",
            )}
          >
            <p className="px-4 text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

