import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button 
          //onClick={setColor}   //here we pass the reference of the fn but we cannot pass the parameter inside fn.
          // onClick={setColor()}   // here we pass the fn but in return fn will give some value to onClick
          // but onClick needs function in return
          onClick={() => setColor("red")}   // this problem can be solved with callbacks
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg" 
          style={{backgroundColor: "red"}}
          >Red</button>
          <button 
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg" 
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg" 
          style={{backgroundColor: "green"}}
          >Green</button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg" 
          style={{backgroundColor: "blue"}}
          >BLue</button>
          <button 
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg" 
          style={{backgroundColor: "black"}}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
