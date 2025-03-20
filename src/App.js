import React, { Component } from "react";
import './App.css';
import CardList from './CardList/index.jsx';
import Form from './Form/index.jsx';

const testData = [];

class App extends Component {

  state = {
    profiles: testData,
  }

  addNewProfile = (profileData)=>{
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }))};

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles} />
      </div>

    )
  }
}
export default App;
