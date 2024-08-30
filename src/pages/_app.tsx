import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import { I18nProvider } from "@/locales";

const App = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <NextThemesProvider>
      <I18nProvider locale={pageProps.locale}>
        <Component {...pageProps} />
      </I18nProvider>
    </NextThemesProvider>
  </NextUIProvider>
);

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};

export default App;