import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => (
    <li className="pokemon-index-item">
        <Link className='pokemon-link' to={`/pokemon/${pokemon.id}`} >
            <img src={pokemon.image_url} alt={pokemon.name} />
            <span>{pokemon.name}</span>
        </Link>
    </li>
);

export default PokemonIndexItem;