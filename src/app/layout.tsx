import "../styles/globals.css";
import "../styles/tokens.css";

// import Footer from "./footer";
import { Header } from "./components/Header";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
