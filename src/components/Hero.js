import { Link } from "react-router-dom"

function HeroSection(){
    return(
    <section id="heroSection">
        <div>
            <div id="heroInfo">
                <div>
                    <span>Available for projects</span>
                    <h1>Muhammad Awais</h1>
                    <h2>Web Developer & UX/UI Designer</h2>
                    <p>Creating responsive, user-friendly websites and interfaces with React.js, WordPress, and modern design tools. Specializing in clean code and beautiful user experiences.</p>
                    <div className="buttonContainer">
                        <Link className="button" to={"/projects"} >View my work</Link>
                        <a className="button" href="..\resourses\muhammad-awais.pdf" download>Download CV</a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div id="heroCard">
                <h1>Hi</h1>
            </div>
        </div>
    </section>
    )
}

export default HeroSection