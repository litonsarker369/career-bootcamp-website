import { Star, CheckCircle, Award, Users } from "lucide-react"

const indicators = [
  {
    icon: Star,
    value: "4.95/5",
    label: "Client Satisfaction",
  },
  {
    icon: CheckCircle,
    value: "78%",
    label: "Success Rate Landing Interviews Since 2019",
  },
  {
    icon: Award,
    value: "ISO 17024",
    label: "ICI, CAS Certified Coaches",
  },
  {
    icon: Users,
    value: "250+",
    label: "Professionals Coached",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-xl lg:text-2xl text-foreground">{item.value}</p>
                <p className="text-xs lg:text-sm text-muted-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
