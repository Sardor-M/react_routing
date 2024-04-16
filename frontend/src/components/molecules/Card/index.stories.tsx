import Card from "./Card";
import { Story } from "@storybook/react";

export default {
  title: "molecules/Card",
  component: Card,
};

const Template: Story = (args: any) => <Card {...args}></Card>;

export const Default = Template.bind({});

Default.args = {
  title: "Card",
};
