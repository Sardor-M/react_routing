import { Story } from "@storybook/react";
import CardList from "./CardList";

export default {
  title: "organisms/CardList",
  component: CardList,
};

const Template: Story = (args: any) => <CardList {...args} />;

export const Default = Template.bind({});
