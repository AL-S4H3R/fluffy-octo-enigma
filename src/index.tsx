import React from 'react'
import { render } from 'react-dom'
import './index.css'
import Landing from './views/Landing'

const App: React.FC = () => {
  return(
    <>
    	<style>
			@import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');
		</style>
    	<Landing />
    </>
  )
}

const root = document.getElementById('root')

render(<App />, root)