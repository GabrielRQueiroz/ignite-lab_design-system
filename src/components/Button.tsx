import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	asChild?: boolean;
}

export const Button = ({ asChild, children, className, ...props }: ButtonProps) => {
	const Element = asChild ? Slot : 'button';

	return (
		<Element className={clsx('py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 focus:ring-2 ring-white', className)} {...props}>
			{children}
		</Element>
	);
};
