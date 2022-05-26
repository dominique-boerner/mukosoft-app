import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Community from "./Community";

export default {
  title: "Community/Community",
  component: Community,
} as ComponentMeta<typeof Community>;

const Template: ComponentStory<typeof Community> = (args) => (
  <Community {...args} />
);

export const Default = Template.bind({});
