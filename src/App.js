import React from 'react';
import './App.css';
import Nav from './Nav';
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovies';


function App() {
  return (
    <MovieProvider>
        <div className="App">
            <Nav />
            <MovieList/>
            <AddMovie/>
        </div>
    </MovieProvider>
  );
}

export default App;
