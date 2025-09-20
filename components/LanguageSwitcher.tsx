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
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {locale === "en" ? "فارسی" : "English"}
    </button>
  );
}
