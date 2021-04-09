import React from 'react'

//components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TopArtists from '../components/TopArtists'

const Landing: React.FC = () => {
    return(
        <div className="space-y-4 overflow-auto h-screen w-screen bg-gray-900">
			<Navbar />            
        	<Hero />
        	<TopArtists />
        </div>
    )
}

export default Landing