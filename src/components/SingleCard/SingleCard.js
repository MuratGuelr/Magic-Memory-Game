import React from 'react'
import './SingleCard.css'

export default function SingleCard({cards}) {
  return (
        <div className="card-grid">
        {cards.map(card => (
          <div className='card' key={card.id}>
            <div>
              <img classname="front" src={card.src} alt="card front"/>
              <img className='back' src="/img/cover.png" alt="card back" />
            </div>
          </div>
        ))}
      </div>
  )
}
