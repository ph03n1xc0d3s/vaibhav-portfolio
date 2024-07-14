import React from 'react'
import '../assets/css/cards.css';

const Card = ({cardImage, cardTitle,cardSkill, cardBody}) => {
    console.log(cardImage)
  return (
    <div className='card'>
    <div className="card-image">
        <img src={cardImage} alt="Project" />
    </div>
      <div className="card-title">
        <h3>{cardTitle}</h3>
        <span>{cardSkill}</span>
      </div>
      <div className="card-body">
        <p>{cardBody}</p>
      </div>
    </div>
  )
}

export default Card
