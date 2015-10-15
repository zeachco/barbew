export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

/*
 * action creators
 */

export function addContact(name, address) {
    return { type: ADD_CONTACT, name, address };
}

export function removeContact(id) {
    return { type: REMOVE_CONTACT, id };
}
