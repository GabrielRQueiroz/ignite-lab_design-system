import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export interface HeadingProps {
	children: React.ReactNode;
	size?: 'sm' | 'md' | 'lg';
	asChild?: boolean;
}

export const Heading = ({ size = 'md', asChild, children }: HeadingProps) => {
	const Element = asChild ? Slot : 'h2';

	return (
		<Element
			className={clsx('text-gray-100 font-bold font-sans', {
				'text-lg': size === 'sm',
				'text-xl': size === 'md',
				'text-xxl': size === 'lg',
			})}
		>
			{children}
		</Element>
	);
};
