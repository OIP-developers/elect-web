import Image from "next/image";
import React from "react";
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

const Header = ()=>{
    return(
<header className="main-header">
        <div className="top-bar">
            <div className="container-80">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <div className="topbar-social">
                         
                            <FontAwesomeIcon icon={faFacebookF} className="icon fab fa-facebook-f" />
                          
                            <FontAwesomeIcon icon={faInstagram} className="icon fab fa-facebook-f" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="top-contact-links">
                            <a href="tel:000-000-0000"><FontAwesomeIcon icon={faPhone} className="icon" /> 000-000-0000</a>
                            <a href="mailto:Info@elect.com"><FontAwesomeIcon icon={faEnvelope} className="icon" />Info@elect.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-navigations">
            <div className="container-80">
                <nav className="main-nav">
                    <div className="menus-wrap">
                        <ul>
                            
                            <li><Link href="/">home</Link></li>
                           
                            <li><Link href="/about">about us</Link></li>
                            {/* <li><Link href="/travel">travel</Link></li> */}
                           
                           
                            {/* <li><Link href="/destination-wedding"> destination wedding</Link></li> */}
                        </ul>
                    </div>
                    <div className="logo-wrap">
                        <div className="brand">
                           
                                <Link href='/'>
                                
                                <Image src={logo} width='191px' height='84px'/>
                                </Link>
                        </div>
                    </div>
                    <div className="menus-wrap menu-wrap-2">
                        <ul>
                            {/* <li><a href="#">blogs</a></li> */}
                            {/* <li><Link href="/event">Event</Link></li> */}
                            {/* <li><a href="#">gallery</a></li> */}
                            {/* <li><Link href="/gallery">gallery</Link></li> */}
                            {/* <li><a href="#">contact us</a></li> */}
                            <li><Link href="/contact-us">contact us</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>

                            {/* <li><a href="https://kt-travels-dashboard-upja.vercel.app/login" target="_blank">Log in</a></li> */}
                        </ul>
                    </div>
                    
                    
                </nav>
            </div>
        </div>
    </header>
    );
}

export default Header;