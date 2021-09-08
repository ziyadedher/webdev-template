import { Meta, Story } from "@storybook/react";

import Index from "../pages/index";

export default {
  title: "Pages/Index",
  component: Index,
} as Meta;

export const Default: Story = () => <Index />;
Default.storyName = "Index";
