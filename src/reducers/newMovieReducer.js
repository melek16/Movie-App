const newMovieReducer=(state={title:"",description:"",posterURL:""},action)=>{
    switch (action.type) {
        case "handleNewMovieChange":
            return action.payload
            
        default:
            return state
    }
}

export default newMovieReducer