import React from 'react'


const hero = {
	header: `Buidl a vybe.`,
	para: `Vybe is a community enabling artists to express themselves through NFT's`
}

const Hero: React.FC = () => {
	return(
		<section className="px-8 py-4 lg:px-16 space-y-4" style={{fontFamily:"'Noto Sans', sans-serif"}}>
			<h1 className="font-bold text-center text-transparent text-3xl font-mono bg-clip-text bg-gradient-to-bl from-cyan-300 to-fuchsia-500">
				{hero.header}
			</h1>
			<p className="text-transparent bg-clip-text bg-gradient-to-bl from-cyan-300 to-fuchsia-500 text-center text-lg opacity-85">
				{hero.para}
			</p>
			<div className="flex justify-center">
				<button className="p-2 rounded-md bg-fuchsia-900 text-gray-100">Start Vybing</button>
			</div>
		</section>
	)
}

export default Hero