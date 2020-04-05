import React from "react";

const Geo = ({ geogr}) => (
  <div className="geo">
      <p>{geogr.lat}</p>
      <p>{geogr.lng}</p>
  </div>
);

const Address = ({adr}) => (
  <div className="address">
      <p>{adr.street}</p>
      <p>{adr.suite}</p>
      <p>{adr.city}</p>
      <p>{adr.zipcode}</p>
      <p>{adr.suite}</p>
      <Geo  geogr={adr.geo} />  
      
  </div>
);

 const Button = ({ev}) => (
  <button
    id="btnDelete"
    type="button"
    className="btn"
    onClick={ev}
  >
    Delete user
  </button>
);

const User = ({ id, name, username, email, address, delEvent}) => (
  <li className="user">
      <Button ev={delEvent}/>
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <Address  adr={address} />   
  </li>
);

export default User;

  
