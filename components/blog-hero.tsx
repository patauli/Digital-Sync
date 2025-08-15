import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm">
              <span className="text-primary font-medium">Expert Insights & Tips</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Digital Marketing <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and actionable strategies to grow your
              digital presence and boost your sales.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search articles..." className="pl-10 pr-4 py-3 text-base" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
