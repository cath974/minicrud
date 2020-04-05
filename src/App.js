import React, { Component } from 'react';
import User from './components/User';
import axios from 'axios'; 
import './App.css';
// import UsersListFixed from './components/UsersListFixed';
// import UsersListUrl from './components/UsersListUrl';


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
  
  render() {
      return (
        
        <div className="App">
            {/* <UsersListFixed /> */}
            <div>
                <h3>with users in api</h3>
                <ul>
                {this.state.users.map((user,index) =>{
                    return(<User key={user.id} {...user}
                    delEvent={this.deleteUser.bind(this,index)}
                 />)
                  })
                }
                </ul>
            </div>
        </div>
        
      );
      }    
}



export default App;
