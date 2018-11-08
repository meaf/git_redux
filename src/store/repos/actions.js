// actions are where most of the business logic takes place
// they are dispatched by views or by other actions
// there are 3 types of actions:
//  async thunks - when doing asynchronous business logic like accessing a service
//  sync thunks - when you have substantial business logic but it's not async
//  plain object actions - when you just send a plain action to the reducer

import _ from 'lodash';
import * as types from './actionTypes';
import * as topicsSelectors from './reducer';
import gitService from '../../services/gitApi';

export function fetchRepos() {
    return async(dispatch, getState) => {
        try {
            console.log('fetching');
            const username = await topicsSelectors.getUserName(getState());
            const fetchPromises = gitService.getUserRepos(username);
            const topicPosts = await fetchPromises;
            console.log('fetched');
            // hint
            const reposById = _.keyBy(_.flatten(topicPosts), (post) => post.id);
            dispatch({ type: types.REPOS_FETCHED, reposById });
        } catch (error) {
            console.error(error);
        }
    };
}

export function applyUser(username) {
    return({ type: types.USER_SELECTED, username});
}
