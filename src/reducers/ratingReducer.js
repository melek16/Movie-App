const ratingReducer=(state=0,action)=>{
    switch (action.type) {
        case "handleRating":
            return action.payload
            
    
        default:
          return state  
    }
}

export default ratingReducer