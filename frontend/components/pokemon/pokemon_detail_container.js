import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
    debugger
    let pokemon = state.entities.pokemon[ownProps.match.params.pokemonId] || {};
    return {
        pokemon: pokemon,
    };
};

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);