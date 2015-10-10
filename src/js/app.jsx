
// import * as jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap-webpack';
import '../css/main.css';

var Contact = React.createClass({
  displayName: 'Sapin',
  render: function () {
    return (
      <li className="list-group-item">
          <span>{this.props.name} - {this.props.address}</span>
      </li>
    )
  }
})

var ContactList = React.createClass({
  displayName: 'Sapin',
  render: function () {

    var contactList = [
      {name: 'Bob', address: '45 Dat Road'},
      {name: 'Mary', address: '1300 Wat Were'}
    ];

    var contacts = [];

    contactList.forEach(function(c){
      contacts.push(<Contact name={c.name} address={c.address} />);
    });

    return (
      <div className='container'>
          <h1>Contacts</h1>
          <ul className="list-group">{contacts}</ul>
      </div>
    )
  }
})

ReactDOM.render(<ContactList/>, document.getElementById('main-content'));
