import { useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Stopwatch = () => {
    const [count, setCount] = useState(0)
    const intervalRef = useRef(null)

    const start = ()=>{
        if (intervalRef.current) return;
        intervalRef.current = setInterval(()=>{
         setCount(prev=>prev+1)
        },1000)
    }

    const stop = ()=>{
        clearInterval(intervalRef.current)
        intervalRef.current=null;
    }

  return (
    <div>
        <Navbar/>
      <div className="rounded-2xl bg-lime-300 text-lime-950 border-lime-900 px-8 py-4 font-poppins bg-blend-lighten border-4">
        <h1>Try using the Stopwatch!</h1>
        <h1 className="flex justify-around items-center p-5 font-bold text-xl "> {count} </h1>
        <div className="flex justify-around items-center">
        <button className="bg-lime-500 px-4 rounded-2xl py-2" onClick={start}>Start</button>
        <button className="bg-lime-500 px-4 rounded-2xl py-2 " onClick={stop}>Stop</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Stopwatch
