import { createSlice } from '@reduxjs/toolkit'
import { movies } from '../movies'

const initialState = {
  hover: 0,
  rating: 0,
  newHover: 0,
  newRating:0,
  search:"",
  showAddMovie:false,
  listOfMovies:movies,
  newMovie:{title:"",description:"",posterURL:""},

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    handleSearchSubmit:(state)=>{
        state.search=`${state.search}`
},
    handleChange:(state,action)=>{
        state.search=action.payload
    },
    handleSubmit:(state,action)=>{
        state.listOfMovies.push(action.payload)
        console.log(action.type)
    },
    handleHover:(state,action)=>{
        state.hover=action.payload
    },
    handleRating:(state,action)=>{
        state.rating=action.payload
    },
    handleNewRating:(state,action)=>{
        state.newRating=action.payload
    },
    handleNewHover:(state,action)=>{
        state.newHover=action.payload
    },
    handleX:(state)=>{
        state.showAddMovie=!state.showAddMovie
    },
    handleNewMovieChange:(state,action)=>{
        state.newMovie=action.payload
    }
    
  },
})


export const { handleSearchSubmit,handleChange,handleSubmit,handleHover,handleRating,handleNewRating ,handleNewHover,handleX,handleNewMovieChange} = counterSlice.actions

export default counterSlice.reducer