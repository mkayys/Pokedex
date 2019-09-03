import { 
    RECEIVE_ALL_POKEMON, 
    RECEIVE_SINGLE_POKEMON 
} from '../actions/pokemon_actions';

import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};

    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            // debugger
            Object.keys(action.pokemon).map(pokeId => {
                let old = state[pokeId] === undefined ? {} : state[pokeId]
                nextState[pokeId] = Object.assign(old, action.pokemon[pokeId])
            })
            // nextState = merge({}, state, action.pokemon);
            return nextState;
        case RECEIVE_SINGLE_POKEMON:
            nextState = merge({}, state, { [action.payload.pokemon.id]: action.payload.pokemon });
            return nextState;
        default:
            return state;
    }
};

export default pokemonReducer;