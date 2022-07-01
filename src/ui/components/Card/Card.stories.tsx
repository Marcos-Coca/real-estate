import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from ".";

export default {
  title: "Component/Card",
  component: Card,
  args: {
    isShaded: true,
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Base = Template.bind({});
Base.args = {
  isShaded: true,
};
