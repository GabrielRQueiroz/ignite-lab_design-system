import axios from 'axios';
import { Envelope, Lock } from 'phosphor-react';
import { useState } from 'react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Logo } from '../Logo';

export const SignIn = () => {
	const [isUserSignedIn, setIsUserSignedIn] = useState(false);

	const handleSignIn = (event: React.FormEvent) => {
		event.preventDefault();

		axios
			.post('/session', {
				email: 'foo@bar.com',
				password: '123456',
			})
			.then(() => {
				setIsUserSignedIn(true);
			});
	};

	return (
		<div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100 '>
			<div className='flex flex-col items-center'>
				<Logo />
				<Heading size='lg' className='mt-4'>
					Ignite Lab
				</Heading>
				<Text size='lg' className='text-gray-400 mt-1'>
					Faça login e comece a usar
				</Text>
			</div>
			<form onSubmit={handleSignIn} action='submit' className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10'>
				{isUserSignedIn && <Text>Login realizado!</Text>}

				<label htmlFor='email' className='flex flex-col gap-3'>
					<Text className='font-semibold'>Endereço de e-mail:</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Envelope />
						</TextInput.Icon>
						<TextInput.Input id='email' type='email' placeholder='Digite seu e-mail' />
					</TextInput.Root>
				</label>

				<label htmlFor='password' className='flex flex-col gap-3'>
					<Text className='font-semibold'>Sua senha:</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Lock />
						</TextInput.Icon>
						<TextInput.Input id='password' type='password' placeholder='********' />
					</TextInput.Root>
				</label>

				<label htmlFor='remember' className='flex items-center gap-2'>
					<Checkbox id='remember' />
					<Text size='sm' className='text-gray-200'>
						Lembrar de mim por 30 dias
					</Text>
				</label>

				<Button type='submit' className='mt-4'>
					Entrar na plataforma
				</Button>
			</form>

			<footer className='flex flex-col items-center gap-4 mt-8'>
				<Text asChild size='sm'>
					<a href='' className='text-gray-400 underline text-sm hover:text-gray-200'>
						Esqueceu sua senha?
					</a>
				</Text>
				<Text asChild size='sm'>
					<a href='' className='text-gray-400 underline text-sm hover:text-gray-200'>
						Não possui conta? Crie uma agora!
					</a>
				</Text>
			</footer>
		</div>
	);
};
