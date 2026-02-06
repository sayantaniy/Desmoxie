import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
    <Navbar />
    <div className="rounded-2xl bg-lime-300 text-lime-950 border-lime-900 px-8 py-4 font-poppins bg-blend-lighten border-4">
      <h1> hey there, tap to set your counter!</h1>

      <h2 className="flex justify-around items-center p-5 font-bold text-xl ">
        {count}
      </h2>

      <div className="flex justify-around items-center">
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
          className="bg-lime-500 px-4 rounded-2xl py-2"
        >
          
          -
        </button>

        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="bg-lime-500 px-4 rounded-2xl py-2"
        >
          
          +
        </button>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Counter;
