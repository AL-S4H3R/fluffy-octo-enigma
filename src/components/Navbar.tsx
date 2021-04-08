import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar: React.FC = () => {

	const [dropdown, setDropdown] = React.useState(true)

	return(
		<nav style={{fontFamily:"'Cairo', sans-serif"}} className="space-y-4">
			<div className="flex items-center justify-between">
				<h1 className="text-transparent tracking-wider bg-clip-text bg-gradient-to-br from-cyan-300 to-fuchsia-500 font-bold text-3xl">
					vybe
				</h1>
				<div>
					<p className="text-violet-700 opacity-90 font-bold text-lg">
						<FontAwesomeIcon 
							icon={faBars}
							onClick={() => setDropdown(!dropdown)}
						/>
					</p>
				</div>
			</div>
			{
				dropdown && <Dropdown />
			}
		</nav>
	)
}

const Dropdown: React.FC = () => {
	return(
		<div className="space-y-2 transition duration-150 text-lg text-transparent tracking-wider bg-clip-text bg-gradient-to-tl from-cyan-300 to-fuchsia-500 font-bold">
			<p className="text-center">Login</p>
			<p className="text-center">Blog</p>
			<p className="text-center">Artists</p>
		</div>
	)
}

export default Navbar