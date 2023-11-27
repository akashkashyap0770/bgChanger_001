import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="pt-20 flex justify-center"style={{fontSize:"50px", fontWeight:"bold", color:"cyan"}}>
      <h1>BACKGROUND-CHANGER</h1>
      </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
          <button  
          onClick={() => setColor("Red")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Red"}}>Red</button>
          <button 
          onClick={() => setColor("Yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button 
          onClick={() => setColor("Blue")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>
          <button 
          onClick={() => setColor("Green")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Green"}}>Green</button>
          <button 
          onClick={() => setColor("Pink")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Pink"}}>Pink</button>
          <button 
          onClick={() => setColor("Purple")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Purple"}}>Purple</button>
          <button 
          onClick={() => setColor("Lavender")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Lavender"}}>Lavender</button>
          <button 
          onClick={() => setColor("Olive")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Olive"}}>Olive</button>
          <button 
          onClick={() => setColor("White")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"White"}}>White</button>

        </div>
        </div>
        </div>
    </>
  )
}

export default App
