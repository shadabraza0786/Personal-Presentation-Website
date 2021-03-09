import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Shadab Raza</h1>
                <div className="links">
                    <Link to="/Home">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Services">Services</Link>
                    <Link to="/Contact">Contact</Link>

                </div>
        </nav>
    )
}

export default Navbar
