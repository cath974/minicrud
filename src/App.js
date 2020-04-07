import React, { Component } from 'react';
import User from './components/User';
import axios from 'axios'; 
import UserForm from './components/UserForm';

import './App.css';
// import UsersListFixed from './components/UsersListFixed';

class App extends Component {
  
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
  
      deleteUser = (index,e) => {
        const users = Object.assign([], this.state.users);
        users.splice(index,1);
        this.setState({users:users})
      }

      // addUser = (index,e) => {
      //   const users = Object.assign([], this.state.users);
      //   users.splice(index,0,"ff");
      //   this.setState({users:users})
      // }
  
  render() {
      return (
        
        <div className="App">
            {/* <UsersListFixed /> */}
            <div>
                <h3>Add a user</h3>
                <UserForm />
                <ul>
                {this.state.users.map((user,index) =>{
                    return(<User key={user.id}
                    delEvent={this.deleteUser.bind(this,index)}
                {...user} />)
                  })
                }
                </ul>
            </div>
        </div>
        
      );
      }    
}



export default App;
