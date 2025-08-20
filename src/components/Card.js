import './Card.css';

export default function Card(props) {
  return (
        <div className='Card'>
          <img className='CardImg' src={props.image} alt={props.title} />
          {props.featured ? <span className='badge'>Featured</span> : ""}
            <h3>{props.title}</h3>
            <ul>
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
            </ul>
            <p>{props.desc}</p>
            <a style={{textAlign:"center", width:"fit-content"}} href={props.link} className='button'>View Project</a>
        </div>
  )
}
