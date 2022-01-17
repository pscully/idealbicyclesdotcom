import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics";
import { ThemeProvider } from "util/theme";
import { QueryClientProvider } from "util/db";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <>
          <Navbar
            color="default"
            logo="https://uploads.divjoy.com/logo.svg"
            logoInverted="https://uploads.divjoy.com/logo-white.svg"
          />

          <Component {...pageProps} />

          <Footer
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright={`© ${new Date().getFullYear()} Company`}
            logo="https://uploads.divjoy.com/logo.svg"
            logoInverted="https://uploads.divjoy.com/logo-white.svg"
            sticky={true}
          />
        </>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
