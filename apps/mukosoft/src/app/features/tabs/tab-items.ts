import { Tab } from "./models/tab";
import { MukoSoftIcons } from "../../../theme/icons";

export const tabItems: Tab[] = [
  {
    path: "home",
    redirectTo: "home",
    label: "navigation.tabs.home",
    icon: MukoSoftIcons.home,
  },
  {
    path: "medications",
    redirectTo: "medications",
    label: "navigation.tabs.medications",
    icon: MukoSoftIcons.medication,
  },
  // {
  //   path: "cookbook",
  //   redirectTo: "cookbook",
  //   label: "navigation.tabs.cookbook",
  //   icon: "fi fi-rr-carrot",
  // },
  {
    path: "settings",
    redirectTo: "settings",
    label: "navigation.tabs.settings",
    icon: MukoSoftIcons.settings,
  },
];
