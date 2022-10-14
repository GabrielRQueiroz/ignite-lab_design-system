import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { rest } from 'msw';
import { SignIn } from './SignIn';

export default {
	title: 'Pages/SignIn',
	component: SignIn,
	parameters: {
		msw: {
			handlers: [
				rest.post('/session', (req, res, ctx) => {
					return res(ctx.status(200));
				}),
			],
		},
	},
} as Meta;

export const Default: StoryObj = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		userEvent.type(canvas.getByLabelText('Endereço de e-mail:'), 'foo@bar.com');
		userEvent.type(canvas.getByLabelText('Sua senha:'), '123456');
		userEvent.click(canvas.getByRole('checkbox'));
		userEvent.click(canvas.getByRole('button'));

		await waitFor(() => {
			expect(canvas.getByText('Login realizado!')).toBeInTheDocument();
		});
	},
};
