import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

const Navbar = () => {
    return <nav className={s.nav}>
        <div><NavLink to='/profile'>Profile</NavLink></div>
        <div><NavLink to='/messages'>Messages</NavLink></div>
        <div><NavLink to='/news'>News</NavLink></div>
        <div><NavLink to='/music'>Music</NavLink></div>
        <div><NavLink to='/users'>Users</NavLink></div>
        <br/>
        <div><NavLink to='/setting'>Setting</NavLink></div>
    </nav>
}

export default Navbar;