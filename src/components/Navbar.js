import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const pos = [-0.625, 6.5, 13.688, 26.063];
    const width = [6.688, 7.125, 12.625, 10.125];
    function onRefresh(){
        let url = window.location.href;
        url = url.split('/');
        url = url[url.length - 1];
        let roam = document.querySelector('.navRoam');
        if (url === '') {
            roam.style.width = `${width[0]}rem`;
            roam.style.left = `${pos[0]}rem`;
        }
        else if (url === 'about') {
            roam.style.width = `${width[1]}rem`;
            roam.style.left = `${pos[1]}rem`;
        }
        else if (url === 'projects') {
            roam.style.width = `${width[2]}rem`;
            roam.style.left = `${pos[2]}rem`;
        }
        else if (url === 'contact') {
            roam.style.width = `${width[3]}rem`;
            roam.style.left = `${pos[3]}rem`;
        }
    }
    useEffect(onRefresh, []);
    const pageChanged = (code) => {
        let roam = document.querySelector('.navRoam');
        roam.style.width = `${width[code]}rem`;
        roam.style.left = `${pos[code]}rem`;
    }
    return (
        <div className="container">
            <div className='navbar'>
                <div className="navRoam"></div>
                <Link to='/' className="navbtns" onClick={() => { pageChanged(0) }}>Home</Link>
                <Link to='/about' className="navbtns" onClick={() => { pageChanged(1) }}>About</Link>
                <Link to='projects' className="navbtns" onClick={() => { pageChanged(2) }}>My Projects</Link>
                <Link to='/contact' className="navbtns" onClick={() => { pageChanged(3) }}>Contact</Link>
            </div>
        </div>
    )
}
