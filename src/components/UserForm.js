
import React, { Component } from 'react';


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
      this.setState({ name: event.target.value });
    }
  

  render() {
   
    return (
      <form className="" onSubmit={this.handleSubmit}>
        <label htmlFor="namer">Name:</label>
        <input
          className=""
          id="idName"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    );
  
    }
}

export default UserForm;
