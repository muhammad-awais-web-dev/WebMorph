import { Link } from "react-router-dom"
import './Components.css';
function Navbar(){
    return(
        <nav id="navbar">
            <h1>Muhammad Awais</h1>
            <ul id="navMenu">
                <Link to={"/"} className="navLink" >Home</Link>
                <Link to={"/about"} className="navLink" >About</Link>
                <Link to={"/projects"} className="navLink" >Projects</Link>
                <Link to={"/certifications"} className="navLink" >Certifications</Link>
                <Link to={"/services"} className="navLink" >Services</Link>
                <Link to={"/testimonials"} className="navLink" >Testimonials</Link>
            </ul>
        </nav>
    )
}

export default Navbar