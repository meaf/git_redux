// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

//import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
    reposList: [],
    currentUser: undefined
});

export default function reduce(state = initialState, action = {}) {
    console.log("action: " + action.type.toString());
    switch (action.type) {
        case types.POSTS_FETCHED:
            return {...state, postsById: action.postsById};
        case types.USER_SELECTED:
            return {...state, currentUser: action.username};
        default:
            return state;
    }
}

// selectors

export function getReposList(state){
    return state.repos.reposList;
}

export function getUserName(state) {
    return state.repos.username;
}
