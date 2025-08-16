import './AboutHome.css';
import { Link } from 'react-router-dom';


function AboutHome(){
    return(
        <div id="aboutHome">
            <h2>About Me</h2>
            <p>I'm a passionate web developer and UX/UI designer with a strong focus on creating digital experiences that are both functional and beautiful. With expertise in React.js, WordPress, and modern design tools, I help businesses and individuals bring their digital visions to life.</p>
            <Link to="/about" className="button">Learn More About Me   <i className='fa-solid fa-arrow-right' ></i> </Link>
        </div>    
    )
}

export default AboutHome