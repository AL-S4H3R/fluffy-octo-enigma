import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar: React.FC = () => {

	const [dropdown, setDropdown] = React.useState(false)

	return(
		<nav style={{fontFamily:"'Cairo', sans-serif"}} className="space-y-4 shadow-md px-8 py-4 lg:px-24">
			<div className="flex items-center justify-between">
				<h1 className="text-transparent tracking-wider bg-clip-text bg-gradient-to-br from-cyan-300 to-fuchsia-500 font-bold text-3xl">
					vybe
				</h1>
				<div className="sm:hidden p-2">
					<p className="font-bold text-lg">
						<FontAwesomeIcon 
							icon={dropdown ? faTimes : faBars}
							onClick={() => setDropdown(!dropdown)}
							className="cursor-pointer text-purple-200"
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

	const navs = [
		{
			title: 'Login',
			path: '/'
		},
		{
			title: 'Blog',
			path: '/'
		},
		{
			title: 'Artists',
			path: '/'
		},
		{
			title: 'Wallet',
			path: '/'
		}
	]

	return(
		<div className="space-y-2 transition ease-out duration-150 text-lg text-transparent tracking-wider bg-clip-text bg-gradient-to-tl from-cyan-300 to-fuchsia-500 font-bold">
			{
				navs.map((nav) => {
					return(
						<p className="text-center">{nav.title}</p>
					)
				})
			}
		</div>
	)
}

export default Navbar