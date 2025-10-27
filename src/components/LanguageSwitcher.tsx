"use client";

import { locales } from "@/i18n/request";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaGlobe } from "react-icons/fa";

const languageNames = {
  ar: "العربية",
  en: "English",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Switch language"
      >
        <FaGlobe className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {languageNames[locale as keyof typeof languageNames]}
        </span>
        <FaChevronDown
          className={`w-3 h-3 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[120px]">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLanguage(loc)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                  locale === loc
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                {languageNames[loc as keyof typeof languageNames]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
