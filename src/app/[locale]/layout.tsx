import { Navbar } from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { Footer } from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Protótipo",
  description:
    "Funcionalidade trilíngue utilizando next-intl – Internationalization (i18n) para Next.js",
};
interface LayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: LayoutProps) {
  const messages = await getMessages();
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true">
        <NextIntlClientProvider messages={messages}>
          <Navbar />

          {children}

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
