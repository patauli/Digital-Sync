import { Target, Lightbulb, Rocket, Heart } from "lucide-react"

export function CompanyStory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              From humble beginnings to becoming a trusted digital marketing partner for businesses across India.
            </p>
          </div>

          <div className="space-y-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                BicriSales was founded in 2019 with a simple yet powerful vision: to help businesses of all sizes
                harness the power of digital marketing to grow their sales and reach new heights. What started as a
                small team of passionate digital marketers has grown into a full-service agency that has helped over 200
                businesses transform their online presence.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our journey began when we noticed that many businesses, especially small and medium enterprises, were
                struggling to navigate the complex world of digital marketing. They had great products and services but
                lacked the expertise to effectively market them online. That's when we decided to bridge this gap by
                providing comprehensive, results-driven digital marketing solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Mission-Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Helping businesses achieve their digital marketing goals with precision and dedication.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Constantly evolving our strategies to stay ahead of digital marketing trends.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Results-Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Every strategy we implement is designed to deliver measurable, impactful results.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Client-Centric</h3>
                <p className="text-sm text-muted-foreground">
                  Your success is our success. We treat every client's business as our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
