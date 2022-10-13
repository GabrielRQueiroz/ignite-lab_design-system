import './styles/global.css';1

export const App = () => {
	return (
		<>
			<h1 className='font-bold text-5xl text-violet-500'>Hello, universe</h1>
			<button type='button' className='bg-cyan-500 font-semibold px-4 py-2 rounded text-white hover:bg-cyan-300'>
				Enviar
			</button>
		</>
	);
};
