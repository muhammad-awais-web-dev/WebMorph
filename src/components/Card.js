import './Card.css';

export default function Card(props) {
  return (
    <>
      {props.link && props.link.length > 0 ? (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <div className='Card'>
            <img className='CardImg' src={props.image} alt={props.title} />
            {props.featured ? <span className='badge'>Featured</span> : ""}
              <h3>{props.title}</h3>
              <ul>
              {props.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
              </ul>
          </div>
        </a>
      ) : (
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
        </div>
      )}
    </>
  )
}
