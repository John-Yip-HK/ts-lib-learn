import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta: Meta<typeof Input> = {
	title: "Input",
	component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
	args: {
		error: false,
		disabled: false,
		label: "Primary",
	},
};

export const Success: Story = {
	args: {
		error: false,
		success: true,
		disabled: false,
		label: "Success",
	},
};

export const Error: Story = {
	args: {
		error: true,
		disabled: false,
		message: "Error",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		label: "Disabled",
	},
};
