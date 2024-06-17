import { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import { Roboto_Mono } from "next/font/google";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "./styles.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico' // /public path
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoMono.className}>
      <body>
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
