import type {Metadata} from "next";

import {louisGeorgeCafe} from "@/app/_fonts";

// TODO: Only import login page CSS.
import "../../../styles/index.css";

export const metadata: Metadata = {
  title: "Absencia",
  description: "Login page",
  applicationName: "Absencia",
};

export default function Layout({children}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${louisGeorgeCafe.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="app">
          <main className="main">
            <div className="container">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}