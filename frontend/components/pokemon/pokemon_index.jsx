import React from 'react';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        let pokemon = this.props.pokemon.map(poke => {
            return <li key={poke.id}>{poke.name} 
                    <img src={poke.image_url} alt={poke.name} />
                </li>
        });
        return (
            <div>
                <ul>
                    {pokemon}
                </ul>
            </div>
        )
    }
};


export default PokemonIndex;