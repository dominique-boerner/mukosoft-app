import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Cookbook from "./Cookbook";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../../../common/theme/theme";

export default {
  title: "Cookbook/Page",
  component: Cookbook,
} as ComponentMeta<typeof Cookbook>;

const Template: ComponentStory<typeof Cookbook> = () => (
  <ThemeProvider theme={theme}>
    <Cookbook />
  </ThemeProvider>
);

export const Default = Template.bind({});
