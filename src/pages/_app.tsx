import "../styles/globals.css";
import "../styles/tokens.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="pageContainer">
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
