import { Story } from "@storybook/react";
import MainTemplate from "./MainTemplate";

export default {
  title: "Templates/MainTemplate",
  component: MainTemplate,
};

const Template: Story = (args: any) => (
  <MainTemplate {...args}>Content goes here</MainTemplate>
);

export const Default = Template.bind({});
