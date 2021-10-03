import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleNewHover, handleNewMovieChange, handleNewRating, handleSubmit, handleX } from '../actions/actions'
import StarRating from './StarRating'
const check=(obj,rating)=>{
    let arr=Object.values(obj)
    let test=true
    let i=0;
    while(test && i<arr.length){
        console.log(arr[i])
        test=arr[i].trim()
        i++
    }
    return test && rating
}
const AddMovieCard = (props) => {
    const newRating = useSelector(state => state.newRating)
    const newHover = useSelector(state => state.newHover)
    const newMovie = useSelector(state => state.newMovie)
    let dispatch=useDispatch()
const Submit=(e)=>{
        e.preventDefault()
        if(check(newMovie,newRating)){
            dispatch(handleSubmit({...newMovie,rating:newRating/2}))
        }
        dispatch(handleX())
    }
    return (
        <div id="AddMovieCard">
            <span id="x" onClick={()=>dispatch(handleX())}>X</span>
            <form onSubmit={e=>Submit(e)}>
                <input type="text" placeholder="Title" value={newMovie.title} onChange={(e)=>dispatch(handleNewMovieChange({...newMovie,title:e.target.value}))} />
                <input type="text" placeholder="Poster url" value={newMovie.posterURL} onChange={(e)=>dispatch(handleNewMovieChange({...newMovie,posterURL:e.target.value}))}/>
                <div><StarRating add={true} rating={newRating} hover={newHover} handleRating={i=>dispatch(handleNewRating(i))} handleHover={i=>dispatch(handleNewHover(i))}/></div>
                
                <textarea type="text" placeholder="Description" rows='7' value={newMovie.description} onChange={(e)=>dispatch(handleNewMovieChange({...newMovie,description:e.target.value}))}/>
                <button type="submit" id="submitNewMovie">Add to the list</button>
            </form>
        </div>
    )
}

export default AddMovieCard
