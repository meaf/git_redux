import React, { Component } from 'react';

export default class ListRow extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <li>
                <p>
                    <a href={this.props.repo.url}>{this.props.repo.name} </a>
                    Watchers: <b>{this.props.repo.watchers}</b></p>
            </li>
        );
    }
}
