import { movies } from "../movies";

const listOfMoviesReducer=(state=movies,action)=>{
    switch (action.type) {
        case "handleSubmit":
            return [...state,action.payload]
        default:
            return state 
    }
}
export default listOfMoviesReducer