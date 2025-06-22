import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';

const Nav = () => {
    const { user } = useSelector((state) => state.userReducer);

    const navLinkClass = ({ isActive }) =>
        isActive
            ? 'text-blue-600 font-semibold border-b-2 border-blue-600 transition'
            : 'text-gray-700 hover:text-blue-600 transition';

    return (
        <nav className="bg-white shadow-md py-4 px-6">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 text-lg font-medium">
                <NavLink to="/" className={navLinkClass}>
                    Home
                </NavLink>
                <NavLink to="/about" className={navLinkClass}>
                    About
                </NavLink>
                {user ? (
                    <>
                        <NavLink to="/setting" className={navLinkClass}>
                            My Profile
                        </NavLink>
                        {user?.isAdmin && (
                            <NavLink to="/create-product" className={navLinkClass}>
                             Create Product
                            </NavLink>
                        )}
                        <div className='pl-59'>
                            <NavLink to="/cart" className={navLinkClass}>
                            Cart
                            </NavLink>
                        </div>

                        
                    </>


                ) : (
                    <NavLink to="/signin" className={navLinkClass}>
                        Sign In
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Nav;
