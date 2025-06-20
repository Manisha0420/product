import React from 'react'
import { NavLink } from 'react-router'

const Nav = () => {
    return (
        <div className='flex gap-5'>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? " text-red-500" : " "}
                >Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => isActive ? " text-red-500" : " "}
                >About
            </NavLink>
            <NavLink
                to="/signin"
                className={({ isActive }) => isActive ? " text-red-500" : " "}
                >Sign-in
            </NavLink>


        </div>
    )
}

export default Nav
