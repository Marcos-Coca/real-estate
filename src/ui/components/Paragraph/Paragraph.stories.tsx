import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Paragraph, options } from ".";
import { getListTemplate } from "../../utils/storybook";

export default {
  title: "Component/Paragraph",
  component: Paragraph,
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor feugiat lectus id auctor. Sed nec lacinia lacus, iaculis dictum purus. Vestibulum augue justo, efficitur sit amet odio sed, vestibulum ullamcorper dui. Mauris malesuada auctor luctus. Phasellus eu nisl ut libero suscipit facilisis. Nam congue tellus eget dolor volutpat, a sodales quam laoreet.",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;
const ListTemplate = getListTemplate<typeof Paragraph>(Paragraph);

export const Base = Template.bind({});

export const Sizes = ListTemplate.bind({});
Sizes.args = { items: options.sizes.map((size) => ({ size })) };
