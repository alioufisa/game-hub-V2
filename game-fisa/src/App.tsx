import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Button colorScheme='blue'>Button</Button>
    </div>
  )
}

export default App
