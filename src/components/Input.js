import React from 'react';


const Input = ({name,title,inputType,value, handleChange}) => (

	(  
  <div className="form-group">
    <label htmlFor={name} className="form-label">{title}</label>
    <input
      className="form-control"
      id={name}
      name={name}
      type={inputType}
      value={value}
      onChange={handleChange}
     />
  </div>
)
)

export default Input;

