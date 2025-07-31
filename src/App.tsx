import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Counter from './components/Counter';
import Home from './pages/Home';
import CounterReducer from './components/CounterReducer';
import TarefasReducer from './components/TarefasReducer';


function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contador" element={<Counter/>}/>
        <Route path="/ContadorReducer" element={<CounterReducer/>}/>
        <Route path="/TarefasReducer" element={<TarefasReducer/>}/>
        {/* <Route path='/Usuario1' element={<Usuario1/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
