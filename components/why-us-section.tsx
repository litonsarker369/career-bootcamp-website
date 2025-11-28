import { Target, Users, Layers, Cpu, MapPin, BadgeCheck } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Proprietary Career Bootcamp Method",
    description:
      "Developed and refined since 2019, our structured CBC methodology combines the agility of personalized coaching with the rigor of proven frameworks. 96% success rate across 250+ clients—from job seekers to C-level executives.",
  },
  {
    icon: Users,
    title: "Hand-Selected Expert Coaching Team",
    description:
      "Our hand-picked team of former C-level executives, CHROs, headhunters, and marketing strategists brings 5,000+ collective coaching hours. Former F1 executive leadership. Fortune 500 HR directors. Executive search partners.",
  },
  {
    icon: Layers,
    title: "Tailored Programs for Every Need",
    description:
      "From self-paced online courses (Accelerate) to dynamic micro-group coaching (Elevate) to premium 1:1 executive coaching—we offer flexibility without sacrificing quality.",
  },
  {
    icon: Cpu,
    title: "AI Integration & Modern Tools",
    description:
      "Since 2019, we've pioneered AI-powered career coaching in Switzerland. Master cutting-edge tools for job search, personal branding, and 4x faster applications—staying ahead in a market transformed by technology.",
  },
  {
    icon: MapPin,
    title: "Swiss Market Mastery & International Reach",
    description:
      "Deep understanding of Swiss corporate culture, hidden job market dynamics, and local networking strategies—combined with global executive search expertise. Zürich, Geneva, or international C-level roles.",
  },
  {
    icon: BadgeCheck,
    title: "Established Track Record & Guaranteed Results",
    description:
      "Since 2019, we've placed professionals at UBS, Nestlé, Roche, Novartis, Google, and 30+ leading organizations. 100% money-back guarantee. Average ROI of 15x.",
  },
]

export function WhyUsSection() {
  return (
    <section id="method" className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Why 250+ Professionals Choose Career Bootcamp
          </h2>
          <p className="text-lg text-muted-foreground">
            The Precision of a Boutique. The Power of Proven Expertise. Since 2019.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
