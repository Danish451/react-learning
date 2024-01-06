import React from "react";
import UserContext from "./UserContext";

// children --> jo bhi aa raha hai use as it is
// aage pass kar do
// as such children name nhi iske alwa bhi aur kuch use kar sakte hai
const UserContextProvider = ({children}) => {
    // jo bhi API access karni hai yha par kar lo
    const [user, setUser] = React.useState(null)
    return (
        // jo bhi value aayi hai yha throw kar do
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider