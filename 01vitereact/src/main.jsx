import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <>
//       <h1>Custom App | Chai</h1>
//     </>
//   )
// }

// we create our own element 
// because in the end it will also parse into an object
// but it will not work
// reason is that it doen not match with the syntax
// like here we use type but maybe React Developer use some other name
// and so on so that's the issue
// also we create our own render method there but
// here the render method was of react so it does not run accordingly

/*
const reactElement = {
  type: 'a',   // tells what type of element it is like 'a' or 'div' etc
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}
*/
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

// we use React.createElement method which by default injects by Babel
// takes 3 parameters
// tag, property, Text to be print
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target:'_blank'},
  'Click me to visit Google',
  anotherElement  
)
ReactDOM.createRoot(document.getElementById('root')).render(

    // in the end React is also a Javascript
    // so function can be executed like this also
    // but it is not a good practice
    // MyApp()

    // <MyApp />
    // <App />
    reactElement   
)
