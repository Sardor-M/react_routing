import React from "react";
import { Story } from "@storybook/react";
import HomePageHere from "./HomePageHere";

export default {
  title: "Pages/HomePage",
  component: HomePageHere,
};

const Template: Story = (args) => <HomePageHere {...args} />;

export const Default = Template.bind({});
