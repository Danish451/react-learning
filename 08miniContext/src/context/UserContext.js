import React from 'react'

// context is nothing but just like a global variable
// createContext is a fn used to create context
const UserContext = React.createContext()

export default UserContext

// when context is created then
// provider also needs to be create
// which will provide the data