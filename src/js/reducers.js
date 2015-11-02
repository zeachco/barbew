import { ADD_CONTACT, REMOVE_CONTACT } from './actions';

const initialState = {
  nextId: 0,
  contacts:  []
};

/** REDUCER
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 */
function contactReducers(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case 'ADD_CONTACT':
            let obj = Object.assign({}, state, {
                contacts: [...state.contacts,
                                {name: action.name, address: action.address, id: state.nextId}],
                nextId: state.nextId+1
            });
            return obj;
        case 'REMOVE_CONTACT':
            return Object.assign({}, state, {
                contacts: state.contacts.filter(function(c) { return c.id !== action.id; }),
            });
        default:
            return state;
    }
}

export default contactReducers;
