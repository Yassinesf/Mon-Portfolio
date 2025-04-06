import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import ReduxProvider from "@/components/redux-provider";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const publicRoutes = ["/login", "/signup"];

function AppContent({ Component, pageProps }) {
  const router = useRouter();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!publicRoutes.includes(router.pathname) && !currentUser) {
      router.push("/login");
    }
  }, [router.pathname, currentUser]);

  return (
    <>
      <Head>
        <title>YASSINE SF | Portfolio</title>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <div className="App">
        <NavBar />
        <ScrollToTop />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default function App(props) {
  return (
    <ReduxProvider>
      <AppContent {...props} />
    </ReduxProvider>
  );
}

