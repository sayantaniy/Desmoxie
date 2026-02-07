import Navbar from "./Navbar"
import Footer from "./Footer"

const Home = () => {
  return (
    <div className="font-instrumentserif">
      <Navbar />
      <div className='max-h-[70%] sm:p-30'>
        <h1 className="font-bold text-4xl lg:text-7xl md:text-6xl text-center mt-20 italic bg-clip-text bg-linear-to-b from-yellow-100 to-amber-400 text-transparent">About  Desmoxie</h1>
        <p className="px-[7%] py-[3%] text-xl lg:text-2xl font-light  text-lime-100 text-center"> Desmoxie is a growing collection of simple, fast, and reliable utility tools designed to make everyday tasks easier. It started with just a few essentials—Counter, Stopwatch, and Pomodoro—each built to be clean, distraction-free, and instantly usable.
          The goal is to create a space where anyone can perform basic operations without clutter, ads, or unnecessary complexity. Every tool is crafted to be minimal yet effective, helping users stay organized, track progress, and manage time with confidence.
          As Desmoxie keeps expanding, new features and utilities will join the toolkit—always with the same focus on clarity, speed, and ease of use. It’s a small project with a big mission: to support productivity through thoughtful simplicity. </p>
      </div>
      <Footer />
    </div>
  )
}

export default Home
