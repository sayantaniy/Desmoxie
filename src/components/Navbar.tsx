import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-lime-700 fixed top-6 left-1/2 transform -translate-x-1/2 w-[70%] text-white px-[5%] py-[1%] text-xl rounded-full font-googlesans flex justify-between font-bold'>
        <Link className='m-3 h-full hover:bg-lime-200  hover:text-black px-3 py-1 rounded-full' to="/">Home</Link>
        <Link className='m-3  hover:bg-lime-200  hover:text-black px-3 py-1 rounded-full' to="/counter">Counter</Link>
        <Link className='m-3  hover:bg-lime-200  hover:text-black px-3 py-1 rounded-full' to="/stopwatch">Stopwatch</Link>
        <Link className='m-3  hover:bg-lime-200  hover:text-black px-3 py-1 rounded-full' to="/pomodoro">Pomodoro</Link>

    </div>
  )
}

export default Navbar
