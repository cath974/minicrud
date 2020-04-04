import React from "react";
import User from './User';
import axios from 'axios'; 




export default class UsersListUrl extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users/`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <div>
        <h3>with users in api</h3>
        <div>
        {this.state.users.map(user => <User key={user.id} {...user} />)}
        </div>
      </div>
    )
  }
}



