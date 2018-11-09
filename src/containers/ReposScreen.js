import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as reposActions from '../store/repos/actions';
import * as reposSelectors from '../store/repos/reducer';
import ListView from '../components/ListView';
import {fetchRepos} from "../store/repos/actions";
import SearchPanel from "../components/SearchPanel";

class ReposScreen extends Component {

    constructor() {
        super();
        this.onApplyUserClick = this.onApplyUserClick.bind(this);
        this.getContent = this.getContent.bind(this);
    }

    render() {
        const content = this.getContent();
        return (
            <div className="ReposScreen">
              <SearchPanel onClick={this.onApplyUserClick.bind(this)}
                           ref='panel'/>
                {content}
            </div>
        );
    }

    onApplyUserClick() {
        this.props.dispatch(reposActions.applyUser(this.refs.panel.refs.search.value));
        this.props.dispatch(fetchRepos());
    }

    getContent() {
        debugger;
        if(!this.props.userName)
            return <h1>Go ahead, enter username and search!</h1>;
        if(!this.props.reposList)
            return <h1>User not found:(</h1>;
        return <ListView reposList={this.props.reposList}/>
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        reposList: reposSelectors.getReposList(state),
        userName: reposSelectors.getUserName(state)
    };
}

export default connect(mapStateToProps)(ReposScreen);