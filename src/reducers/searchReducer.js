const searchReducer=(state="",action)=>{
    switch (action.type) {
        case "handleChange":
           return action.payload 
        case "handleSearchSubmit":
            return  state   
    
        default:
          return state  
    }
}

export default searchReducer