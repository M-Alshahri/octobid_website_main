import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import Feature from "../UserSection/Feature";

export default async function SupplierSection() {
  const t = await getTranslations("supplierSection");
  return (
    <section id="supplier" className="bg-white font-poppins ">
      <div className="flex flex-col sm:flex-row items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-24 ">
        {/* Left Content */}

        <div className="space-y-8 ">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 pr-2 bg-white rounded-full mt-12 border border-[#E9EDF8]">
            <FaUserCircle className="w-8 h-8 text-[#284A9A]" />
            <span className="text-black font-semibold text-sm">
              {t("badge")}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-black leading-tight">
              {t("title")}
            </h2>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <Feature
              image="/images/signup.png"
              title={t("features.showcase.title")}
              description={t("features.showcase.description")}
            />
            <Feature
              image="/images/manage_products.png"
              title={t("features.manage.title")}
              description={t("features.manage.description")}
            />
            <Feature
              image="/images/package.png"
              title={t("features.connect.title")}
              description={t("features.connect.description")}
            />
            <Feature
              image="/images/dashboard.png"
              title={t("features.analytics.title")}
              description={t("features.analytics.description")}
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
