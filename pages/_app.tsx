import type { AppProps } from "next/app";
import "../styles/app.css";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
      <p className="text-xs text-center font-thin	">*Data collected from Indeed.com*</p>
    </ThemeProvider>
  );
}

export default MyApp;
