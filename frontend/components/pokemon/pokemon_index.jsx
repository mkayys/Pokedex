import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        let pokemons = this.props.pokemon.map(poke => {
            return <PokemonIndexItem key={poke.id} pokemon={poke} />
        });
        return (
            <section className='pokedex'>
                <ul className='pokemon-index'>
                    {pokemons}
                </ul>

                <Route
                    path="/pokemon/:pokemonId"
                    component={PokemonDetailContainer}
                />
            </section>
        )
    }
};


export default PokemonIndex;