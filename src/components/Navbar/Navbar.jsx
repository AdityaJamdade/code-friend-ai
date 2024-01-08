/* eslint-disable react/prop-types */
import './Navbar.css';

const Navbar = ({ user }) => {

    const handleLogout = () => {
        window.open("http://localhost:8000/auth/logout", "_self");
    };

    return (
        <div className="navbar">
            <span>
                <a href="/" className="logo">CODE - FRIEND </a>
            </span>
            <ul className='nav-list'>
                {user
                    &&
                    <>
                        <li className="nav-item">{user.displayName}</li>
                        <li className="nav-item">
                            <img
                                src={user.photos[0].value}
                                alt=""
                                className="avatar"
                            />
                        </li>
                        <li className="nav-item" onClick={handleLogout}>Logout</li>
                    </>
                }
                <li className="nav-item">
                    <a href="/about" className="about-link">About</a>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;
