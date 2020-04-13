import React from 'react';

const Button = ({title,ev}) => (
  <button
    type ="submit"
    className = "btn btn-dark"
    onClick={ev}
  >
    {title}
  </button>
);

export default Button;




