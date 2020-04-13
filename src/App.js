import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import UserList from './components/UserList';

class App extends Component {
    constructor(){
      super();

      this.state = { 
        id: null,
        name:'',
        username:'',
        email:'',
        user: {},
        users: [],
        editing: false
        
      };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
      }

      handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
     
        this.setState({
          [name]:value
        })
      }
    
      addUser(event){
        event.preventDefault()
        const user = {
          id: Math.max(...this.state.users.map(el => el.id)) + 1,
          name: this.state.name,
          username: this.state.username,
          email: this.state.email,
          status: this.state.status
        };
    
        this.setState({
          name: '',
          username: '',
          email:'',
          user: user,
          users: [...this.state.users, user]
        })
      }


      deleteUser(id) {
        const users = this.state.users.filter( user => user.id !== id );
        this.setState({users: users});
        
      }

      editUser(user) {
        this.setState({
          editing: true,
          name:user.name,
          username:user.username,
          email:user.email,
          user: user
        });
      }

      updateUser(event) {
        event.preventDefault();
        const updatedName = this.state.name;
        const updatedUsername = this.state.username;
        const updatedEmail = this.state.email;
        const updatedUser = Object.assign({}, this.state.user, { name: updatedName, username: updatedUsername, email:updatedEmail })
        const users = this.state.users.map((user) => (user.id === this.state.user.id ? updatedUser : user));
        this.setState({ name:'', username: '', email:'',  editing: false ,users: users});
      }
    
     
        render() {
          const { name, username, email, users, editing } = this.state;
            return (
              <div className="App">
                
                <div className="row App-main">
                { 
                  editing  ? (
                  <EditUserForm 
                  name={name}
                  username={username}
                  email={email} 
                  handleInputChange={this.handleInputChange}
                  updateUser={this.updateUser}
                  />
                  ) : (
                  <AddUserForm 
                    name={name}
                    username={username}
                    email={email}
                    handleInputChange={this.handleInputChange} 
                    addUser={this.addUser}
                  />
                  )
                }
                
                </div>
                <hr></hr>
                  <div className="row App-list">
                    <UserList 
                      users= {users} 
                      deleteUser={this.deleteUser}
                      editUser={this.editUser}
                    />
                  </div>
              </div>
            );
          }
  }
      



export default App;
