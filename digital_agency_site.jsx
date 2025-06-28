import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AgencyHomepage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 border-b shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">[Your Agency Name]</h1>
        <nav className="space-x-4">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#case-studies" className="hover:underline">Case Studies</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-4xl font-semibold mb-4">Digital Solutions for Real Growth</h2>
        <p className="text-lg mb-6">We build websites, apps, and campaigns that convert and scale.</p>
        <Button className="text-lg">Get a Free Quote</Button>
      </section>

      <section id="services" className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Web Design", desc: "Custom websites that convert." },
          { title: "SEO", desc: "Get found on Google." },
          { title: "PPC", desc: "Paid ads that work." },
          { title: "AI Content", desc: "Content creation with AI power." },
          { title: "CRM & Automation", desc: "Automate your customer journey." },
          { title: "Mobile Apps", desc: "iOS & Android development." },
          { title: "Custom Apps", desc: "Tailored software for your business." },
          { title: "Social Media", desc: "Grow on TikTok, Meta, LinkedIn & more." },
        ].map((service, index) => (
          <Card key={index} className="hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section id="case-studies" className="p-10 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6 text-center">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Ecommerce SEO Growth</h3>
              <p>+320% traffic in 4 months. Full funnel SEO strategy.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">App Launch Success</h3>
              <p>iOS + Android app for a retail chain with 10K+ downloads in 30 days.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let's Talk</h2>
        <p className="mb-6">Fill out the form below and we’ll get back to you within 24 hours.</p>
        <div className="max-w-xl mx-auto space-y-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Service Interested In" />
          <Button className="w-full">Submit</Button>
        </div>
      </section>

      <footer className="p-6 bg-gray-100 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} [Your Agency Name]. All rights reserved.
      </footer>
    </div>
  );
}
