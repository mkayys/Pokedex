import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';

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

    window.selectAllPokemon = selectAllPokemon;

    ReactDOM.render(<Root store={store}/>, rootEl);
});