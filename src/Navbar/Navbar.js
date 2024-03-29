import React, { useEffect, useState } from "react";
import Wrapper from "./Navbar.styled";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Logo from "../Images/Vagabond Logo.png";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

 
  // window resize hook
  useEffect(() => {
    // window size hook for sidenav
    function checkScreenSize() {
      if (window.innerWidth > 992) {
        setMobileMenu(false);
      }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [setMobileMenu]);

  // for mobile sidenav display
  useEffect(() => {
    const navContainer = document.querySelector(".nav-link-container");
    if (navContainer) {
      if (mobileMenu) {
        navContainer.style.height = "100%";
      } else {
        navContainer.style.height = "0px";
      }
    }
  }, [mobileMenu]);

  // scroll function
  useEffect(() => {
    let navigation = document.querySelector("header");
    if (navigation) {
      window.addEventListener("scroll", scrollFunc);

      function scrollFunc() {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          navigation.style.background = "red";
          navigation.style.marginTop = "0px";
        } else {
          navigation.style.background = "transparent";
          navigation.style.marginTop = "70px";
        }
      }
    }
  }, []);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;

      if (window.innerWidth < 768 && prevScrollpos < 50) {
        document.getElementById("navWaper").style.top = "-10px";
      } else {
        document.getElementById("navWaper").style.top = "-95px";
        document.getElementById("navWaper").style.transition = "all 1s ease";
      }

      if (prevScrollpos < 50) {
        document.getElementById("navWaper").style.top = "-10px";
      } else {
        document.getElementById("navWaper").style.top = "-50px";
        document.getElementById("navWaper").style.transition = "all 1s ease";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <Wrapper id="navWaper">
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="nav-logo">
              <img
                src={Logo}
                className="img-fluid"
                alt="logo"  
                onClick={() => navigate("/")}
                style={{cursor: "pointer"}}
              />
            </div>
            <div className="nav-link-container">
              <ul className="menu">
                <li className="navLink">
                  <Link
                    to="/"
                    scroll={(el) => scrollWithOffset(el)}
                    onClick={() => {
                      setMobileMenu(false);
                    }} >
                    Home
                  </Link>
                </li>
                <li className="navLink">
                  <Link
                    to="/about"
                    scroll={(el) => scrollWithOffset(el)}
                    onClick={() => {
                      setMobileMenu(false);
                    }} >
                   
                    About
                  </Link>
                </li>
                <li className="navLink">
                  <Link
                    to="/features"
                    scroll={(el) => scrollWithOffset(el)}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    Features
                  </Link>
                </li>
                <li className="navLink">
                  <Link
                    to="/getapplication"
                    scroll={(el) => scrollWithOffset(el)}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    Get Application
                  </Link>
                </li>
              </ul>
          
            </div>
            <div className="nav-button">
                <Link
                  to="/getintouch"
                  smooth
                  scroll={(el) => scrollWithOffset(el)}
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  {/* Contact Us */}
                  <div className="center">
                    <button className="get_btn d-xxl-block d-xl-block d-lg-block d-none">
                      Get in Touch
                    </button>
                  </div>
                </Link>
              </div>
            <div className="mobile-menu">
              <button
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
              >
                {mobileMenu ? (
                  <Icon icon="akar-icons:cross" />
                ) : (
                  <Icon icon="uim:bars" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
