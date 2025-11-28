import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Switzerland&apos;s High-Impact Career Coaching Boutique
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight text-balance">
              Secure Your Next Great Role in Switzerland—
              <span className="text-primary">Faster, Smarter</span>, with AI-Powered Karrierecoaching
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Join 250+ professionals who&apos;ve transformed their careers since 2019 with our proven Career Bootcamp
              Method. From job seekers to C-level executives, we deliver results through hand-selected expert coaches
              and tailored programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-accent text-primary-foreground gap-2 h-14 px-8 text-base"
              >
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 h-14 px-8 text-base bg-transparent">
                Explore Programs
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="font-semibold text-foreground">Founded 2019</span>
              </span>
              <span className="w-px h-4 bg-border" />
              <span>Former F1 Executive Leadership</span>
              <span className="w-px h-4 bg-border" />
              <span>Hand-Selected Senior Coaches</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/professional-executive-coach-in-modern-office-swit.jpg"
                alt="Michael M. Schmidt - Career Coach"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary fill-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Watch Success Stories</p>
                  <p className="text-xs text-muted-foreground">60-second testimonial montage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
