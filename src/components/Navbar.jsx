import React, { useState, useEffect, useRef } from 'react';
import useBreakpoints from '../customHooks/useBreakpoints';
import '../styles/navbar.css';
import { FaRegBell, FaGithub, FaLinkedin } from "react-icons/fa"
import { GiRamProfile } from "react-icons/gi"
import { RiCommunityFill } from "react-icons/ri"
import { IoGridOutline } from "react-icons/io5"
import { BsCircle } from "react-icons/bs"
import { CgProfile, CgLink } from "react-icons/cg"
import { AiOutlineInfoCircle, AiOutlineCopyrightCircle } from "react-icons/ai"

const Navbar = () => {
    const { isMd } = useBreakpoints();

    const [showSidebar, setShowSidebar] = useState(false);

    // create a React ref for the sidebar element
    const sidebar = useRef(false);

    const handleClick = e => {
        if (sidebar.current.contains(e.target)) {
            // inside click
            return;
        }
        setShowSidebar(false);
        // outside click
    };

    useEffect(() => {
        // only add the event listener when the sidebar is opened
        if (!showSidebar) return;
        if (showSidebar)
            document.addEventListener("click", handleClick, true);
        // clean up
        return () => document.removeEventListener("click", handleClick, true);
    }, [showSidebar]);

    useEffect(() => {
        if (showSidebar) {
            // document.getElementById("nav_menu").style.width = "300px";
            document.getElementById("post_cont").style.marginLeft = "300px";
            // document.getElementById("post_box").style.transform = "scale(0.5)";
        }
        
        else {
            // document.getElementById("nav_menu").style.width = "0";
            document.getElementById("post_cont").style.marginLeft = "0";
            // document.getElementById("post_box").style.transform = "scale(1)";
        }
    })

    const portfolioLink = "https://sushantgangwar.netlify.app/";
    const githubLink = "https://github.com/sushantgwr87";
    const linkedinLink = "https://www.linkedin.com/in/sushant-gangwar/";

    return (
        <header>
            <nav>
                <div className={`nav_container`} ref={sidebar}>
                    <div className='nav_btn___container'>
                        {showSidebar && <div>SmartUp</div>}
                        <div id='nav_menu' className={`btn_nav nav_menu___btn ${showSidebar && "btn_close"}`} onClick={() => setShowSidebar(!showSidebar)}>
                            <div></div>
                        </div>
                    </div>
                    <div className={`nav_menu ${showSidebar ? "nav_menu___show" : "nav_menu___hide"}`}>
                        <hr className='divider' />
                        <div className='nav_profile'>
                            <GiRamProfile />
                            <h2>Profile</h2>
                            <div className='end_crumbs'>
                                <p>12</p>
                                <button>
                                    <FaRegBell className='icon' />
                                </button>
                            </div>
                        </div>
                        <div className="nav_menu___flex_grid">
                            <ul>
                                <li className='flex_link link_hover dicover_link'>
                                    <IoGridOutline className='icon' />
                                    <h3>Discover</h3>
                                    <p>24</p>
                                </li>
                                <li className='flex_link link_hover'>
                                    <BsCircle className='icon' />
                                    <h3>SmartUp</h3>
                                </li>
                                <li className='flex_link link_hover'>
                                    <RiCommunityFill className='icon' />
                                    <h4>Main Community</h4>
                                </li>
                                <li className='flex_link link_hover'>
                                    <RiCommunityFill className='icon' />
                                    <h4>Fun Community</h4>
                                </li>
                                <li className='flex_link link_hover'>
                                    <RiCommunityFill className='icon' />
                                    <h4>Tech Community</h4>
                                </li>
                                <li className='flex_link link_hover'>
                                    <RiCommunityFill className='icon' />
                                    <h4>Lead Community</h4>
                                </li>
                                <li className='flex_link sub_menu'>
                                    <CgProfile className='icon' />
                                    <div className="box">
                                        <h3>Personal</h3>
                                        <div className='flex_link___sub link_hover'>
                                            <h4>In Progress</h4>
                                            <p>180</p>
                                        </div>
                                        <div className='flex_link___sub link_hover'>
                                            <h4>Completed</h4>
                                            <p>48</p>
                                        </div>
                                        <div className='flex_link___sub link_hover'>
                                            <h4>Read Later</h4>
                                            <p>24</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="nav_menu___footer">
                            <div className='footer_about'>
                                <AiOutlineInfoCircle className='icon' />
                                <div className='footer_box'>
                                    <h3>About</h3>
                                    <h4>Send Feedback</h4>
                                    <h4>Terms of use</h4>
                                    <h4>Privacy Policy</h4>
                                    <div className='social_link'>
                                        <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
                                            <CgLink className='icon' />
                                        </a>
                                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                            <FaGithub className='icon' />
                                        </a>
                                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className='icon' />
                                        </a>
                                    </div>
                                    <div>
                                        <AiOutlineCopyrightCircle />
                                        <span>2022 Copyright Sushant</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;