import React from "react";

const Geo = ({ lat, lng}) => (
  <div className="geo">
      <p>{lat}</p>
      <p>{lng}</p>
  </div>
);

const Address = ({ street, suite,city, zipcode}) => (
  <div className="address">
      <p>{street}</p>
      <p>{suite}</p>
      <p>{city}</p>
      <p>{zipcode}</p>
      <p>{suite}</p>
      < Geo />
  </div>
);

const User = ({ id, name, username, email}) => (
  <div className="user">
  <p>{id}</p>
  <p>{name}</p>
  <p>{username}</p>
  <p>{email}</p>
  < Address />
</div>
);

export default User;

  
