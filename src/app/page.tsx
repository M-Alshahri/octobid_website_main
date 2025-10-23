
import ConnectWithSuppliers from "@/components/ConnectWithSuppliers/ConnectWithSuppliers";
import Hero from "@/components/Hero/Hero";
import SupplierSection from "@/components/SupplierSection/SupplierSection";
import UserSection from "@/components/UserSection/UserSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* User Section */}
      <UserSection />

      {/* Supplier Section */}
      <SupplierSection />

      {/* Connect with Suppliers Section */}

      <ConnectWithSuppliers
        logoSrc="/images/logo_with_shadow.svg"
        ringIcons={[
          { src: "/images/saving_chat.svg", alt: "Savings chat" },
          { src: "/images/dashboard_grid.svg", alt: "Dashboard grid" },
          { src: "/images/box.svg", alt: "Box / package" },
          { src: "/images/storefront.svg", alt: "Storefront" },
          { src: "/images/network.svg", alt: "Supplier network" },
        ]}
      />


      

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
