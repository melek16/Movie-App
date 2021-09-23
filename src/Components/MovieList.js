import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({listOfMovies,search,rating,showAddMovie}) => {
    let arrToShow=rating? listOfMovies.filter(c=>c.rating*2===rating) :listOfMovies
    arrToShow=search ? arrToShow.filter(c=>c.title.toUpperCase().includes(search.toUpperCase())) :arrToShow
    return (
        !arrToShow.length ? <h1 id="no_movie">Didn't find a movie</h1> :
        <div id="movieList">
            { 
arrToShow.map((el,i)=><MovieCard {...el} key={i}/>)  
            }
            {arrToShow.length===listOfMovies.length ? <div id="add" onClick={showAddMovie} >
            <svg  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#586F7C"><path  d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
            </div> : null}
        </div>
    )
    
}

export default MovieList