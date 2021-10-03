const showAddMovieReducer=(state=false,action)=>{
    switch (action.type) {
        case "handleX":
            return !state
    
        default:
            return state
    }
}

export default showAddMovieReducer