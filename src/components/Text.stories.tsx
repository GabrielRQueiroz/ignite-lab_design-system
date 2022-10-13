import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from './Text';

export default {
	title: 'Components/Text',
	component: Text,
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
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
	args: {
		size: 'sm',
	},
};

export const Large: StoryObj<TextProps> = {
	args: {
		size: 'lg',
	},
};

export const CustomComponent: StoryObj<TextProps> = {
	args: {
		asChild: true,
		children: (
			<a href='https://robertonto.netlify.app/' rel='noopener' target='_blank'>
				Click me to see my webpage :D
			</a>
		),
	},
	argTypes: {
		children: {
			table: { disable: true },
		},
	},
};
