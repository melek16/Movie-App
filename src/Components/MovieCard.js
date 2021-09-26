import React from 'react'

import StarRating from './StarRating'

const MovieCard = ({title, description, posterURL, rating},key) => {
    return (
    
        <div className='movieCard' >
            <div className='title_and_rating'>
                <h5>{title}</h5>
                <div><StarRating rating={rating} editable={false} /></div>
            </div>
           <img src={posterURL} alt='' />
           <div className="description"><p>{description}</p></div>
        </div>
  
    )
}

export default MovieCard
