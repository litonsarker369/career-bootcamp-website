import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustIndicators } from "@/components/trust-indicators"
import { ProblemSection } from "@/components/problem-section"
import { ProgramsSection } from "@/components/programs-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ClientLogos } from "@/components/client-logos"
import { TaxDeduction } from "@/components/tax-deduction"
import { HowItWorks } from "@/components/how-it-works"
import { FAQSection } from "@/components/faq-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustIndicators />
      <ProblemSection />
      <ProgramsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ClientLogos />
      <TaxDeduction />
      <HowItWorks />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
