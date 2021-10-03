import { useState } from 'react';
import './App.css';
import './darkMode.css'
import AddMovieCard from './Components/AddMovieCard';
import Filter from './Components/Filter';
import Footer from './Components/Footer';
import MovieList from './Components/MovieList';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import MainMovie from './Components/MainMovie';
import { useSelector } from 'react-redux';

function App() {
  const showAddMovie = useSelector(state => state.reducer.showAddMovie)
  const [mode, setMode] = useState(true)  //true = light
  return (
    <Router>
    <div className="App">
      {showAddMovie && <AddMovieCard />}
      <NavBar mode={mode} handleToggle={()=>{setMode(!mode);document.querySelector('body').className=mode ?'darkbody':''}}/>
      <Switch>
        <Route exact path="/">
        <Filter/>
     <MovieList  />
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
