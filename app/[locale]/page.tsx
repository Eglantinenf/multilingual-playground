"use client";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 p-8">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        <LanguageSwitcher />
        <h1 className="text-3xl font-extrabold mt-6 mb-4 text-blue-600">
          {t("title")}
        </h1>
        <p className="text-lg leading-relaxed">{t("description")}</p>
      </div>
    </div>
  );
}
