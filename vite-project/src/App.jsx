import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChangeSunglasses from './state/ChangeSunglasses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChangeSunglasses/>
    </>
  )
}

export default App
