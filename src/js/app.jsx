// import * as jQuery from 'jquery';

import $ from 'jquery';
import 'bootstrap-webpack';
import '../css/main.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import { addContact, removeContact } from './actions';
import {store} from './store';
import { ContactList } from './contacts.jsx';

class MainApp extends Component {
    render () {
        return (<ContactList contacts={this.props.contacts} />);
    }
}
var App = connect((r) => r)(MainApp);

const prodTemplate = <div>
    <Provider store={store}>
        <App />
    </Provider>
</div>;

const devStyle = {
    marginLeft: '30%'
};

const devTemplate = <div style={devStyle}>
    <Provider store={store}>
        <App />
    </Provider>,
    <DebugPanel left top bottom>
        <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
</div>;

ReactDOM.render(
    devTemplate,
    document.getElementById('main-content')
);

// Test data
store.dispatch(addContact('Bob', '45 Dat Road'));
store.dispatch(addContact('Marc','1300 Wat Were'));
