import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import "../../globals.css";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!locale) {
    notFound();
  }

  let messages;
  try {
    messages = await import(`../../locales/${locale}.json`).then(
      (m) => m.default
    );
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
