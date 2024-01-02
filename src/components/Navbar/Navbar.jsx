import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <span>
                <a href="/" className="logo">CODE - FRIEND </a>
            </span>
            <ul>
                <li className="nav-item">John Doe</li>
                <li className="nav-item">Logout</li>
                <li className="nav-item">
                    <a href="/about" className="about-link">About</a>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;
