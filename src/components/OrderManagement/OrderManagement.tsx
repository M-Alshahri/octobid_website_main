import { RiDashboardLine } from "react-icons/ri";

import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export default function OrderManagement() {
  return (
    <section className="relative bg-white font-poppins">


   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-center ">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}

            <div className="inline-flex items-center space-x-2 pr-2 bg-white rounded-full mt-12 border border-[#E9EDF8]">
              <div className="rounded-full bg-[#284A9A] p-2 text-white">
                <RiDashboardLine className="w-4 h-4" />
              </div>
              <span className="text-black font-semibold text-sm">
                Dashboard
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4 text-3xl lg:text-4xl xl:text-5xl font-semibold text-black leading-tight font-poppins">
              <h2>
                Managing order is
                <br />
                <span>Easy!</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-[#6B7280] leading-relaxed max-w-lg font-geist-sans">
              Track And Manage Your Hospital&apos;s Procurement Process With
              Tools Designed For Efficiency And Reliability.
            </p>

            {/* Features List */}
            <div className="space-y-6 ml-4 font-geist-sans">
              {/* Feature 1 */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0 w-6 h-6 flex items-center">
                  <FaCheck className="w-6 h-6 text-[#284A9A]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 ">
                    Streamlined Order Management.
                  </h3>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-start">
                  <FaCheck className="w-6 h-6 text-[#284A9A]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Access To A Wide Range Of Medical Products.
                  </h3>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-start">
                  <FaCheck className="w-6 h-6 text-[#284A9A]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Customized Purchasing Options
                    <br />
                    (Bid, Package, Or Co-Buying).
                  </h3>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-start">
                  <FaCheck className="w-6 h-6 text-[#284A9A]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Real-Time Updates And Detailed Tracking.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Container */}
          <div className="relative max-w-lg w-150 h-150">
            {/* glow background */}
          

            <Image
              src="/images/analytics.png"
              alt="Order Management Dashboard"
              fill
              className="relative z-10 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
