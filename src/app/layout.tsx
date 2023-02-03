import "../styles/globals.css";
import "../styles/tokens.css";

import Footer from "./footer";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
