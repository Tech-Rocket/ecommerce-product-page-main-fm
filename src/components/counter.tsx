import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Zero is the lowest");
    }
  }

  return (
    <div className="flex items-center justify-between px-3 mt-7 bg-[#F6F8FF] border-none h-13 rounded shadow-lg">
      <button onClick={decrementCount}>
        <FaMinus className="text-[#FF7D1A] text-lg" />
      </button>
      <p className="text-lg text-[#1E2126] font-bold">{count}</p>
      <button onClick={incrementCount}>
        <FaPlus className="text-[#FF7D1A] text-lg" />
      </button>
    </div>
  );
}
