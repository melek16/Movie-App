const hoverReducer=(state=0,action)=>{
    switch (action.type) {
        case "handleHover":
            return action.payload
            
    
        default:
            return state
    }
}
export default hoverReducer