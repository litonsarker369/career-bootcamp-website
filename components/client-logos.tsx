const logos = [
  "UBS",
  "Nestlé",
  "Roche",
  "Novartis",
  "Swiss Re",
  "Zürich Insurance",
  "ABB",
  "Google",
  "UNESCO",
  "Julius Bär",
  "Lindt",
  "Lonza",
  "SwissLife",
  "Toyota",
  "BMW",
  "Audi",
  "Continental",
]

export function ClientLogos() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Where Our Clients Have Landed
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-muted-foreground/60 hover:text-foreground transition-colors font-semibold text-sm lg:text-base"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
