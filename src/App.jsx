import { useState } from 'react'
import './App.css' 

function App() {

  let [counter , setcounter] = useState(0)
  function Advalue(){
    let head = document.querySelectorAll("h1");
    setcounter(counter = counter + 1);
    console.log(counter);
  }
  function reValue(){
    if(counter == 0) {
      
      return ;
    }
    setcounter(counter = counter - 1);
    console.log(counter);
  }
  return (
    <>
    <h1>Hello Free Fire Players</h1>
    <button
    onClick={Advalue}>Count: {counter}</button>
    <br></br>
    <button
    onClick = {reValue} >Count: {counter}</button>
    </>
  )
}

export default App
