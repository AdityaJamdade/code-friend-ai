import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/" className="logo">CODE - FRIEND</a>
            <a href="/about" className="about-link">About</a>
            <a href="/login" className="about-link">Login</a>
        </div>
    );
}

export default Navbar;
