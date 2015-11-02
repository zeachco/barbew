import React, { Component, PropTypes } from 'react';
import { addContact, removeContact } from './actions';
import {store} from './store';

class NewContactForm extends Component {
    addContact (e){
        debugger;
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

export class ContactList extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Contacts</h1>
                <ul className="list-group">
                    {this.props.contacts.map((c) =>
                        <Contact key={c.name} contact={c} />
                    )}</ul>
                <NewContactForm />
            </div>
        );
    }
}
