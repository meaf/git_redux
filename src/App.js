import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ReposScreen from "./containers/ReposScreen";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ReposScreen />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(App);