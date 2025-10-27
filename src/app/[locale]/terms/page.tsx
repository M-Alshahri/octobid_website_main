import { getTranslations } from "next-intl/server";

export default async function TermsAndConditions() {
  const t = await getTranslations("terms");
  return (
    <div className="min-h-screen bg-white font-poppins text-[#161C2D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            {t("title")}
          </h1>
          <p className="text-lg  leading-relaxed max-w-3xl mx-auto">
            {t("headerDescription")}
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-8">
            <p className=" leading-relaxed mb-6">
              {t("introduction.paragraph1")}
            </p>

            <p className=" leading-relaxed">{t("introduction.paragraph2")}</p>
          </div>

          {/* License Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-poppins">
              {t("license.title")}
            </h2>
            <p className=" leading-relaxed mb-4">{t("license.paragraph1")}</p>
            <p className=" leading-relaxed">{t("license.paragraph2")}</p>
          </div>

          {/* User Responsibilities Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-poppins">
              {t("userResponsibilities.title")}
            </h2>
            <ul className="space-y-4 list-disc list-inside">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#161C2D] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold">
                    {t("userResponsibilities.suppliers.label")}
                  </span>
                  <span className=" ml-1">
                    {t("userResponsibilities.suppliers.description")}
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#161C2D] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold">
                    {t("userResponsibilities.affiliates.label")}
                  </span>
                  <span className=" ml-1">
                    {t("userResponsibilities.affiliates.description")}
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#161C2D] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold">
                    {t("userResponsibilities.allUsers.label")}
                  </span>
                  <span className=" ml-1">
                    {t("userResponsibilities.allUsers.description")}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Changes About Terms Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-poppins">
              {t("changes.title")}
            </h2>
            <p className=" leading-relaxed">{t("changes.description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
