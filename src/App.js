import { useState } from 'react';
import './App.css';
import AddMovieCard from './Components/AddMovieCard';
import Filter from './Components/Filter';
import Footer from './Components/Footer';
import MovieList from './Components/MovieList';
import NavBar from './Components/NavBar';
import { movies } from './movies';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import MainMovie from './Components/MainMovie';

function App() {
  const [listOfMovies, setListOfMovies] = useState(movies)
  const [search, setSearch] = useState("")
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState();
  const [showAddMovie, setShowAddMovie] = useState(false)
  const [newRating, setNewRating] = useState()
  const [newHover, setNewHover] = useState()
  const [newMovie, setNewMovie] = useState({title:"",description:"",posterURL:""})
  return (
    <Router>
    <div className="App">
      {showAddMovie && <AddMovieCard rating={newRating} handleRating={(i)=>setNewRating(i)}
       hover={newHover} handleHover={(i)=>setNewHover(i)} handleX={()=>setShowAddMovie(!showAddMovie)}
       newMovie={newMovie} handleChange={i=>setNewMovie(i)} handleSubmit={(newMovie)=>setListOfMovies([...listOfMovies,newMovie])}/>}
      <NavBar/>
      <Switch>
        <Route exact path="/">
        <Filter search={search} handleChange={e=>setSearch(e.target.value)} handleSubmit={(e)=>{e.preventDefault();setSearch(search)}} rating={rating} handleRating={(i)=>setRating(i)} hover={hover} handleHover={(i)=>setHover(i)}/>
     <MovieList listOfMovies={listOfMovies} search={search} rating={hover || rating} showAddMovie={()=>{setNewMovie({title:"",description:"",posterURL:""});setNewRating(0);setNewHover(0);setShowAddMovie(!showAddMovie)}}/>
        </Route>
        <Route exact path='/movie/:movieName'>
            <MainMovie/>
        </Route>
      </Switch>
      
  <Footer/>
  
    </div>
    </Router>
  
  );
}

export default App;
