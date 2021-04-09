import React from 'react'
import { render } from 'react-dom'
import './index.css'
import Landing from './views/Landing'

const App: React.FC = () => {
  return(
    <React.Fragment>
    	<style>
			@import url('https://fonts.googleapis.com/css2?family=Cairo&family=Noto+Sans:ital@0;1&family=PT+Mono&display=swap');
		</style>  
    	<Landing />
    </React.Fragment>
  )
}

const root = document.getElementById('root')

render(<App />, root)