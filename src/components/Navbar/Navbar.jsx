/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user }) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    // eslint-disable-next-line no-unused-vars
    const handleLogout = () => {
        window.open("http://localhost:8000/auth/logout", "_self");
    };

    return (
        <div className="navbar">
            <span>
                <Link to="/" className="logo">CODE - FRIEND </Link>
            </span>
            <ul className='nav-list'>
                {user ? (
                    <>
                        <li className="nav-item" onClick={toggleDropdown}>
                            <img src={user.photos[0].value} alt="" className="avatar" />
                            {/* Dropdown content */}
                            {isDropdownOpen && (
                                <div className="dropdown">
                                    <Link to="/dashboard" onClick={closeDropdown}>Dashboard</Link>
                                    <Link to="/about" onClick={closeDropdown}>About</Link>
                                    <Link onClick={handleLogout}>Logout</Link>
                                </div>
                            )}
                        </li>
                    </>
                ) : (
                    <>
                        <li className='nav-item'>
                            <Link className='login-link' to="/auth">Login</Link>
                        </li>
                    </>
                )}
            </ul>

        </div>
    );
}

export default Navbar;
