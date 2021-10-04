import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleNewHover, handleNewMovieChange, handleNewRating, handleSubmit, handleX } from '../reducers/counterSlice'
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
const AddMovieCard = () => {
    const newRating = useSelector(state => state.reducer.newRating)
    const newHover = useSelector(state => state.reducer.newHover)
    const newMovie = useSelector(state => state.reducer.newMovie)
    let dispatch=useDispatch()
const Submit=(e)=>{
        e.preventDefault()
        console.log(newMovie)
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
                
                <input type="number" placeholder="Released in" min="1878" max={new Date().getFullYear()} value={newMovie.released} onChange={(e)=>dispatch(handleNewMovieChange({...newMovie,released:e.target.value}))}/>
                <input type="text" placeholder="Runtime(e.g. 2h 30min)" pattern="\d*h \d*min" value={newMovie.runtime} onChange={(e)=>dispatch(handleNewMovieChange({...newMovie,runtime:e.target.value}))}/>
                <input type="text" placeholder="trailer link" value={newMovie.trailer} onChange={(e)=>dispatch(handleNewMovieChange({...newMovie,trailer:e.target.value}))}/>
                <input type="number" placeholder="height" value={newMovie.height} onChange={(e)=>dispatch(handleNewMovieChange({...newMovie,height:e.target.value}))}/>
                <input type="number" placeholder="width" value={newMovie.width} onChange={(e)=>dispatch(handleNewMovieChange({...newMovie,width:e.target.value}))}/>
                <button type="submit" id="submitNewMovie">Add to the list</button>
            </form>
        </div>
    )
}

export default AddMovieCard
