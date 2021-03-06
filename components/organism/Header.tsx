const Header = () => {
	return (
		<header className='my-14 px-5'>
			<h1 className='gradient-text text-[50px] leading-[60px] font-light mb-3'>Cardano’s Yield Aggregator</h1>
			<div className='text-base font-light mb-5'>Optim Finance is a suite of products in DeFi that is designed to generate yield on Cardano’s smart contract.</div>
			<div className='bg-optim-dark rounded-sm mb-2'>
				<input id="optim-email-input" type='text' placeholder='Enter your email'
					className='h-12 px-5 text-white text-opacity-60 w-full bg-transparent focus-within:outline-none focus:border' />
			</div>
			<button className='bg-white text-black w-full border-none rounded-sm py-3 font-medium active:relative active:top-[1px]'>
				Get notified
			</button>
		</header>
	);
};

export default Header;
