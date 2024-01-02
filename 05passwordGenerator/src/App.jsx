import { useState, useCallback, useEffect, useRef } from "react"

// kisi bhi chiz ka reference chaiye hota hai tb useRef kaam aata hai

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  // USE OF useCallback HOOK:-
  // ek fun hai usko jitna ho sake cache me rak lo
  // agr me dubara se run karu to jitna part phele ka use hota hai
  // usse use kar lo

  // useCallback(function, dependency[])
  const passwordGenerator = useCallback(() => {
    let pass = ""

    // jo data jis me password banaunga
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str += "0123456789"
    if(charAllowed)   str += "!@#$%^&*()_-+={}[]~`"

    for(let i=1; i <= length; i++){
      // gives index
      let char = Math.floor(Math.random() * str.length + 1)
    
      pass += str.charAt(char)
    }

    setPassword(pass)

    // setPassword agr nhi diya tb bhi chalega
    // but kyuki yha pr memoisation ki baat ho rahi hai
    // to ek method aesa bhi do jha pr value set ho rahi hai

    // here we talk about optimisation
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    // ? means optional select 
    // because what if value comes null, so to handle this we use optional select
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  // in me se kuch bhi ched-chad ho to dubara se run kar do
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly 
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >copy
          </button>

        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
