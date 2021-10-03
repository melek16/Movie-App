export const handleSubmit=(newMovie)=>{
    return {
        type:"handleSubmit",
        payload:newMovie
    }
}

export const handleChange=(e)=>{
    return{
        type:"handleChange",
        payload:e.target.value
    }
}

export const handleSearchSubmit=()=>{
    return{
        type:"handleSearchSubmit",
    }
}

export const handleRating=(i)=>{
    return{
        type:"handleRating",
        payload:i
    }
}

export const handleHover=(i)=>{
    return{
        type:"handleHover",
        payload:i
    }
}

export const handleNewRating=(i)=>{
    return{
        type:"handleNewRating",
        payload:i
    }
}

export const handleNewHover=(i)=>{
    return{
        type:"handleNewHover",
        payload:i
    }
}

export const handleX=()=>{
    return{
        type:"handleX"
    }
}

export const handleNewMovieChange=(i)=>{
    return{
        type:"handleNewMovieChange",
        payload:i
    }
}