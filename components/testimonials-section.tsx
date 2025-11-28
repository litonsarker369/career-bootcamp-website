"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Eva L.",
    role: "Global Supply Manager, Pharmaceutical",
    text: "As an expat, I was struggling to adapt my CV to Swiss standards. The personalized coaching and AI tools training were invaluable. My applications improved dramatically, and I started getting interviews almost immediately. The confidence boost was real!",
    rating: 5,
  },
  {
    name: "Sandra K.",
    role: "Former Self-employed, now CEO Assistant",
    text: "The ELEVATE program was a game-changer for my job search in Switzerland and Austria. The structured roadmap gave me the direction I needed. I landed my first job in just 20 weeks!",
    rating: 5,
  },
  {
    name: "Dr. Andreas C.",
    role: "Sports Apparel Executive",
    text: "Michael's Career Bootcamp methodology is truly one of a kind—high-impact, goal-driven, efficient and fun. If you want truly transformative executive career coaching, Michael is in a class of his own.",
    rating: 5,
  },
  {
    name: "Stephan G.",
    role: "CFO, Swiss Banking",
    text: "15 weeks from zero to C-Level. I wouldn't have believed it if someone had told me before. The Career Bootcamp method and Michael's ambitious, dynamic approach are unparalleled. Plus, deducting the program cost from taxes made this a no-brainer investment.",
    rating: 5,
  },
  {
    name: "Peter L.",
    role: "CEO, Global Sport Apparel Company",
    text: "As a long-time COO, I wanted to pivot into a CEO role in an international A-Brand but struggled to enter the hidden executive job market. The personalized coaching and strategic advice were invaluable. I secured my CEO role!",
    rating: 5,
  },
  {
    name: "Lorena C.",
    role: "Diversity Manager, Big Pharma",
    text: "The structured roadmap cut my job search time in half. I negotiated a 22% higher salary thanks to their coaching!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCount = 3

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < visibleCount; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
              Real People. Real Results.
            </h2>
            <p className="text-lg text-muted-foreground">Real Career Success.</p>
          </div>
          <div className="flex gap-2 mt-6 lg:mt-0">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="bg-card rounded-2xl p-8 border border-border relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="gap-2 bg-transparent">
            Read More Success Stories
          </Button>
        </div>
      </div>
    </section>
  )
}
