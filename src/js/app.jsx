// import * as jQuery from 'jquery';

import $ from 'jquery';
import 'bootstrap-webpack';
import '../css/main.css';

import { addContact, removeContact } from './actions';
import contactDemoApp from './reducers';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { devTools, persistState } from 'redux-devtools';

const composeStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = composeStore(contactDemoApp); //, initialState);

class NewContactForm extends Component {
    addContact (e){
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }

    render() {
        var nameValue, addressValue;
        return (
            <div className="list-group-item">
                <input type="text" placeholder="name" value={this.nameValue}/>
                <input type="text" placeholder="address" value={addressValue}/>
                <input type="submit" value="Add" onClick={this.addContact}></input>
            </div>
        );
    }
}

class Contact extends Component {
    removeContact (id){
        store.dispatch(removeContact(id));
    }

    render () {
        return (
            <li className="list-group-item">
                <span>{this.props.contact.name} - {this.props.contact.address}</span>
                <span className="list-action" onClick={this.removeContact.bind(null, this.props.contact.id)}> Del </span>
            </li>
        );
    }
}

class ContactList extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Contacts</h1>
                <ul className="list-group">
                    {this.props.contacts.map((c) =>
                        <Contact contact={c} />
                    )}</ul>
                <NewContactForm />
            </div>
        );
    }
}

class MainApp extends Component {
    render () {
        return (<ContactList contacts={this.props.contacts} />);
    }
}
var App = connect((r) => r)(MainApp);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>,
        <DebugPanel left top bottom>
            <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
    </div>
    , document.getElementById('main-content')
);

store.dispatch(addContact('Bob', '45 Dat Road'));
store.dispatch(addContact('Marc','1300 Wat Were'));
