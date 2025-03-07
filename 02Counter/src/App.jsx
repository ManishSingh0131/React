import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);
//  let counter=15;
 let handleAddValue=()=>{
  // console.log("value added",counter);
  // counter++;
  setCounter((currValue)=>{
    return (currValue<=19 ?currValue+1:currValue)
  });
 }
 let removeValue=()=>{
  setCounter((currValue)=>{
    return (currValue>0 ?currValue-1:currValue)
  });
 }
  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={handleAddValue}
     >Add value</button>
     <br /><br />
     <button onClick={removeValue}>Remove value {counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
