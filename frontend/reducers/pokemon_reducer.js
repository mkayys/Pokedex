import { 
    RECEIVE_ALL_POKEMON, 
    RECEIVE_SINGLE_POKEMON 
} from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;

    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            nextState = Object.assign({}, state, action.pokemon);
            return nextState;
        case RECEIVE_SINGLE_POKEMON:
            nextState = Object.assign({}, state, { [action.pokemon.id]: action.pokemon })
        default:
            return state;
    }
};

export default pokemonReducer;