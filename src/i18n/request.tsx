import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Can be imported from a shared config
export const locales = ["ar", "en"] as const;
export const defaultLocale = "ar" as const;

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale is a Promise, so we need to await it
  const locale = await requestLocale;

  console.log("locale", locale);

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

// Utility function to check if locale is RTL
export function isRTL(locale: string): boolean {
  return locale === "ar";
}

// Utility function to get text direction
export function getDirection(locale: string): "rtl" | "ltr" {
  return isRTL(locale) ? "rtl" : "ltr";
}