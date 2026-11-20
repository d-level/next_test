import type {Metadata} from "next";
import {Satisfy} from "next/font/google";
import localFont from "next/font/local";

import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";

import "../../styles/index.css";

const louisGeorgeCafe = localFont({
  src: [
    {
      path: "../../public/fonts/Louis George Cafe Light.ttf",
      style: "normal",
      weight: "200",
    },
    {
      path: "../../public/fonts/Louis George Cafe.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/Louis George Cafe Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../../public/fonts/Louis George Cafe Light Italic.ttf",
      style: "italic",
      weight: "200",
    },
    {
      path: "../../public/fonts/Louis George Cafe Italic.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "../../public/fonts/Louis George Cafe Bold Italic.ttf",
      style: "italic",
      weight: "700",
    },
  ],
});

const satisfy = Satisfy({
  weight: "400",
});

export const metadata: Metadata = {
  title: "Absencia",
  description: "Absence request app",
  applicationName: "Absencia",
};

export default function Layout({children}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${louisGeorgeCafe.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="app">
          <Header logoFontClassName={satisfy.className} />

          <main className="main">
            <div className="container">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}