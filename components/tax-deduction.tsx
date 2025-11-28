import { Receipt, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TaxDeduction() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Receipt className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-xl mb-2">💡 Pro Tip: Tax-Deductible Investment</h3>
              <p className="text-muted-foreground">
                In most Swiss cantons—including Zürich—career coaching qualifies as professional education and can be
                deducted from your taxes,{" "}
                <span className="font-semibold text-foreground">up to CHF 12,400 per year</span>. Consult your tax
                advisor to maximize your savings.
              </p>
            </div>
            <Button variant="outline" className="gap-2 flex-shrink-0 bg-transparent">
              <Download className="w-4 h-4" />
              Tax Deduction Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
