import React from 'react'
import StarRating from './StarRating'
const check=(obj,rating)=>{
    let arr=Object.values(obj)
    let test=true
    let i=0;
    while(test && i<arr.length-1){
        test=arr[i].trim()
        i++
    }
    return test && rating
}
const AddMovieCard = (props) => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(check(props.newMovie,props.rating)){
            props.handleSubmit({...props.newMovie,rating:props.rating/2})
        }
        props.handleX()
    }
    return (
        <div id="AddMovieCard">
            <span id="x" onClick={props.handleX}>X</span>
            <form onSubmit={e=>handleSubmit(e)}>
                <input type="text" placeholder="Title" value={props.newMovie.title} onChange={(e)=>props.handleChange({...props.newMovie,title:e.target.value})} />
                <input type="text" placeholder="Poster url" value={props.newMovie.posterURL} onChange={(e)=>props.handleChange({...props.newMovie,posterURL:e.target.value})}/>
                <div><StarRating add={true} editable={true} handleRating={props.handleRating} rating={props.rating} hover={props.hover} handleHover={props.handleHover}/></div>
                
                <textarea type="text" placeholder="Description" rows='7' value={props.newMovie.description} onChange={(e)=>props.handleChange({...props.newMovie,description:e.target.value})}/>
                <button type="submit" id="submitNewMovie">Add to the list</button>
            </form>
        </div>
    )
}

export default AddMovieCard
