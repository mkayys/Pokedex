import React from 'react';

const ItemDetail = ({ pokemon }) => (
    <li className="pokemon-index-item">
        <Link className='pokemon-link' to={`/pokemon/${pokemon.id}`} >
            <span>{pokemon.id}</span>
            <img className='pokemon-img' src={pokemon.image_url} alt={pokemon.name} />
            <span>{pokemon.name}</span>
        </Link>
    </li>
);

export default ItemDetail;