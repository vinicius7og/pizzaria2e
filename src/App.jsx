import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

const App = () => {

  const [color] = useState("#e4ccaa")
  document.body.style.backgroundColor = color

  return (
    <Routes>
      <Route path="/"/>
    </Routes>
  )
}

export default App