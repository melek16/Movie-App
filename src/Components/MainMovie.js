import React from 'react'
import { useLocation,useHistory,useRouteMatch} from 'react-router-dom'
import StarRating from './StarRating'

const MainMovie = () => {
    const match=useRouteMatch()
    console.log(match)
    const history=useHistory()
    const location=useLocation()
    const {title,description,posterURL,rating,trailer,width,height,released,runtime}=location.state
    return (
        <div id="MainMovie" style={{width:width}}>
        <iframe width={width} height={height} src={`${trailer}?autoplay=1`} title="YouTube video player"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div id="back_div">
            <button onClick={history.goBack}>BACK</button>
            
        </div>
        <div className="movie_info">
        <img src={posterURL} alt='' className="mainMovieImg" />
            <div className="movie_info2" >
                <div><h5>Title: </h5>{title}</div>
                <div><h5>Rating: </h5> <StarRating rating={rating} editable={false} /></div>
                <div id="desc"><h5>Description:</h5> {description}</div>
                <div><h5>Released:</h5> {released}</div>
                <div><h5>Runtime:</h5> {runtime}</div>
        </div>
        </div>
        </div>
    )
}

export default MainMovie
