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

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        //isSelectionFinalized: topicsSelectors.isTopicSelectionFinalized(state)
    };
}

export default connect(mapStateToProps)(App);