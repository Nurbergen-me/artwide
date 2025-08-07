import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {Suspense} from "react";
import {AuthModalProvider} from "@/components/AuthModalManager";

export const metadata: Metadata = {
  title: "ARTWIDE - Discover, buy and sell great art",
  description: "Discover great art. Browse our auctions or contact our experienced Artwide experts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthModalProvider>
          <Suspense fallback={<div>Loading header</div>}>
            <Header />
          </Suspense>
          {children}
          <Footer />
        </AuthModalProvider>
      </body>
    </html>
  );
}
