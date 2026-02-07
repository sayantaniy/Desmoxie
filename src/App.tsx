import { Route, Routes } from "react-router-dom"
import Counter from "./components/Counter"
import Stopwatch from "./components/Stopwatch"
import Pomodoro from "./components/Pomodoro"
import Home from "./components/Home"



const App = () => {
  return (
    <div className="h-screen bg-zinc-900 bg-cover bg-center bg-no-repeat text-amber-50 flex items-center justify-center">
      
      <Routes>
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/pomodoro" element={<Pomodoro/>}/>
        <Route path="/counter" element={<Counter />} />
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App
