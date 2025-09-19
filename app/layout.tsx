import "./globals.css";
import { IntlProvider } from "next-intl";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

async function getMessages(locale: string) {
  if (locale === "fa") {
    return (await import("../locales/fa.json")).default;
  }
  return (await import("../locales/en.json")).default;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const messages = await getMessages(params.locale);

  return (
    <html lang={params.locale} dir={params.locale === "fa" ? "rtl" : "ltr"}>
      <body>
        <IntlProvider locale={params.locale} messages={messages}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
