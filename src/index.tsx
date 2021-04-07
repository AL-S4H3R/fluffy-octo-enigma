import React from 'react'
import { render } from 'react-dom'
import './index.css'
import Landing from './views/Landing'

const App: React.FC = () => {
  return(
    <>
      <Landing />
    </>
  )
}

const root = document.getElementById('root')

render(<App />, root)