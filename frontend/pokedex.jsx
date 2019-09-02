import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const rootEl = document.getElementById('root');
    //app/views/static_pages/root.html

    //testing:
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.requestAllPokemon = requestAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;

    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});