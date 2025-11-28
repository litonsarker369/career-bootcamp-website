import { Button } from "@/components/ui/button"
import { Phone, Layers, Rocket, Users, Trophy, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Book Your Free Strategy Call",
    description: "We'll discuss your career goals, challenges, and which program fits best.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Choose Your Program",
    description: "Select Accelerate, Elevate, or Executive based on your needs and timeline.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Begin Your Transformation",
    description: "Access our app, join your cohort or 1:1 sessions, and start your structured journey.",
  },
  {
    number: "04",
    icon: Users,
    title: "Get Expert Guidance",
    description: "Weekly coaching, real-time feedback, and personalized strategies from our certified team.",
  },
  {
    number: "05",
    icon: Trophy,
    title: "Land Your Ideal Role",
    description: "Apply with confidence, ace interviews, negotiate your salary, and celebrate your success!",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Your Journey to Career Success—Step by Step
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6 lg:gap-4 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-6 border border-border h-full">
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-5 w-6 h-6 text-primary/40 -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-accent gap-2 h-14 px-8">
            Start Your Journey Today
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
