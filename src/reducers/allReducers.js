import { combineReducers } from "redux";
import hoverReducer from "./hoverReducer";
import listOfMoviesReducer from "./listOfMoviesReducer";
import newHoverReducer from "./newHoverReducer";
import newMovieReducer from "./newMovieReducer";
import newRatingReducer from "./newRatingReducer";
import ratingReducer from "./ratingReducer";
import searchReducer from "./searchReducer";
import showAddMovieReducer from "./showAddMovieReducer";

export const allReducers=combineReducers({
    listOfMovies:listOfMoviesReducer,
    search:searchReducer,
    rating:ratingReducer,
    hover:hoverReducer,
    newRating:newRatingReducer,
    newHover:newHoverReducer,
    showAddMovie:showAddMovieReducer,
    newMovie:newMovieReducer
})