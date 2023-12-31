import Chai from "./chai"

function App() {
  const username = "chai aur code"

  return (
    // <> this is called fragment in jsx
    <>
      <Chai />
      <h1>chai aur react with {username}</h1>
      <p>Test Para</p>
    </>
  )
}


// {username} this is called evaluated expression 
// we don't write entire javascript inside {}
// we write the final outcome of javascript which will be evaluated
// means { if(true) username }  this is not valid 
// { username } this is valid

export default App
