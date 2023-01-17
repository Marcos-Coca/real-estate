import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "./Grid";
import { GridItem } from "./GridItem";

import styles from "./Grid.stories.module.css";

export default {
  title: "Layout/Grid",
  component: Grid,
  argTypes: {
    col: {
      control: { type: "range", min: 1, max: 12 },
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = ({ col, customGridItems, ...args }: any) => {
  const gridItems = customGridItems || new Array(12).fill(col).map((col) => ({ col }));

  return (
    <Grid {...args}>
      {gridItems.map((item: any, index: number) => (
        <GridItem key={index} {...item}>
          <div className={styles.gridItem}>{index + 1}</div>
        </GridItem>
      ))}
    </Grid>
  );
};

export const Columns = Template.bind({});
Columns.args = {
  col: 1,
} as any;
