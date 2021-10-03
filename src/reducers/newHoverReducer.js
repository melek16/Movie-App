const newHoverReducer=(state=0,action)=>{
    switch (action.type) {
        case "handleNewHover":
            return action.payload
        default:
            return state 
    }
}

export default newHoverReducer