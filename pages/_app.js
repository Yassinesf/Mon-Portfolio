import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import ReduxProvider from "@/components/redux-provider";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReduxProvider>
      <Head>
        <title>YASSINE SF | Portfolio</title>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ReduxProvider>
  );
}
