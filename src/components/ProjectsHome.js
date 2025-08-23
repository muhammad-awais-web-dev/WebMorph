import RangoRawiyat from "./assets/Rang-o-Riwayat.webp";
import Delicacy from "./assets/Delicacy.webp";
import CtrlAltShop from "./assets/CtrlAlt Shop.webp"
import PortfolioInitiative from "./assets/Freelancer Portfolio.webp"
import Card from "./Card";
import './ProjectsHome.css';

export default function ProjectsHome() {

  const projects = [
    {
      image: CtrlAltShop,
      title: "CtrlAlt Shop Case Study",
      skills: ["UX Research","Usability Study","Wireframing","Prototyping"],
      featured: true,
      link:"https://drive.google.com/file/d/1Mku4B2tyCME5JuWsHLbX8Vj01tVByW1l/view?usp=drivesdk",
      buttonText:"View Project"
    },
    {
      image: PortfolioInitiative,
      title: "Freelancer Portfolio Initiative",
      skills: ["Wordpress", "Elementor","Ecommerce","Branding","Collaboration"],
      featured: true,
      link:"https://www.linkedin.com/in/muhammad-awais-web-dev/details/projects/",
      buttonText:"View Project"
    },
    {
      image: RangoRawiyat,
      title: "Rang-O-Rawiyat",
      skills: ["Wordpress", "Elementor","Ecommerce"],
      featured: true,
      link:"https://rangoriwayat.com/",
      buttonText:"View Project"
    },
    {
      image: Delicacy,
      title: "Delicacy",
      skills: ["Wordpress", "Elementor","Ecommerce"],
      featured: true,
      link:"https://dev-practical-2.pantheonsite.io/",
      buttonText:"View Project"
    }
  ]

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="ProjectList">
        {
          projects.map(projects =>(
            <Card image={projects.image}
                  title={projects.title}
                  skills={projects.skills}
                  featured={projects.featured}
                  link={projects.link}
                  buttonText={projects.buttonText}
            />
          ))
        }
      </div>
    </section>
  )
}
