import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fa"],
  defaultLocale: "en",
  localeDetection: false,
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
