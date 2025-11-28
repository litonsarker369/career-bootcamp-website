import {
  FileX,
  Eye,
  MapPin,
  FileSearch,
  Building,
  TrendingUp,
  Sparkles,
  MessageCircle,
  GraduationCap,
  Crown,
  Search,
  DollarSign,
  Shield,
  Globe,
} from "lucide-react"

const painPoints = [
  {
    title: "Job Seekers & Expats",
    icon: FileSearch,
    problems: [
      { icon: FileX, text: "Hundreds of applications, zero responses" },
      { icon: Eye, text: "AI filters blocking your CV before human eyes see it" },
      { icon: MapPin, text: 'Swiss "hidden job market" feels impossible to access' },
      { icon: FileSearch, text: 'Don\'t know how to "Swissify" your application' },
      { icon: Building, text: "Solo coaches lack Swiss market depth; big firms treat you like a number" },
    ],
  },
  {
    title: "Mid-Career Professionals",
    icon: TrendingUp,
    problems: [
      { icon: TrendingUp, text: "Stuck in the wrong role, unclear about next steps" },
      { icon: Sparkles, text: "Personal brand doesn't reflect your true value" },
      { icon: MessageCircle, text: "Networking feels awkward and ineffective" },
      { icon: GraduationCap, text: "Interview skills rusty or never mastered" },
      { icon: Building, text: "Need structured guidance, not generic advice" },
    ],
  },
  {
    title: "Executives & Leaders",
    icon: Crown,
    problems: [
      { icon: Crown, text: "Ready for C-level or board position but don't know how to position yourself" },
      { icon: Search, text: "Executive search process feels opaque" },
      { icon: DollarSign, text: "Compensation negotiation anxiety" },
      { icon: Shield, text: "Need confidential, strategic career guidance" },
      { icon: Globe, text: "Want coaches who've actually held C-level roles, not just studied them" },
    ],
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            The Swiss Job Market in 2025: Tougher Than Ever—But Not Impossible
          </h2>
          <p className="text-lg text-muted-foreground">
            Since 2019, We&apos;ve Helped 250+ Professionals Navigate These Exact Challenges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((column, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <column.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{column.title}</h3>
              </div>
              <ul className="space-y-4">
                {column.problems.map((problem, pIndex) => (
                  <li key={pIndex} className="flex items-start gap-3">
                    <problem.icon className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{problem.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/20">
          <p className="text-lg lg:text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
            You&apos;re not alone. Since 2019, we&apos;ve pioneered a proven methodology that combines boutique
            precision with executive-level expertise. Welcome to{" "}
            <span className="font-semibold text-primary">Career Bootcamp</span>—where former F1 executives, CHROs, and
            C-level leaders coach you to victory.
          </p>
        </div>
      </div>
    </section>
  )
}
