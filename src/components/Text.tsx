import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export interface TextProps {
	children: React.ReactNode;
	size?: 'sm' | 'md' | 'lg';
	className?: string;
	asChild?: boolean;
}

export const Text = ({ size = 'md', asChild, children, className }: TextProps) => {
	const Element = asChild ? Slot : 'span';

	return (
		<Element
			className={clsx(
				'text-gray-100 font-sans',
				{
					'text-xs': size === 'sm',
					'text-sm': size === 'md',
					'text-md': size === 'lg',
				},
				className
			)}
		>
			{children}
		</Element>
	);
};
