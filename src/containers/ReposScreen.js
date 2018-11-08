import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TopicsScreen.css';
import * as reposActions from '../store/repos/actions';
import ListView from '../components/ListView';
import ListRow from '../components/ListRow';
import {fetchRepos} from "../store/repos/actions";

class ReposScreen extends Component {

    constructor() {
        super();
        this.state = {
            username: undefined
        };
        this.handleChange = this.handleChange.bind(this);
        this.onApplyUserClick = this.onApplyUserClick.bind(this);

    }

    render() {
       // if (!this.reposList) return this.renderLoading();
        return (
            <div className="ReposScreen">
                <div>
                    <button className="button"
                        onClick={this.onApplyUserClick.bind(this)}>
                    Find
                </button>
                <input ref="search"
                       type="text"
                       id="searchbutton"
                       onChange={ this.handleChange }/>
                </div>
              <ListView
                    idsList={this.props.idsList}
                    reposList={this.props.reposList}
                    renderRow={this.renderRow.bind(this)} />
            </div>
        //hint
        );
    }

    handleChange({ target }) {
//        this.setState({
  //          [target.name]: target.value
    //    });
    }

    renderRow(rowId, row) {
        const selected = this.props.selectedIdsMap[rowId];
        return (
            <ListRow
                rowId={rowId}
                onClick={this.onRowClick.bind(this)}
                selected={selected}>
                <h3>{row.title}</h3>
                <p>{row.description}</p>
            </ListRow>
        )
    }

    onRowClick(rowId) {
        this.props.dispatch(reposActions.selectTopic(rowId));
    }

    onApplyUserClick() {
        this.props.dispatch(reposActions.applyUser(this.refs.search.value));
        this.props.dispatch(fetchRepos());
    }

}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    console.log(state);

    return {
        //idsList: repoSelectors.getIdsList(state),
        //reposList: repoSelectors.getReposList(state)
    };
}

export default connect(mapStateToProps)(ReposScreen);