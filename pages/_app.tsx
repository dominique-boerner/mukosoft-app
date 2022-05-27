import "../styles/globals.scss";
import type { AppProps } from "next/app";
import BottomNavigation from "@module/router/BottomNavigation";
import { ThemeProvider } from "@mui/system";
import { theme } from "../styles/theme";
import { useStorageItem } from "@capacitor-community/storage-react";
import { CapacitorStorageKeys } from "../common/capacitor-storage-keys";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isFirstStart, setIsFirstStart] = useStorageItem(
    CapacitorStorageKeys.IS_FIRST_START,
    ""
  );

  console.log(isFirstStart)

  if (isFirstStart === undefined) {
    return <span>Foo</span>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <BottomNavigation />
      </ThemeProvider>
    );
  }
}
