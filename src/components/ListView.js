// components are "dumb" react components that are not aware of redux
// they receive data from their parents through regular react props
// they are allowed to have local component state and view logic
// use them to avoid having view logic & local component state in "smart" components

import _ from 'lodash';
import React, { Component } from 'react';
import ListRow from "./ListRow";

export default class ListView extends Component {

    render() {
        return (<ul>
                    {Object.keys(this.props.reposList)
                        .map(k => this.props.reposList[k])
                        .map(repo => <ListRow repo={repo}/>)}
                </ul>)
    }

}