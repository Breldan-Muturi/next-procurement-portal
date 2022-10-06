import React, { useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";
import { Amplify } from "@aws-amplify/core";
import awsconfig from "../aws-exports";
import AuthContext from "../context/AuthContext";
import Sidebar from "../components/sidebar";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Header from "../components/header";

Amplify.configure({ ...awsconfig, ssr: true });

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Procurement Portal</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AuthContext>
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex" }}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {router.pathname !== "/authenticate" && <Sidebar />}
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
              }}
            >
              {router.pathname !== "/authenticate" && <Header />}
              <Component {...pageProps} />
            </Box>
          </Box>
        </ThemeProvider>
      </AuthContext>
    </CacheProvider>
  );
}
