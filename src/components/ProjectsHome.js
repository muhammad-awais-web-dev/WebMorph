import RangoRawiyat from "./assets/Rang-o-Riwayat.webp";
import Delicacy from "./assets/Delicacy.webp";
import Card from "./Card";
import './ProjectsHome.css';

export default function ProjectsHome() {
  return (
    <div className="ProjectList">
      <Card image={RangoRawiyat} title="Rang-o-Riwayat" skills={[ "Wordpress", "Elementor","Ecommerce" ]} featured={true} link="https://rangoriwayat.com/" />
      <Card image={Delicacy} title="Delicacy" skills={[ "Wordpress", "Elementor","Ecommerce" ]} featured={false} link="" />
    </div>
  )
}
