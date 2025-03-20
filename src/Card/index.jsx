import React, { Component } from "react";

export default class Card extends Component {

    render() {
        return (
            <div className="github-profile">
                <img src={this.props.avatar_url} />
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="company">{this.props.company}</div>
                </div>
            </div>
        );
    }
}