import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/navbar/logo.png";
import Button from "./Button";
import { HamburgerMenu, NavWrapper } from "../wrappers/componentWrappers/navbar";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const currentPath = location.pathname.replace("/", "") || "home";
        setActive(currentPath);
    }, [location.pathname]);

    return (
        <>
            <NavWrapper>
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <ul className={`links-container ${menuOpen ? 'open' : 'close'}`} >
                    <li className={`nav-link ${active === 'home' ? 'active' : ''}`} onClick={() => navigate('/')}>Home</li>
                    <li className={`nav-link ${active === 'about' ? 'active' : ''}`} onClick={() => navigate('/about')}>About us</li>
                    <div className="product-link">
                        <li className={`nav-link dropdown ${active === 'products' ? 'active' : ''}`} >Products
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinejoin="round" strokeLinecap="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </li>
                        <div className="dropdown-list">
                            <span onClick={() => navigate('/remote-team-management')} className="dropdown-link dropdown-tittle">remote team <br /> management</span>
                            <span onClick={() => navigate('/time-tracking')} className="dropdown-link">- time tracking</span>
                            <span onClick={() => navigate('/project-management')} className="dropdown-link">- project management</span>
                            <span onClick={() => navigate('/hr-management')} className="dropdown-link dropdown-tittle">HR management</span>
                            <span onClick={() => navigate('/payroll-management')} className="dropdown-link">- payroll management</span>
                        </div>
                    </div>
                    <li className={`nav-link ${active === 'pricing' ? 'active' : ''}`} onClick={() => navigate('/pricing')}>Pricing</li>
                    <li className={`nav-link ${active === 'blog' ? 'active' : ''}`} onClick={() => navigate('/blog')}>Blog</li>
                    <li className={`nav-link ${active === 'contact' ? 'active' : ''}`} onClick={() => navigate('/contact')}>Contact</li>
                    <Button className={'nav-btn'} text={'request a demo'} />
                </ul>

                <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </HamburgerMenu>
            </NavWrapper>
        </>
    );
};

export default Navbar;
