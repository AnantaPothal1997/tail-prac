import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './view/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-center xs:py-8 sm:py-12 md:px-24 lg:px-56 md:py-20' style={{height:'100vh'}}>
        <Contact/>
      </div>
    </>
  )
}

export default App
