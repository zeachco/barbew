// import * as jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap-webpack';
import '../css/main.css';

import { addContact, removeContact } from './actions';
import { createStore } from 'redux';
import contactDemoApp from './reducers';

// STORE
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(contactDemoApp);

var NewContactForm = React.createClass({
    displayName: 'NewContactDisplay',
    addContact: function(e){
        debugger;
    },
    render: function () {
        var nameValue, addressValue;
        return (
            <div className="list-group-item">
                <input type="text" placeholder="name" value={this.nameValue}/>
                <input type="text" placeholder="address" value={addressValue}/>
                <input type="submit" value="Add" onClick={this.addContact}></input>
            </div>
        );
    }
});

var Contact = React.createClass({
    displayName: 'ContactDisplay',
    removeContact: function(id){
        store.dispatch(removeContact(id));
    },
    render: function () {
        return (
            <li className="list-group-item">
                <span>{this.props.contact.name} - {this.props.contact.address}</span>
                <span className="list-action" onClick={this.removeContact.bind(null, this.props.contact.id)}> Del </span>
            </li>
        );
    }
});

var ContactList = React.createClass({
    displayName: 'ContactListDisplay',
    render: function () {
        var contacts = [];
        this.props.contacts.forEach(function(c){
          contacts.push(<Contact contact={c} />);
        });

        return (
            <div className='container'>
                <h1>Contacts</h1>
                <ul className="list-group">{contacts}</ul>
                <NewContactForm />
            </div>
        );
    }
});

store.subscribe(function () {
    console.log('rerendering');
    ReactDOM.render(<ContactList contacts={store.getState().contacts} />, document.getElementById('main-content'));
});

store.dispatch(addContact('Bob', '45 Dat Road'));
store.dispatch(addContact('Marc','1300 Wat Were'));
