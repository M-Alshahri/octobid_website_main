import ConnectWithSuppliers from "@/components/ConnectWithSuppliers/ConnectWithSuppliers";
import FAQs from "@/components/FAQs/FAQs";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import OrderManagement from "@/components/OrderManagement/OrderManagement";
import SupplierSection from "@/components/SupplierSection/SupplierSection";
import Testimonials from "@/components/Testimonials/Testimonials";
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

      {/* Order Management Section */}
      <OrderManagement />

      {/* Features Section */}
      <Features />

      {/* Testimonial Section */}
      <Testimonials />

      {/* FAQs Section */}
      <FAQs />
    </div>
  );
}
