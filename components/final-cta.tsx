import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
          Ready to Secure Your Next Great Role?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Join 250+ professionals who&apos;ve transformed their careers with Career Bootcamp.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button size="lg" variant="secondary" className="gap-2 h-14 px-8 text-base">
            Book Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 h-14 px-8 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
          >
            Download Program Brochure
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-primary-foreground/80">
          <a
            href="tel:+41782228002"
            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            +41 78 222 80 02
          </a>
          <span className="hidden sm:block w-px h-4 bg-primary-foreground/30" />
          <a
            href="mailto:michael@career-bootcamp.net"
            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            michael@career-bootcamp.net
          </a>
          <span className="hidden sm:block w-px h-4 bg-primary-foreground/30" />
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Bahnhofplatz 1, 8001 Zürich
          </span>
        </div>
      </div>
    </section>
  )
}
