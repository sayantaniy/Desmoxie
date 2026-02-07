import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Pomodoro = () => {
    const work_time = 25 * 60
    const break_time = 5 * 60

    const [timeleft, setTimeleft] = useState(work_time)
    const [isWork, setIsWork] = useState(true) //is user working?
    const [isRunning, setIsRunning] = useState(false) //is clock running?



    useEffect(() => {
        let interval: number | undefined

        if (isRunning) {
            interval = window.setInterval(() => {
                setTimeleft(prev => {
                    if (prev === 1) {
                        const next: number = isWork ? break_time : work_time
                        setIsWork(!isWork)
                        return next
                    }
                    return prev - 1
                })
            }, 1000)
        }

        return ()=>{
            clearInterval(interval)
        }
    }, [isRunning, isWork])

       const format = (sec: number) => {
            const m: number = Math.floor(sec / 60)
            const s: number = sec % 60
            return `${m} : ${s < 10 ? 0 : ''}${s}`

        }


    return (
        <div>
            <Navbar />

            <div className="rounded-2xl bg-lime-300 text-lime-950 border-lime-900 px-8 py-4 font-poppins bg-blend-lighten border-4">

                <h1 className="flex items-center justify-center">Time to {isWork ? 'Focus!' : 'take a Break!'}</h1>

                <h1 className="flex justify-around items-center p-5 font-bold text-xl "> {format(timeleft)} </h1>

                <div className="flex justify-around items-center gap-2 mt-2">

                    <button
                        onClick={() => {
                            setIsRunning(true)
                        }}
                        className="bg-lime-500 px-4 rounded-2xl py-2  hover:bg-lime-600" >Start</button>
                    <button
                        onClick={() => {
                            setIsRunning(false)
                        }}
                        className="bg-lime-500 px-4 rounded-2xl py-2  hover:bg-lime-600" >Pause</button>
                    <button
                        onClick={() => {
                            setIsRunning(false)
                            setIsWork(true)
                            setTimeleft(work_time)
                        }}
                        className="bg-lime-500 px-4 rounded-2xl py-2  hover:bg-lime-600" >Reset</button>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Pomodoro
