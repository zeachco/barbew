import { compose, createStore } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import contactReducers from './reducers';

const composeStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export const store = composeStore(contactReducers); //, initialState);
