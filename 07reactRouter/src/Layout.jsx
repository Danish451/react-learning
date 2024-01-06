
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// Outlet:- use Layout as a Base 
// aur jo bhi chiz aayegi usme Header aur Footer same rakhega
function Layout() {
  return (
    <>
     <Header />
     <Outlet />
     <Footer /> 
    </>
  )
}

export default Layout
