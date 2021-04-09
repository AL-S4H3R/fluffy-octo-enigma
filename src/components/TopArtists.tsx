import React from 'react'
import { data } from '../data/data.js'

const TopArtists: React.FC = () => {
	return(
		<div className="px-8 py-5 lg:px-16 w-screen overflow-x-auto" style={{fontFamily:"'Cairo', sans-serif"}}>
			<h1 className="text-transparent tracking-wider bg-clip-text bg-gradient-to-tl from-teal-300 to-fuchsia-500 font-bold text-lg">
				Top Artists :
			</h1>
		</div>
	)
}

export default TopArtists