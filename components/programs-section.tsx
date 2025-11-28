import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rocket, TrendingUp, Crown, Check, ArrowRight, Calendar } from "lucide-react"

const programs = [
  {
    id: "accelerate",
    name: "Accelerate",
    icon: Rocket,
    tagline: "Fast-Track Your Swiss Job Search",
    bestFor: "Job seekers who want practical AI skills and results without weekly coaching",
    features: [
      "12 self-paced online modules",
      "Career Bootcamp app with micro-quests",
      "AI advantage training (4x faster applications)",
      "1 live coaching session with executive coach",
      "CV, LinkedIn, and Swiss application optimization",
    ],
    outcome: "Reskill for AI employability. Up to 4x faster job search.",
    price: "CHF 1,750/month × 3 months",
    cta: "Start Accelerate Program",
    popular: false,
  },
  {
    id: "elevate",
    name: "Elevate",
    icon: TrendingUp,
    tagline: "Transform Your Career in 12 Weeks",
    bestFor:
      "Professionals needing structure, expert feedback, and community support—without the impersonal feel of large outplacement programs",
    features: [
      "12-week structured program (CREATE-FIND-SEIZE methodology)",
      "12 weekly live micro-group coaching sessions (5-10 cohort)",
      "Coaching from hand-selected industry experts",
      "Proprietary Career Bootcamp app with micro-quests",
      "Personal branding and value proposition development",
      "Swiss networking strategies and hidden job market access",
      "Interview mastery and salary negotiation",
      "Peer community and ongoing support",
    ],
    outcome: "Clarity on your brand. Tailored strategy. Master interviews. Access Swiss networks.",
    price: "CHF 4,750",
    priceNote: "Flexible payment: 2-3 monthly installments",
    cta: "Join Next Elevate Cohort",
    popular: true,
    cohortDates: ["December 1, 2025", "January 19, 2026", "March 2, 2026"],
  },
  {
    id: "executive",
    name: "Executive",
    icon: Crown,
    tagline: "Exclusive Coaching for C-Level Leaders",
    bestFor: "Senior executives seeking board appointments, C-level transitions, or confidential career advancement",
    features: [
      "6 months of premium 1:1 executive coaching",
      "Weekly 90-120 min sessions with Michael M. Schmidt",
      "Coach matching based on target industry/role",
      "24/7 WhatsApp support channel",
      "Executive search intelligence and board positioning",
      "C-level salary benchmarking and negotiation mastery",
      "Executive presence enhancement",
      "Complete confidentiality and discretion",
    ],
    outcome: "Secure C-level or board positions. 90% interview success rate. Average 18-24 week placement.",
    price: "From CHF 16,500",
    priceNote: "Option: CHF 16,500 + 3% success fee",
    cta: "Schedule Confidential Consultation",
    popular: false,
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Three Programs. One Mission: Your Career Success.
          </h2>
          <p className="text-lg text-muted-foreground">Choose the path that fits your ambition and career stage</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`relative bg-card rounded-2xl p-8 border ${
                program.popular ? "border-primary shadow-lg scale-105" : "border-border"
              } flex flex-col`}
            >
              {program.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    program.popular ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}
                >
                  <program.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl">{program.name}</h3>
              </div>

              <p className="text-primary font-medium mb-2">{program.tagline}</p>
              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-medium text-foreground">Best for:</span> {program.bestFor}
              </p>

              <div className="mb-6 flex-grow">
                <p className="text-sm font-semibold mb-3">What You Get:</p>
                <ul className="space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <p className="text-sm font-medium text-foreground mb-1">Outcome:</p>
                <p className="text-sm text-muted-foreground">{program.outcome}</p>
              </div>

              <div className="mb-6">
                <p className="text-2xl font-bold text-foreground">{program.price}</p>
                {program.priceNote && <p className="text-sm text-muted-foreground">{program.priceNote}</p>}
              </div>

              {program.cohortDates && (
                <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Next Cohort Dates:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {program.cohortDates.map((date, index) => (
                      <li key={index}>• {date}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Button
                className={`w-full gap-2 ${program.popular ? "bg-primary hover:bg-accent" : ""}`}
                variant={program.popular ? "default" : "outline"}
              >
                {program.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
