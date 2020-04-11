import  React, { useState , createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
        
    const [movies, setMovies] = useState([
        {
            name: 'Joker',
            price: '$10',
            id: 23124
        },

        {
            name: 'SPIDER-MAN',
            price: '$10',
            id: 2556124
        },

        {
            name: 'It - Chapter two',
            price: '$10',
            id: 23524
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    ); 
}