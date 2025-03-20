import React, { Component } from "react"
import axios from 'axios';

export default class Form extends Component {

    // useNameInput = React.useRef();
    state = { userName: ''};

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({userName: ''})
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="GitHub username" 
                value={this.state.userName} 
                onChange={event => this.setState({ userName: event.target.value })}
                required/>
                <button>Add card</button>
            </form>
        );
    }
}