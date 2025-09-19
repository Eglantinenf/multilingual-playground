import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
