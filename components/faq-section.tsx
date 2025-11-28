import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Career Bootcamp different from other career coaches?",
    answer:
      "Our proprietary CBC Method combines executive-level coaching, AI integration, Swiss market expertise, and a structured, time-boxed approach. We have a 96% success rate and over 5,000 hours of coaching experience. Unlike solo coaches or large outplacement firms, we offer boutique precision with proven results.",
  },
  {
    question: "Which program is right for me?",
    answer:
      "Accelerate is best for self-directed learners wanting AI skills and fast results. Elevate suits professionals needing structure, community, and comprehensive support. Executive is for senior leaders seeking C-level or board positions with complete confidentiality.",
  },
  {
    question: "Can I really deduct this from my Swiss taxes?",
    answer:
      "Yes! In most cantons, career coaching qualifies as professional education (Weiterbildung) and is tax-deductible up to CHF 12,400/year. Consult your tax advisor for specifics.",
  },
  {
    question: "What if I'm not satisfied?",
    answer: "We offer a 100% money-back guarantee: 20 days for Accelerate/Elevate, 4 weeks for Executive.",
  },
  {
    question: "Do you work with expats?",
    answer:
      'Over 60% of our clients are expats navigating the Swiss job market. We specialize in "Swissifying" applications and accessing the hidden job market.',
  },
  {
    question: "How long does it take to land a job?",
    answer:
      "Results vary, but our average client lands interviews within 8-12 weeks and secures positions within 18-24 weeks. Executive placements average 18-24 weeks.",
  },
  {
    question: "Is coaching conducted in English or German?",
    answer: "Both! Our team is fluent in English and German, and we tailor sessions to your preference.",
  },
  {
    question: "What payment options are available?",
    answer:
      "We accept Swiss bank transfer, credit card, Apple Pay, Google Pay, and PayPal. Flexible installment plans available for all programs.",
  },
  {
    question: "When do Elevate cohorts start?",
    answer: "New cohorts begin monthly. Next start dates: December 1, 2025 | January 19, 2026 | March 2, 2026.",
  },
  {
    question: "Is everything confidential?",
    answer:
      "Yes. We maintain complete confidentiality, especially for executive clients navigating sensitive career transitions.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
