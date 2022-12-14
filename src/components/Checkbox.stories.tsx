import { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
	title: 'Components/Checkbox',
	component: Checkbox,
	args: {},
	argTypes: {},
	decorators: [
		() => (
			<label htmlFor='remember' className='flex items-center gap-2'>
				<Checkbox id='remember' />
				<Text size='sm'>Lembrar de mim por 30 dias.</Text>
			</label>
		),
	],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
