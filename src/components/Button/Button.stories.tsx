import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		primary: true,
		disabled: false,
		text: "Primary",
	},
};

export const Secondary: Story = {
	args: {
		primary: false,
		disabled: false,
		text: "Secondary",
	},
};

export const Disabled: Story = {
	args: {
		primary: false,
		disabled: true,
		text: "Disabled",
	},
};

export const Small: Story = {
	args: {
		...Primary,
		size: "small",
		text: "Small",
	},
};

export const Medium: Story = {
	args: {
		...Small,
		size: "medium",
		text: "Medium",
	},
};

export const Large: Story = {
	args: {
		...Small,
		size: "large",
		text: "Large",
	},
};
