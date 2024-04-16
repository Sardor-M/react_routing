import Button from "./Button";
import { Story } from "@storybook/react";

export default {
  title: "atoms/Button",
  component: Button,
};

const Template: Story = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => alert("You clicked me!"),
};
