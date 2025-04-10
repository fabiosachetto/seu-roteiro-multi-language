import { Navbar } from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import "./../globals.css";
import { ReactNode } from "react";
import { Footer } from "@/components/Footer/Footer";

const openSans = localFont({
  src: "./../fonts/OpenSans-Regular.ttf",
});
const stella = localFont({
  src: "./../fonts/Stella.ttf",
});
export const metadata: Metadata = {
  title: "Seu Roteiro em Paraty",
  description: "Seu Passeio Garantido em Paraty",
};
interface LayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: LayoutProps) {
  const messages = await getMessages();
  return (
    <html lang="pt-BR">
      <body className={`${openSans} ${stella}`} cz-shortcut-listen="false">
        <main className="mt-32 sm:mt-32 relative">
          <NextIntlClientProvider messages={messages}>
            <Navbar />

            {children}

            <Footer />
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
