export type HomeSelectorIdentifier =
  | "avatarImage"
  | "greetingTitle"
  | "greetingSubtitle"
  | "medication"
  | "medicationTitle";

export const home: Record<HomeSelectorIdentifier, string> = {
  avatarImage: "[data-cy=home-user-avatar]",
  greetingTitle: "[data-cy=home-greeting-title]",
  greetingSubtitle: "[data-cy=home-greeting-subtitle]",
  medicationTitle: "[data-cy=home-medication-title]",
  medication: "[data-cy=home-medication]",
};
