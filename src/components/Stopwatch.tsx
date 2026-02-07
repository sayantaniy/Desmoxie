import { useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)
    const intervalRef: number | null | any = useRef(null) //does not re renders

    const start = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => { //returns an id
            setRunning(true)
            setTime(prev => prev + 10)
        }, 10)
    }

    const stop = () => {
        setRunning(false)
        clearInterval(intervalRef.current)
    }

    const reset = () => {
        setRunning(false)
        clearInterval(intervalRef.current)
        intervalRef.current = null;
        setTime(0)
    }

    const format = (ms:number) => {
        const m: number = Math.floor(ms / 60000);
        const s: number = Math.floor((ms % 60000) / 1000);
        const ms2: number = Math.floor((ms % 1000) / 10);
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(ms2).padStart(2, "0")}`;
    };

    return (
        <div>
            <Navbar />
            <div className="rounded-2xl bg-lime-300 text-lime-950 border-lime-900 px-8 py-4 font-poppins bg-blend-lighten border-4">
                <h1>Try using the Stopwatch!</h1>
                <h1 className="flex justify-around items-center p-5 font-bold text-xl "> {format(time)} </h1>
                <div className="flex justify-around items-center gap-2">
                    <button className="bg-lime-500 px-4 rounded-2xl py-2 hover:bg-lime-600" onClick={start}>Start</button>
                    <button className="bg-lime-500 px-4 rounded-2xl py-2  hover:bg-lime-600" onClick={stop}>Stop</button>
                    <button className="bg-lime-500 px-4 rounded-2xl py-2  hover:bg-lime-600" onClick={reset}>Reset</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Stopwatch
