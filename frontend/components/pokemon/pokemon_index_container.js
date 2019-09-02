import { connect } from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';

const mapStateToProps = state => ({
    // piece of state that container subscribes to
    pokemon: selectAllPokemon(state),
});

const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () => dispatch(requestAllPokemon()),
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);