import { Tab } from "./models/tab";

export const tabItems: Tab[] = [
  {
    path: "home",
    redirectTo: "home",
    label: "navigation.tabs.home",
    icon: "fi fi-rr-home",
  },
  {
    path: "medications",
    redirectTo: "medications",
    label: "navigation.tabs.medications",
    icon: "fi fi-rr-medicine",
  },
  {
    path: "cookbook",
    redirectTo: "cookbook",
    label: "navigation.tabs.cookbook",
    icon: "fi fi-rr-carrot",
  },
  {
    path: "settings",
    redirectTo: "settings",
    label: "navigation.tabs.settings",
    icon: "fi fi-rr-settings-sliders",
  },
];
