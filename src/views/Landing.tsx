import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Landing: React.FC = () => {
    return(
        <div className="space-y-4 h-screen w-screen bg-gray-900">
			<Navbar />            
        	<Hero />
        </div>
    )
}

export default Landing