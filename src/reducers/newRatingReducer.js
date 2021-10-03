const newRatingReducer=(state=0,action)=>{
    switch (action.type) {
        case "handleNewRating":
            return action.payload
           
    
        default:
           return state
    }
}

export default newRatingReducer