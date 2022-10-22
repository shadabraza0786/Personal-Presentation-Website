import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    const handleSubmit = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    return (
        <nav className="navbar">
            <h1>Shadab Raza</h1>
            <div className="links">
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Services">Services</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Portfolio">Projects</Link>
            </div>

            <div className="dropdown">
                <Link onClick={handleSubmit} className="dropbtn"><FontAwesomeIcon icon={faBars} style={{ color: 'white' }} /></Link>
            
                <div id="myDropdown" className="dropdown-content">
                    <Link to="/Home">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Services">Services</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Portfolio">Projects</Link>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
