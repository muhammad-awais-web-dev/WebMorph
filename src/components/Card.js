import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
        <img className='CardImg' src={props.image} alt={props.title} />
        <div className="info">
            <h3>{props.title}</h3>
            <ul>
            {props.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
            </ul>
        </div>
    </div>
  )
}
