import Hero from "@/components/Hero/Hero";
import UserSection from "@/components/UserSection/UserSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* User Section */}
      <UserSection />

      {/* Supplier Section */}
      <section
        id="supplier"
        className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50"
      >
       <h1>For Suppliers</h1>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="min-h-screen flex flex-col items-center justify-center p-8 bg-white"
      >
        <h1>Platform Features</h1>
      </section>

      {/* Testimonial Section */}
      <section
        id="testimonial"
        className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50"
      >
        <h1>What Our Users Say</h1>
      </section>

      {/* FAQs Section */}
      <section
        id="faqs"
        className="min-h-screen flex flex-col items-center justify-center p-8 bg-white"
      >
        <h1>Frequently Asked Questions</h1>
      </section>
    </div>
  );
}
