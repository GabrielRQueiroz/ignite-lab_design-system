import { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
	title: 'Components/Heading',
	component: Heading,
	args: {
		children: 'Hello, universe',
	},
	argTypes: {
		asChild: {
			table: { disable: true },
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: { type: 'inline-radio' },
		},
	},
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
	args: {
		size: 'sm',
	},
};

export const Large: StoryObj<HeadingProps> = {
	args: {
		size: 'lg',
	},
};

export const CustomComponent: StoryObj<HeadingProps> = {
	args: {
		asChild: true,
		children: <h1>I am a bolder heading 😎</h1>,
	},
	argTypes: {
		children: {
			table: { disable: true },
		},
	},
};
