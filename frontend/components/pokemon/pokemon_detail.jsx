import React from 'react';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    render() {
        debugger
        if (this.props === undefined) return null;
        return (
            <div>
                <h1>{this.props.pokemon.name}</h1>
                <img src={this.props.pokemon.image_url} alt={this.props.pokemon.name} />
                <div>
                    Attack: {this.props.pokemon.attack}
                </div>
                <div>
                    Defense: {this.props.pokemon.defense}
                </div>
                <div>
                    Moves: {this.props.pokemon.moves}
                </div>
                <div>
                    Type: {this.props.pokemon.poke_type}
                </div>
            </div>
        )
    }
};


export default PokemonDetail;