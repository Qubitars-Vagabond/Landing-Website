import React from 'react'
import { Outlet } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { About } from '../Pages/AboutUs'
import { Features } from '../Pages/Features'
import { GetApplication } from '../Pages/GetApplication'
import { GetInTouch } from '../Pages/GetInTouch'
import Navbar from '../Navbar/Navbar'

function Layout() {
    return (
        
     <div className="overlay">
        <div className="element">
            <Navbar/>
            <Outlet/>
         </div>
        </div>
    )
}
export default Layout;







