import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import Feature from "../UserSection/Feature";

export default function SupplierSection() {
  return (
    <section id="supplier" className="bg-white font-poppins ">
      <div className="flex flex-col sm:flex-row items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-24 ">
        {/* Left Content */}

        <div className="space-y-8 ">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 pr-2 bg-white rounded-full mt-12 border border-[#E9EDF8]">
            <FaUserCircle className="w-8 h-8 text-[#284A9A]" />
            <span className="text-black font-semibold text-sm">For Suppliers</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-black leading-tight">
             Grow your business
              <br />
              with Octobid
            </h2>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <Feature
              image="/images/signup.png"
              title="Sign Up"
              description="Create an account to access a marketplace built for
                   hospitals and healthcare providers."
            />
            <Feature
        image="/images/manage_products.png"
        title="Create Bids"
        description="Post bids that hospitals can view and order from, 
              giving you more visibility and opportunities.."
      />
            <Feature
        image="/images/package.png"
        title="Add Packages & Co-buying"
        description="Offer bundled packages or join co-buying opportunities to 
              attract more hospital buyers.."
      />

             <Feature
        image="/images/dashboard.png"
        title="Manage from Dashboard"
        description="Track your bids, packages, co-buying contributions, 
              and hospital orders all in one dashboard."
      />
          </div>
        </div>
        {/* Right Content */}
        <div className="hidden lg:block z-50">
          <Image
            src="/images/suppliers_phone_mokup.png"
            alt="Suppliers Section Phone Mockup"
            width={800}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

