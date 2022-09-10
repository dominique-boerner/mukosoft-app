export type IconFeature =
  | "medication"
  | "deleteMedication"
  | "add"
  | "settings"
  | "home";

export const MukoSoftIcons: Record<IconFeature, string> = {
  add: "fi fi-rr-plus",
  medication: "fi fi-rr-medicine",
  deleteMedication: "fi fi-rr-trash",
  home: "fi fi-rr-home",
  settings: "fi fi-rr-settings-sliders",
};
