import React from 'react'

import eth from '../assets/eth.svg'

const hero = {
	header: `Buidl a vybe.`,
	para: `Connecting digital assets with the physical world`
}

const Hero: React.FC = () => {
	return(
		<section className="flex items-center justify-between px-8 py-4 lg:px-32 space-y-4 lg:space-y-8" style={{fontFamily:"'PT Mono', monospace"}}>
			<div className="space-y-4 lg:space-y-8">
				<div className="space-y-2">
					<h1 className="font-bold text-center sm:text-left text-transparent text-3xl lg:text-5xl font-mono bg-clip-text bg-gradient-to-bl from-cyan-300 to-fuchsia-500">
						{hero.header}
					</h1>
					<p className="text-transparent lg:text-left bg-clip-text bg-gradient-to-bl from-teal-300 to-violet-500 text-center text-lg opacity-85">
						{hero.para}
					</p>
				</div>
				<div className="flex justify-center lg:justify-start">
					<button className="p-2 rounded-md bg-gradient-to-bl from-purple-700 to-cyan-700 text-gray-100">Start Vybing</button>
				</div>
			</div>
			<div>
				<img src={eth} className="h-64"/>
			</div>
		</section>
	)
}

export default Hero