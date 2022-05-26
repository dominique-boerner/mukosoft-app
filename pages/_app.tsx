import "../styles/globals.scss";
import type { AppProps } from "next/app";
import BottomNavigation from "@module/router/BottomNavigation";
import { ThemeProvider } from "@mui/system";
import { theme } from "../styles/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <BottomNavigation />
    </ThemeProvider>
  );
}