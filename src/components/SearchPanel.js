// components are "dumb" react components that are not aware of redux
// they receive data from their parents through regular react props
// they are allowed to have local component state and view logic
// use them to avoid having view logic & local component state in "smart" components

import _ from 'lodash';
import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class SearchPanel extends Component {

    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        return (
            <div>
                <button className="button"
                        onClick={this.props.onClick}>
                    Find
                </button>
                <input ref="search"
                       type="text"/>
            </div>
        );
    }

}