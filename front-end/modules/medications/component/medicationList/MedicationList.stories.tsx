import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { MedicationList } from "@module/medications/component/medicationList/MedicationList";
import { theme } from "@core/theme/theme";

export default {
  title: "Medication/MedicationList",
  component: MedicationList,
} as ComponentMeta<typeof MedicationList>;

const Template: ComponentStory<typeof MedicationList> = () => (
  <ThemeProvider theme={theme}>
    <MedicationList />
  </ThemeProvider>
);

export const Default = Template.bind({});
