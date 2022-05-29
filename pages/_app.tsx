import "../styles/globals.scss";
import type { AppProps } from "next/app";
import BottomNavigation from "../modules/bottomNavigation/BottomNavigation";
import { Box, ThemeProvider } from "@mui/system";
import { theme } from "../common/theme/theme";
import { useStorageItem } from "@capacitor-community/storage-react";
import { CapacitorStorageKeys } from "../common/capacitor-storage-keys";
import Intro from "../modules/intro/Intro";
import { CircularProgress } from "@mui/material";

export default function MyApp({ Component, pageProps }: AppProps) {
  const INITIAL_FIRST_START_VALUE = true;

  const [isFirstStart] = useStorageItem(
    CapacitorStorageKeys.IS_FIRST_START,
    INITIAL_FIRST_START_VALUE
  );

  if (isFirstStart === undefined) {
    return (
      <ThemeProvider theme={theme}>
        <Box className="flex h-screen w-screen justify-center items-center">
          <CircularProgress color="secondary" size="4rem" />
        </Box>
      </ThemeProvider>
    );
  }

  if (JSON.parse(String(isFirstStart)) === true) {
    return (
      <ThemeProvider theme={theme}>
        <Intro />
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <BottomNavigation />
      </ThemeProvider>
    );
  }
}
