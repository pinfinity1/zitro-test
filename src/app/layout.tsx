import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zitro",
  description: "Zitro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`font-iranyekan antialiased`}>
        <Header />
        <main className={"w-full flex-grow"}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
