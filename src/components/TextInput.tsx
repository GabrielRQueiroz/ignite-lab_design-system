import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
	children: React.ReactNode;
}

export interface TextInputIconProps {
	children: React.ReactNode;
}

export interface TextInputInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInputRoot = ({ children }: TextInputRootProps) => {
	return <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>{children}</div>;
};

const TextInputIcon = ({ children }: TextInputIconProps) => {
	return <Slot className='w-6 h-6 text-gray-400'>{children}</Slot>;
};

const TextInputInput = (props: TextInputInputProps) => {
	return <input {...props} className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none' />;
};

TextInputRoot.displayName = 'TextInput.Root';
TextInputIcon.displayName = 'TextInput.Icon';
TextInputInput.displayName = 'TextInput.Input';

export const TextInput = { Root: TextInputRoot, Icon: TextInputIcon, Input: TextInputInput };
