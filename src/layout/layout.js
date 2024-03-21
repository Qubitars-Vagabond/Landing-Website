import React from 'react'
import './layout.css'
import { Outlet } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { About } from '../Pages/AboutUs'
import { Features } from '../Pages/Features'
import { GetApplication } from '../Pages/GetApplication'
import { GetInTouch } from '../Pages/GetInTouch'
import {Navbar} from '../Navbar/Navbar'

export const Layout = () => {
    return (
        <div>
     <div className="overlay">
        <div className="element">
            <Navbar/>
            <Outlet/>
        </div>
        </div>
        </div>
    )
}
