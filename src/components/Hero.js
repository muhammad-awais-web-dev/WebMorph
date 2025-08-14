import { Link } from "react-router-dom"
import Profile from '../resourses/Profile.webp' 

function Overview(props){
    return(
    <div className="overview">
        <h3 >{props.value}</h3>
        <p >{props.name}</p>
    </div>
    )
}

function HeroSection(){
    return(
    <section id="heroSection">
        <div className="subSections">
            <div id="heroInfo">
                <div>
                    <span>Available for projects</span>
                    <h1>Muhammad Awais</h1>
                    <h2>Web Developer & UX/UI Designer</h2>
                    <p>Creating responsive, user-friendly websites and interfaces with React.js, WordPress, and modern design tools. Specializing in clean code and beautiful user experiences.</p>
                    <div className="buttonContainer">
                        <Link className="button" to={"/projects"} >View my work  <i className="fa-solid fa-briefcase"></i></Link>
                        <a className="button" href="/assets/muhammad-awais.pdf" download>Download CV  <i className="fa-solid fa-download"></i></a>
                    </div>
                    <p><i className="fa-solid fa-code"></i>   React.js   <i className="fa-solid fa-palette"></i>   UI/UX Design  <i className="fa-solid fa-mobile"></i>   Responsive   </p>
                </div>
            </div>
        </div>
        <div className="subSections">
            <div id="heroCard">
                <img className="profilePic" src={Profile} alt="  " />
                <h2>Muhammad Awais</h2>
                <p>Front-End Developer & Ui/Ux Designer</p>
                <div>
                    <Overview value='32+' name='Projects' />
                    <Overview value='1+' name='Years' />
                    <Overview value='7+' name='Clients' />
                </div>
            </div>
        </div>
    </section>
    )
}

export default HeroSection