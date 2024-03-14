import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import Logo from '../Images/Vagabond Logo.png'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiFillCloseSquare } from "react-icons/ai";
import { IoReorderThreeOutline } from "react-icons/io5";

export const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container nav_body">
                    <img src={Logo} alt="" onClick={() => navigate('/')} style={{ cursor: "pointer" }} />
                    <div className='d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block'>
                        <ul className="navbar-nav gap-5">
                            <li className="nav-item">
                                <NavLink to="/" className="nav_link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav_link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/features" className="nav_link">Features</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/getapplication" className="nav_link">Get Application</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Button onClick={handleShow} className="d-xxl-none d-xl-none d-lg-none d-block">
                            <IoReorderThreeOutline />
                        </Button>
                        <button className='get_btn d-xxl-block d-xl-block d-lg-block d-none' onClick={() => navigate('/getintouch')}>
                            Get in Touch
                        </button>
                    </div>
                </div>
            </nav>

            {/* offcanvas */}
            <Offcanvas show={show} onHide={handleClose} placement="top">
                <div className='d-flex justify-content-end pt-2 pe-4'>
                    <button type="button" className='close_btn' onClick={handleClose}><AiFillCloseSquare /></button>
                </div>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <ul className="navbar-nav gap-5 ">
                        <li className="nav-item">
                            <NavLink to="/" className="nav_link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav_link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/features" className="nav_link">Features</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/getapplication" className="nav_link">Get Application</NavLink>
                        </li>
                    </ul>
                    <button className='get_btn mt-5' onClick={() => navigate('/getintouch')}>
                        Get in Touch
                    </button>
                </div>
            </Offcanvas>
        </>
    )
}
