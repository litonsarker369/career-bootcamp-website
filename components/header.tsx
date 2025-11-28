"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">CB</span>
            </div>
            <span className="font-semibold text-lg hidden sm:block">Career Bootcamp</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#programs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Programs
            </Link>
            <Link
              href="#method"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Our Method
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Success Stories
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Explore Programs
            </Button>
            <Button size="sm" className="bg-primary hover:bg-accent">
              Book Free Strategy Call
            </Button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="#programs" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>
                Programs
              </Link>
              <Link href="#method" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>
                Our Method
              </Link>
              <Link href="#testimonials" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>
                Success Stories
              </Link>
              <Link href="#faq" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" className="w-full bg-transparent">
                  Explore Programs
                </Button>
                <Button className="w-full bg-primary hover:bg-accent">Book Free Strategy Call</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
