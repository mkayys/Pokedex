import React from 'react';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    render() {
        // debugger
        if (this.props === undefined) return null;
        let { pokemon } = this.props;
        return (
            <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image_url} alt={pokemon.name} />
                <div>
                    Attack: {pokemon.attack}
                </div>
                <div>
                    Defense: {pokemon.defense}
                </div>
                <div>
                    Moves: {pokemon.moves}
                </div>
                <div>
                    Type: {pokemon.poke_type}
                </div>
            </div>
        )
    }
};


export default PokemonDetail;