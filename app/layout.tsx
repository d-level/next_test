import type {Metadata} from "next";
import {Quicksand} from "next/font/google";

import "../styles/index.css";

const quicksand = Quicksand({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Absencia",
  description: "Absence request app",
  applicationName: "Absencia",
};

export default function Layout({children}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${quicksand.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}