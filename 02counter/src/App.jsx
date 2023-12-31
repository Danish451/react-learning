import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // [variable, function which controls the variable]
  let [counter, setCounter] = useState(15);
  
  // let counter = 5;
  let addValue = () =>{
    // console.log("clicked", Math.random());
    // counter = counter + 1

    // if(counter < 20)
    //   setCounter(counter+1)

    // Interview Question
    // setCounter func accepts callback as an argument
    // setCounter(() => {})

    // doing this will not affect the addition by 5
    // this is due to useState hook
    // all the updates which will be sent to UI(not only UI but in variables also)
    // they will go in batches
    // so overall only one time it increases
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
  
  
    // but if we use like this 
    // then only setCounter will increase it by 5 times
    // on single click of button
    // prevCounter is the last updated state of counter
    // through callbacks when one is properly completed
    // then next callback will execute and proper updation takes place
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }

  const removeValue = () =>{
    if(counter > 0)
      setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      {/* this change in counter will not propogate on UI
      as UI is controled by React
      so for that we have HOOKs */}
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
