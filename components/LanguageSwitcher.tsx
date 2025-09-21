"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.startsWith("/fa") ? "fa" : "en";

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "fa" : "en";
    const newPath = `/${newLocale}${pathname.replace(/^\/(en|fa)/, "")}`;
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLocale}
      className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
    >
      {locale === "en" ? "فارسی" : "English"}
    </button>
  );
}
