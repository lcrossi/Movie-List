import React, { useState, useContext } from 'react';
import {MovieContext} from './MovieContext'; 


const AddMovie = () =>{
    const [count, setCount] = useState(0);  //contador que arma o count
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');
    const [movies, setMovies] = useContext(MovieContext);
    const limpar = () => {
        setName("");
        setPrice("");

    }

    const updateName = (e) => {
        setName(e.target.value);
        setId(e.target.id = "identidade_" + count);  //cria nova id se name for alterada (na pratica)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
        setId(e.target.id = "identidade_" + count); //cria nova id se price for alterado (na pratica)
    }

    const addMovie = e =>{
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price, id: id}]);
        console.log({name, price, id, count});
    };

    if (count < 10) {
    

        return(
            <div>
                <form onSubmit={addMovie}>
                    <input type="text" placeholder="Movie" name="name" value={name} id={id} onChange={updateName} />  {/**Se for: id={count} ele gera um novo id independentemente se algo foi alterado no name ou price */}
                    <input type="text" placeholder="Price" name="price" value={price} id={id} onChange={updatePrice} /> {/**Se nada eh alterado, o id sai vazio */}

                    <button  onClick={() => setCount(count + 1)}>Submit</button>
                </form>

                <button onClick={() => limpar()}>Limpar</button>
            </div>
        );

    } else{
         alert("Numero maximo de filmes adicionados.");
         return(
             <h3>Voce atingiu o limite de filmes adicionados!</h3>
         );
    }

}

export default AddMovie;