"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function NotificationBar() {
  const t = useTranslations("notificationBar");
  const [isVisible, setIsVisible] = useState(true);

  // Check if notification bar should be shown
  const isEnabled = t("enabled") === "true";

  if (!isEnabled || !isVisible) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-[#284A9A] to-[#3B5BA5] text-white py-3 px-4 sm:px-6 lg:px-8 text-center font-geist-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-xs sm:text-sm md:text-base font-medium pr-8 sm:pr-10 leading-relaxed">
          {t("message")}
        </p>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 hover:bg-white/10 rounded-full p-1.5 transition-colors flex-shrink-0"
          aria-label="Close notification"
        >
          <IoClose className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
