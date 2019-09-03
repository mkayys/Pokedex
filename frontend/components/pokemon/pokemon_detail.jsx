import React from 'react';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
            this.props.requestSinglePokemon(this.props.match.params.pokemonId);
        }
    }


    render() {
        // debugger
        if (this.props.pokemon === undefined) return null;
        return (
            <div className='pokemon-details'>
                <img className='pokemon-main-img' src={this.props.pokemon.image_url} alt={this.props.pokemon.name} />
                <div className='pokemon-info'>
                    <h2 className='pokemon-name'>{this.props.pokemon.name}</h2>
                    <div className='pokemon-type'>
                        Type: {this.props.pokemon.poke_type}
                    </div>
                    <div className='pokemon-attack'>
                        Attack: {this.props.pokemon.attack}
                    </div>
                    <div className='pokemon-defense'>
                        Defense: {this.props.pokemon.defense}
                    </div>
                    <div className='pokemon-moves'>
                        Moves: {this.props.pokemon.moves}
                    </div>
                </div>
            </div>
        )
    }
};


export default PokemonDetail;