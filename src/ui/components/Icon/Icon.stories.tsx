import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon } from ".";

export default {
  title: "Component/Icon",
  component: Icon,
  args: {
    ...Icon.defaultProps,
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Base = Template.bind({});
Base.args = {
  name: "twitter",
};
