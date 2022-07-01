import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Heading } from ".";

export default {
  title: "Component/Heading",
  component: Heading,
  args: {
    size: "md",
    color: "base",
    weight: "bold",
    isShaded: false,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet suscipit ex. Proin scelerisque dapibus commodo. Maecenas mollis lacus eu sem venenatis blandit",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
    color: {
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Base = Template.bind({});
Base.args = {};
