import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CommunityCard from "./CommunityCard";

export default {
  title: "Community/CommunityCard",
  component: CommunityCard,
} as ComponentMeta<typeof CommunityCard>;

const Template: ComponentStory<typeof CommunityCard> = (args) => (
  <CommunityCard {...args} />
);

export const Favourite = Template.bind({});
Favourite.args = {
  name: "Foo",
  location: "Test",
  image: "https://picsum.photos/1000/1000",
  id: "1",
  isFavourite: true,
  onFavouriteClick: () => {},
};

export const NotFavourite = Template.bind({});
NotFavourite.args = {
  name: "Foo",
  location: "Test",
  image: "https://picsum.photos/1000/1000",
  id: "1",
  isFavourite: false,
  onFavouriteClick: () => {},
};
