import "../styles/globals.scss";
import type { AppProps } from "next/app";
import BottomNavigation from "@module/router/BottomNavigation";
import { ThemeProvider } from "@mui/system";
import { theme } from "../styles/theme";
import { useStorageItem } from "@capacitor-community/storage-react";
import { CapacitorStorageKeys } from "../common/capacitor-storage-keys";
import Intro from "../modules/intro/Intro";

export default function MyApp({ Component, pageProps }: AppProps) {
  const INITIAL_FIRST_START_VALUE = true;

  const [isFirstStart] = useStorageItem(
    CapacitorStorageKeys.IS_FIRST_START,
    INITIAL_FIRST_START_VALUE
  );

  if (isFirstStart) {
    return (
      <ThemeProvider theme={theme}>
        <Intro />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <BottomNavigation />
    </ThemeProvider>
  );
}
