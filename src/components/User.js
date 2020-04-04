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

const User = ({ id, name, username, email, address}) => (
  <div className="user">
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <Address  adr={address} />   
  </div>
);

export default User;

  
