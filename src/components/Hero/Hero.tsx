import StatisticsElement from "@/components/Hero/StatisticsElement";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaApple, FaStar } from "react-icons/fa";

export default async function Hero() {
  const t = await getTranslations("hero");
  return (
    <section
      id="home"
      className="bg-white font-poppins relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-[url('/images/bg_gradient4.svg')]  bg-position-[center_center] bg-cover bg-no-repeat">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Blue dot indicator */}
            <div className="w-2 h-2 bg-[#59A2FF] rounded-full"></div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 leading-tight">
                {t("title")}
              </h1>

              {/* Blue underline */}
              <div className="w-10 h-1 bg-[#284A9A] rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg font-geist-sans">
              {t("description")}
            </p>

            {/* App Store Buttons */}
            <div className="flex gap-4">
              {/* Google Play Button */}
              <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow hover:shadow-md transition-shadow cursor-pointer">
                <Image
                  src="/images/google_play.svg"
                  alt="Google Play"
                  width={24}
                  height={24}
                />
                <div>
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold text-gray-900">
                    {t("googlePlay")}
                  </div>
                </div>
              </div>

              {/* Apple Store Button */}
              <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow hover:shadow-md transition-shadow cursor-pointer">
                <FaApple className="w-6 h-6 text-gray-800" />
                <div>
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold text-gray-900">
                    {t("appStore")}
                  </div>
                </div>
              </div>
            </div>

            {/* User Avatars and Rating */}
            <div className="flex items-center space-x-4">
              {/* Avatar Stack */}
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">JD</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">MS</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">AL</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">RK</span>
                </div>
              </div>

              {/* Rating */}
              <div className="text-sm">
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="w-6 h-6 text-[#EAF2FF]" />
                  ))}
                </div>
                <p className=" text-lg text-black">{t("rating")}</p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/images/hero_image.svg"
              alt="Hero Phone"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center">
            <StatisticsElement text1="115+" text2={t("statistics.hospitals")} />
            <StatisticsElement text1="88k+" text2={t("statistics.orders")} />
            <StatisticsElement text1="30%" text2={t("statistics.products")} />
            <StatisticsElement text1=">800" text2={t("statistics.suppliers")} />
          </div>
        </div>
      </div>
    </section>
  );
}
