import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export interface ButtonProps {
	children: React.ReactNode;
	asChild?: boolean;
}

export const Button = ({ asChild, children }: ButtonProps) => {
	const Element = asChild ? Slot : 'button';

	return <Element className={clsx('py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 focus:ring-2 ring-white')}>{children}</Element>;
};