import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import Feature from "./Feature";

export default function UserSection() {
  return (
    <section id="user" className="bg-white font-poppins py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          {/* Phone mockup - you'll add the actual image here */}

          <div className="hidden lg:block  z-50">
            <Image
              src="/images/for_users_section_image.svg"
              alt="User Section Phone Mockup"
              width={800}
              height={1200}
             
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8 ">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 pr-2 bg-white rounded-full mt-12 border border-[#E9EDF8]">
              <FaUserCircle className="w-8 h-8 text-[#284A9A]" />
              <span className="text-black font-semibold text-sm">For User</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-black leading-tight">
                Source and manage
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
                title="Buy & Manage Products"
                description="Access a wide range of medical products, packages, and
             co-buying opportunities from trusted suppliers."
              />
              <Feature
                image="/images/request_product.png"
                title="Request Products"
                description="Can't find what you need? Request unavailable products, and
             Octobid connects you with suppliers."
              />

              {/* Monitor Your Orders */}
              <Feature
                image="/images/monitor_orders.png"
                title="Monitor Your Orders"
                description="Track and manage your purchases, co-buying contributions,
             and package deliveries in one place."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
