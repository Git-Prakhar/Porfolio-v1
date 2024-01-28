import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const pos = [-0.625, 6.5, 13.688, 26.063];
    const width = [6.688, 7.125, 12.625, 10.125];
    let nextPageURL = useRef('/about');
    let prevPageURL = useRef('/');
    const location = useLocation();
    const [forceUpdate, setForceUpdate] = useState(false);
    let nextBtnStyle = {
        display : 'inline-block'
    }
    let prevBtnStyle = {
        display : 'none'
    }
    function onRefresh() {
        let roam = document.querySelector('.navRoam');
        switch (location.pathname) {
            case '/':
                roam.style.width = `${width[0]}rem`;
                roam.style.left = `${pos[0]}rem`;
                nextPageURL.current = '/about';
                break;
            case '/about':
                roam.style.width = `${width[1]}rem`;
                roam.style.left = `${pos[1]}rem`;
                nextPageURL.current = '/projects';
                prevPageURL.current = '/';
                prevBtnStyle = {
                    display : 'inline-block'
                }
                break;
            case '/projects':
                roam.style.width = `${width[2]}rem`;
                roam.style.left = `${pos[2]}rem`;
                nextPageURL.current = '/contact';
                prevPageURL.current = '/about';
                break;
            case '/contact':
                roam.style.width = `${width[3]}rem`;
                roam.style.left = `${pos[3]}rem`;
                prevPageURL.current = '/projects';
                break;
        }
        setForceUpdate(prevState => !prevState);
    }
    useEffect(onRefresh, [location]);
    const pageChanged = (code) => {
        let roam = document.querySelector('.navRoam');
        roam.style.width = `${width[code]}rem`;
        roam.style.left = `${pos[code]}rem`;
    }
    return (
        <>
            <div className="container" id='mainNavbar'>
                <div className='navbar'>
                    <div className="navRoam"></div>
                    <Link to='/' className="navbtns" onClick={() => { pageChanged(0) }}>Home</Link>
                    <Link to='/about' className="navbtns" onClick={() => { pageChanged(1) }}>About</Link>
                    <Link to='projects' className="navbtns" onClick={() => { pageChanged(2) }}>My Projects</Link>
                    <Link to='/contact' className="navbtns" onClick={() => { pageChanged(3) }}>Contact</Link>
                </div>
            </div>
            <div className="container" id='mobileNavbar'>
                <Link to={nextPageURL.current} id="nextNavbarBtn" style={nextBtnStyle}></Link>
                <Link to={prevPageURL.current} id="prevNavbarBtn"></Link>
            </div>
        </>
    )
}
