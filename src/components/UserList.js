import React from 'react';


const UserList = ({users,editUser,deleteUser}) => (
     
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            { 
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                    <button className="btn btn-primary ml-2" onClick={() => editUser(user)}>Edit</button>  
                    <button className="btn btn-danger ml-2" onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                  )
                )
            }
        </tbody>
      </table>
    );

    
export default UserList;
