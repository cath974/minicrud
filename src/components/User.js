import React from "react";



// const Geo = ({ geogr}) => (
//   <div className="geo">
//       <p>{geogr.lat}</p>
//       <p>{geogr.lng}</p>
//   </div>
// );

// const Address = ({adr}) => (
//   <div className="address">
//       <p>{adr.street}</p>
//       <p>{adr.suite}</p>
//       <p>{adr.city}</p>
//       <p>{adr.zipcode}</p>
//       <p>{adr.suite}</p>
//       <Geo  geogr={adr.geo} />  
      
//   </div>
// );



const User = ({ id, name, username, email, editUser, deleteUser}) => (
  <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
      {/* <button className="btn btn-primary ml-2" onClick={editUser}>Edit</button>
      <button className="btn btn-danger ml-2" onClick={deleteUser}>Delete</button> */}
      </td>
  </tr>
);


export default User;


